const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
    serviceTitle: {
        type: String,
        required: true,
    },
    serviceDescription: {
        type: String,
        required: true,
    }
})

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;