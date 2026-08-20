const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();

        const formattedProducts = products.map(product => ({
            id: product.productId,
            name: product.name,
            category: product.category,
            categoryLabel: product.categoryLabel,
            badge: product.badge,
            badgeType: product.badgeType,
            color: product.color,
            bestFor: product.bestFor,
            price: product.price,
            originalPrice: product.originalPrice,
            rating: product.rating,
            reviews: product.reviews,
            image: product.image,
            description: product.description,
            sizes: product.sizes,
            stock: product.stock
        }));

        res.status(200).json(formattedProducts);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch products",
            error: error.message
        });
    }
});

// GET single product
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findOne({
            productId: Number(req.params.id)
        });

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch product",
            error: error.message
        });
    }
});

module.exports = router;