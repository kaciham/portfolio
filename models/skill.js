const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
    skillName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    }
)

const Skill = mongoose.model("Skill", skillSchema);
    
module.exports = Skill;