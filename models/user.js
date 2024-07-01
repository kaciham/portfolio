const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require('crypto');

function generateToken() {
    return crypto.randomBytes(20).toString('hex');
}


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
            type: String,
            required: false,
            defaut: null,
        },
        confirmationToken: {
            type: String,
            required: false,
        },
        validateUser: {
            type: Boolean,
            default: false,
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            required: true,
        },
        title: {
            type: String,
            required: false,
        },
        resumeLink: {
            type: String,
            required: false,
        },
        phone: {
            type: Number,
            required: false,
        },
        password: {
            type: String,
            required: true,
        },
        linkedInUrl: {
            type: String,
            required: false,
        },
        githubUrl: {
            type: String,
            required: false,
        },
        visioScheduleLink: {
            type: String,
            required: false,
        },
        // skill: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Skill"
        // }],
        // education: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Education"
        // }],
        // work: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Work"
        // }],
        // service: [{
        //     type: mongoose.Schema.Types.serviceTitle,
        //     ref: "Service"
        // }]
    },
    {
        timestamps: true
    }
)

userSchema.pre('save', async function (next) {
    try {
        if (this.isNew) {
            this.confirmationToken = generateToken();
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.password, salt)
            this.password = hashedPassword
        }
        next()
    } catch (error) {
        next(error)
    }
})

userSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw error
    }
}

const User = mongoose.model("User", userSchema);

module.exports = User;