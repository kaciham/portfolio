const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
    priorityOrder: {
        type: Number,
        required: false,
    },
    serviceTitle: {
        type: String,
        required: true,
    },
    serviceDescription: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    }
)

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;