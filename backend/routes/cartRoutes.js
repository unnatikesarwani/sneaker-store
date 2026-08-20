const express = require("express");

const Cart = require("../models/Cart");
const Product = require("../models/Product");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// ==========================================
// GET CURRENT USER'S CART
// ==========================================

router.get("/", authMiddleware, async (req, res) => {
    try {
        let cart = await Cart.findOne({
            user: req.userId
        });

        if (!cart) {
            cart = await Cart.create({
                user: req.userId,
                items: []
            });
        }

        res.status(200).json(cart);

    } catch (error) {
        console.error("Get cart error:", error);

        res.status(500).json({
            message: "Failed to fetch cart"
        });
    }
});


// ==========================================
// ADD PRODUCT TO CART
// ==========================================

router.post("/", authMiddleware, async (req, res) => {
    try {
        const {
            productId,
            size = "UK 8",
            quantity = 1
        } = req.body;

        if (!productId) {
            return res.status(400).json({
                message: "Product ID is required"
            });
        }

        // Find product in MongoDB
        const product = await Product.findOne({
            productId: Number(productId)
        });

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        // Find user's cart
        let cart = await Cart.findOne({
            user: req.userId
        });

        if (!cart) {
            cart = new Cart({
                user: req.userId,
                items: []
            });
        }

        // Check if same product + same size already exists
        const existingItem = cart.items.find(
            item =>
                item.productId === product.productId &&
                item.size === size
        );

        if (existingItem) {
            existingItem.quantity += Number(quantity);
        } else {
            cart.items.push({
                product: product._id,
                productId: product.productId,
                name: product.name,
                price: product.price,
                image: product.image,
                color: product.color,
                size: size,
                quantity: Number(quantity)
            });
        }

        await cart.save();

        res.status(200).json({
            message: "Product added to cart",
            cart
        });

    } catch (error) {
        console.error("Add to cart error:", error);

        res.status(500).json({
            message: "Failed to add product to cart",
            error: error.message
        });
    }
});


// ==========================================
// UPDATE CART ITEM QUANTITY
// ==========================================

router.put("/:itemId", authMiddleware, async (req, res) => {
    try {
        const { quantity } = req.body;

        if (quantity < 1) {
            return res.status(400).json({
                message: "Quantity must be at least 1"
            });
        }

        const cart = await Cart.findOne({
            user: req.userId
        });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        const item = cart.items.id(req.params.itemId);

        if (!item) {
            return res.status(404).json({
                message: "Cart item not found"
            });
        }

        item.quantity = Number(quantity);

        await cart.save();

        res.status(200).json({
            message: "Cart updated",
            cart
        });

    } catch (error) {
        console.error("Update cart error:", error);

        res.status(500).json({
            message: "Failed to update cart"
        });
    }
});


// ==========================================
// REMOVE ITEM FROM CART
// ==========================================

router.delete("/:itemId", authMiddleware, async (req, res) => {
    try {
        const cart = await Cart.findOne({
            user: req.userId
        });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        const item = cart.items.id(req.params.itemId);

        if (!item) {
            return res.status(404).json({
                message: "Cart item not found"
            });
        }

        item.deleteOne();

        await cart.save();

        res.status(200).json({
            message: "Item removed from cart",
            cart
        });

    } catch (error) {
        console.error("Remove cart item error:", error);

        res.status(500).json({
            message: "Failed to remove cart item"
        });
    }
});


// ==========================================
// CLEAR CART
// ==========================================

router.delete("/", authMiddleware, async (req, res) => {
    try {
        const cart = await Cart.findOne({
            user: req.userId
        });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        cart.items = [];

        await cart.save();

        res.status(200).json({
            message: "Cart cleared",
            cart
        });

    } catch (error) {
        console.error("Clear cart error:", error);

        res.status(500).json({
            message: "Failed to clear cart"
        });
    }
    
});


module.exports = router;