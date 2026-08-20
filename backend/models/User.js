const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        },

        preferredSize: {
            type: String,
            default: "UK 8"
        },

        tier: {
            type: String,
            default: "VIP Member"
        },

        points: {
            type: Number,
            default: 500
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);