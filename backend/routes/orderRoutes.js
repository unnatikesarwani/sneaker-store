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
            paymentMethod = "COD"
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
        ) {
            return res.status(400).json({
                message: "Complete shipping address is required"
            });
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
        let totalAmount = 0;

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

            totalAmount += itemTotal;

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
        // Create order
        // ------------------------------

        const order = await Order.create({
            user: req.userId,

            items: orderItems,

            totalAmount: totalAmount,

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

        // ------------------------------
        // Clear user's cart
        // ------------------------------

        cart.items = [];

        await cart.save();

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

    } catch (error) {

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