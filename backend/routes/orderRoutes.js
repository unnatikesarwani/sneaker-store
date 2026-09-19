const express = require("express");

const Order = require("../models/Order");
const Product = require("../models/Product");
const Cart = require("../models/Cart");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// ==========================================
// CREATE ORDER FROM CART
// ==========================================

router.post("/", authMiddleware, async (req, res) => {

    try {
        const {
            shippingAddress,
            paymentMethod = "COD",
            promoCode = ""
        } = req.body;

        // ------------------------------
        // Validate shipping address
        // ------------------------------

        if (
            !shippingAddress ||
            !shippingAddress.fullName ||
            !shippingAddress.phone ||
            !shippingAddress.address ||
            !shippingAddress.city ||
            !shippingAddress.state ||
            !shippingAddress.pincode
        ) 
        {
            return res.status(400).json({
                message: "Complete shipping address is required"
            });
        }
        
        // ------------------------------------------
        // Validate phone and pincode
        // ------------------------------------------

        const phoneRegex = /^[6-9]\d{9}$/;
        const pincodeRegex = /^\d{6}$/;

        if (!phoneRegex.test(shippingAddress.phone)) {
            return res.status(400).json({
            message: "Please enter a valid 10-digit phone number"
            });
        }

        if (!pincodeRegex.test(shippingAddress.pincode)) {
            return res.status(400).json({
            message: "Please enter a valid 6-digit pincode"
            });
        }

        // ------------------------------------------
        // Prevent multiple pending online orders
        // ------------------------------------------

        if (paymentMethod === "ONLINE") {

            const existingPendingOrder = await Order.findOne({
                user: req.userId,
                paymentMethod: "ONLINE",
                paymentStatus: "PENDING",
                orderStatus: "PLACED"
            });

            if (existingPendingOrder) {
                return res.status(400).json({
                    message:
                        "You already have a pending online payment. Please complete or cancel that order first."
                });
            }
        }

        // ------------------------------
        // Validate payment method
        // ------------------------------

        if (!["COD", "ONLINE"].includes(paymentMethod)) {
            return res.status(400).json({
                message: "Invalid payment method"
            });
        }
        // ------------------------------
        // Validate promo code
        // ------------------------------

        const normalizedPromoCode = promoCode.trim().toUpperCase();

        const validPromoCodes = {
            SNEAKER20: {
                type: "PERCENT",
                value: 20
            },

            GRAIL10: {
                type: "PERCENT",
                value: 10
            },

            DROP500: {
                type: "FLAT",
                value: 500
            }
        };

        let appliedPromo = null;

        if (normalizedPromoCode) {

            const promo = validPromoCodes[normalizedPromoCode];

            if (!promo) {
                return res.status(400).json({
                    message: "Invalid promo code"
                });
            }

            appliedPromo = {
                code: normalizedPromoCode,
                type: promo.type,
                value: promo.value
            };
        }

        // ------------------------------
        // Get user's cart
        // ------------------------------

        const cart = await Cart.findOne({
            user: req.userId
        });

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                message: "Your cart is empty"
            });
        }

        // ------------------------------
        // Build order items
        // ------------------------------

        const orderItems = [];
        let subtotal = 0;

        for (const cartItem of cart.items) {

            const product = await Product.findOne({
                productId: cartItem.productId
            });

            if (!product) {
                return res.status(404).json({
                    message: `Product ${cartItem.productId} no longer exists`
                });
            }

            // Check stock
            if (product.stock < cartItem.quantity) {
                return res.status(400).json({
                    message: `${product.name} does not have enough stock`
                });
            }

            // IMPORTANT:
            // Price comes from MongoDB, NOT frontend
            const price = product.price;

            const itemTotal = price * cartItem.quantity;

            subtotal += itemTotal;

            orderItems.push({
                product: product._id,
                productId: product.productId,
                name: product.name,
                price: price,
                image: product.image,
                color: product.color,
                size: cartItem.size,
                quantity: cartItem.quantity
            });
        }
        
        // ------------------------------
        // Calculate discount
        // ------------------------------

        let discountAmount = 0;
        if (appliedPromo) {

            if (appliedPromo.type === "PERCENT") {
                discountAmount += Math.round(
                    subtotal * (appliedPromo.value / 100)
                );
            }

            if (appliedPromo.type === "FLAT") {
                discountAmount += appliedPromo.value;
            }
        }

        // Never allow discount to exceed subtotal
        discountAmount = Math.min(
            discountAmount,
            subtotal
        );

        const totalAmount = Math.max(
            0,
            subtotal - discountAmount
        );
        // ------------------------------
        // Create order
        // ------------------------------

        const order = await Order.create({
            user: req.userId,

            items: orderItems,

            totalAmount: totalAmount,
            discountAmount: discountAmount,
            promoCode: normalizedPromoCode,
            shippingAddress: {
                fullName: shippingAddress.fullName,
                phone: shippingAddress.phone,
                address: shippingAddress.address,
                city: shippingAddress.city,
                state: shippingAddress.state,
                pincode: shippingAddress.pincode
            },

            paymentMethod: paymentMethod,

            paymentStatus:
                paymentMethod === "COD"
                    ? "PENDING"
                    : "PENDING",

            orderStatus: "PLACED"
        });
        // ------------------------------------------
        // Deduct stock ONLY for COD orders
        // ------------------------------------------
        
        if (paymentMethod === "COD") {
        
            for (const cartItem of cart.items) {
        
                const product = await Product.findOne({
                    productId: cartItem.productId
                });
        
                if (product) {
        
                    product.stock =
                        Number(product.stock) -
                        Number(cartItem.quantity);
        
                    await product.save();
                }
            }
        }

        // ------------------------------
        // Clear user's cart
        // ------------------------------
        if (paymentMethod === "COD") {
            cart.items = [];
            await cart.save();
        }

        // ------------------------------
        // Send response
        // ------------------------------

        res.status(201).json({
            message: "Order placed successfully",

            order: {
                id: order._id,
                totalAmount: order.totalAmount,
                items: order.items,
                shippingAddress: order.shippingAddress,
                paymentMethod: order.paymentMethod,
                paymentStatus: order.paymentStatus,
                orderStatus: order.orderStatus,
                createdAt: order.createdAt
            }
        });

    }catch(error) {

        console.error("Create order error:", error);

        res.status(500).json({
            message: "Failed to place order"
        });
    }
});


// ==========================================
// GET MY ORDERS
// ==========================================

router.get("/", authMiddleware, async (req, res) => {
    try {

        const orders = await Order.find({
            user: req.userId
        }).sort({
            createdAt: -1
        });

        res.status(200).json(orders);

    } catch (error) {

        console.error("Get orders error:", error);

        res.status(500).json({
            message: "Failed to fetch orders"
        });
    }
});


// ==========================================
// GET SINGLE ORDER
// ==========================================

router.get("/:id", authMiddleware, async (req, res) => {
    try {

        const order = await Order.findOne({
            _id: req.params.id,
            user: req.userId
        });

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json(order);

    } catch (error) {

        console.error("Get order error:", error);

        res.status(500).json({
            message: "Failed to fetch order"
        });
    }
});

// ==========================================
// CANCEL MY ORDER
// ==========================================

router.patch("/:id/cancel", authMiddleware, async (req, res) => {
    try {

        const order = await Order.findOne({
            _id: req.params.id,
            user: req.userId
        });

        // Order doesn't belong to this user
        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        // Only PLACED orders can be cancelled
        if (order.orderStatus !== "PLACED") {
            return res.status(400).json({
                message: `Order cannot be cancelled because it is already ${order.orderStatus}`
            });
        }
        // ------------------------------------------
// Restore stock only if stock was deducted
// ------------------------------------------

if (
    order.paymentMethod === "COD" ||
    order.paymentStatus === "PAID"
) {

    for (const orderItem of order.items) {

        const product = await Product.findOne({
            productId: orderItem.productId
        });

        if (product) {

            product.stock =
                Number(product.stock) +
                Number(orderItem.quantity);

            await product.save();
        }
    }
}

        // Change order status
        order.orderStatus = "CANCELLED";

        await order.save();
        res.status(200).json({
            message: "Order cancelled successfully",
            order: order
        });

    } catch (error) {

        console.error("Cancel order error:", error);

        res.status(500).json({
            message: "Failed to cancel order"
        });
    }
});
module.exports = router;