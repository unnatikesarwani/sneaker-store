const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const Order = require("../models/Order");
const Product = require("../models/Product");
const Cart = require("../models/Cart");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// ==========================================
// RAZORPAY INSTANCE
// ==========================================

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});


// ==========================================
// CREATE RAZORPAY ORDER
// ==========================================

router.post("/create-order", authMiddleware, async (req, res) => {
    try {

        const { orderId } = req.body;

        if (!orderId) {
            return res.status(400).json({
                message: "Order ID is required"
            });
        }

        // Find user's order
        const order = await Order.findOne({
            _id: orderId,
            user: req.userId
        });

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        // Only unpaid online orders
        if (order.paymentMethod !== "ONLINE") {
            return res.status(400).json({
                message: "This order does not require online payment"
            });
        }

        if (order.paymentStatus === "PAID") {
            return res.status(400).json({
                message: "Order is already paid"
            });
        }

        // Amount in paise
        const amountInPaise =
            Math.round(Number(order.totalAmount) * 100);

        const razorpayOrder = await razorpay.orders.create({
            amount: amountInPaise,
            currency: "INR",
            receipt: `order_${order._id}`,
            notes: {
                mongoOrderId: order._id.toString(),
                userId: req.userId.toString()
            }
        });

        order.razorpayOrderId = razorpayOrder.id;
        await order.save();

        res.status(201).json({
            message: "Razorpay order created",

            razorpayOrder: {
                id: razorpayOrder.id,
                amount: razorpayOrder.amount,
                currency: razorpayOrder.currency
            }
        });

    } catch (error) {

        console.error(
            "Create Razorpay order error:",
            error
        );

        res.status(500).json({
            message: "Failed to create payment order"
        });
    }
});


// ==========================================
// VERIFY RAZORPAY PAYMENT
// ==========================================

router.post("/verify", authMiddleware, async (req, res) => {
    try {

        const {
            orderId,
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        if (
            !orderId ||
            !razorpay_order_id ||
            !razorpay_payment_id ||
            !razorpay_signature
        ) {
            return res.status(400).json({
                message: "Payment verification data is incomplete"
            });
        }

        // Find user's order
        const order = await Order.findOne({
            _id: orderId,
            user: req.userId
        });

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        if (order.paymentStatus === "PAID") {
            return res.status(400).json({
            message: "Order is already paid"
            });
        }

        if (order.razorpayOrderId !== razorpay_order_id) {
            return res.status(400).json({
                message: "Invalid Razorpay order"
            });
        }

        // Create signature

        const generatedSignature =
            crypto
                .createHmac(
                    "sha256",
                    process.env.RAZORPAY_KEY_SECRET
                )
                .update(
                    `${razorpay_order_id}|${razorpay_payment_id}`
                )
                .digest("hex");

        // Compare signatures
        if (generatedSignature !== razorpay_signature) {

            order.paymentStatus = "FAILED";

            await order.save();

            return res.status(400).json({
                message: "Payment verification failed"
            });
        }

        // ------------------------------------------
        // Payment verified successfully
        // ------------------------------------------
        
        order.paymentStatus = "PAID";
        
        
        // ------------------------------------------
        // Deduct stock
        // ------------------------------------------
        
        for (const orderItem of order.items) {
        
            const product = await Product.findOne({
                productId: orderItem.productId
            });
        
            if (!product) {
                return res.status(404).json({
                    message: `Product ${orderItem.productId} no longer exists`
                });
            }
        
            // Safety check
            if (product.stock < orderItem.quantity) {
        
                return res.status(400).json({
                    message:
                        `${product.name} no longer has enough stock`
                });
            }
        
            product.stock =
                Number(product.stock) -
                Number(orderItem.quantity);
        
            await product.save();
        }
        
        
        // ------------------------------------------
        // Clear user's cart
        // ------------------------------------------
        
        const cart = await Cart.findOne({
            user: req.userId
        });
        
        if (cart) {
        
            cart.items = [];
        
            await cart.save();
        }
        
        
        // ------------------------------------------
        // Save paid order
        // ------------------------------------------
        
        await order.save();
        
        
        res.status(200).json({
            message: "Payment verified successfully",
            order
        });

    } catch (error) {

        console.error(
            "Payment verification error:",
            error
        );

        res.status(500).json({
            message: "Failed to verify payment"
        });
    }
});


module.exports = router;