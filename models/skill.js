const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const skillSchema = mongoose.Schema({
    Id: {
        type: Number,
    },
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

skillSchema.plugin(AutoIncrement, { inc_field: 'Id' });

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;