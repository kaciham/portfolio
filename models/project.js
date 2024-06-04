const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false,
        unique: true,
    },
    mainImage: {
        type: String,
        required: false,
    },
    images: [
        {
            type: String,
            required: false,
        }
    ],
},
    {
        timestamps: true
    }
)

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;