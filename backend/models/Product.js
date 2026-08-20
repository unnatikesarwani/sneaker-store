const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        productId: {
            type: Number,
            required: true,
            unique: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            required: true
        },

        categoryLabel: {
            type: String,
            required: true
        },

        badge: {
            type: String
        },

        badgeType: {
            type: String
        },

        color: {
            type: String,
            required: true
        },

        bestFor: {
            type: String
        },

        price: {
            type: Number,
            required: true
        },

        originalPrice: {
            type: Number,
            required: true
        },

        rating: {
            type: Number,
            default: 0
        },

        reviews: {
            type: Number,
            default: 0
        },

        image: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        sizes: {
            type: [String],
            default: [
                "UK 6.5",
                "UK 7",
                "UK 7.5",
                "UK 8",
                "UK 8.5",
                "UK 9",
                "UK 9.5",
                "UK 10",
                "UK 10.5",
                "UK 11"
            ]
        },

        stock: {
            type: Number,
            default: 10
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Product", productSchema);