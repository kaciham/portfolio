const mongoose = require("mongoose");

const educationSchema = mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: true
    },
    startYear: {
        type: Number,
        required: true,
    },
    endYear: {
        type: Number,
        required: true,
    }

},
    {
        timestamps: true,
    }
)

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;