const express = require("express");

const Wishlist = require("../models/Wishlist");
const Product = require("../models/Product");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// ==========================================
// GET USER WISHLIST
// ==========================================

router.get("/", authMiddleware, async (req, res) => {
    try {
        let wishlist = await Wishlist.findOne({
            user: req.userId
        }).populate("products");

        if (!wishlist) {
            wishlist = await Wishlist.create({
                user: req.userId,
                products: []
            });
        }

        res.status(200).json(wishlist);

    } catch (error) {
        console.error("Get wishlist error:", error);

        res.status(500).json({
            message: "Failed to fetch wishlist"
        });
    }
});


// ==========================================
// ADD PRODUCT TO WISHLIST
// ==========================================

router.post("/", authMiddleware, async (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({
                message: "Product ID is required"
            });
        }

        const product = await Product.findOne({
            productId: Number(productId)
        });

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        let wishlist = await Wishlist.findOne({
            user: req.userId
        });

        if (!wishlist) {
            wishlist = new Wishlist({
                user: req.userId,
                products: []
            });
        }

        // Don't add duplicate products
        const alreadyExists = wishlist.products.some(
            id => id.toString() === product._id.toString()
        );

        if (alreadyExists) {
            return res.status(409).json({
                message: "Product already in wishlist"
            });
        }

        wishlist.products.push(product._id);

        await wishlist.save();

        wishlist = await Wishlist.findById(wishlist._id)
            .populate("products");

        res.status(200).json({
            message: "Product added to wishlist",
            wishlist
        });

    } catch (error) {
        console.error("Add wishlist error:", error);

        res.status(500).json({
            message: "Failed to add product to wishlist"
        });
    }
});


// ==========================================
// REMOVE PRODUCT FROM WISHLIST
// ==========================================

router.delete("/:productId", authMiddleware, async (req, res) => {
    try {
        const product = await Product.findOne({
            productId: Number(req.params.productId)
        });

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        const wishlist = await Wishlist.findOne({
            user: req.userId
        });

        if (!wishlist) {
            return res.status(404).json({
                message: "Wishlist not found"
            });
        }

        wishlist.products = wishlist.products.filter(
            id => id.toString() !== product._id.toString()
        );

        await wishlist.save();

        const updatedWishlist = await Wishlist.findById(wishlist._id)
            .populate("products");

        res.status(200).json({
            message: "Product removed from wishlist",
            wishlist: updatedWishlist
        });

    } catch (error) {
        console.error("Remove wishlist error:", error);

        res.status(500).json({
            message: "Failed to remove product from wishlist"
        });
    }
});


module.exports = router;