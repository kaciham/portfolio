const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: Image,
            required: false,
            defaut: null,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        phone: {
            type: Number,
            required: false,
        },
        password: {
            type: String,
            required: true,
        },
        linkedUserAccount: {
            type: String,
            required: false,
        },
        githubUserAccount: {
            type: String,
            required: false,
        },
        skill: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Skill"
        },
        education: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Education"
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;