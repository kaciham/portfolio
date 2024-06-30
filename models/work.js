const mongoose = require("mongoose");

const workSchema = mongoose.Schema(
    {
        position: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        starMonth: {
            type: String,
            required: true
        },
        startYear: {
            type: Number,
            required: true
        },
        endMonth: {
            type: String,
            required: true
        },
        endYear: {
            type: Number,
            required: true
        }
    }
    ,
    {
        timestamps: true
    }
)

const Work = mongoose.model("Work", workSchema);

module.exports = Work;

