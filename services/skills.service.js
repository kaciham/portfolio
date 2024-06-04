const mongoose = require("mongoose");

const Skill = require("../models/skill.js");

//CREATE

const createSkill = async (skillData) => {
    try {
        const { skillName, category } = skillData;
        const newSkill = new Skill({ skillName, category });

        await newSkill.save();

        return newSkill;
    } catch (error) {
        console.error(error);
    }
}

// READ
const getSkills = async () => {
    try {
        const result = await Skill.find();
        if (!result || result == null) {
            throw new Error("Skills not found");
        }
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const getSkill = async (id) => {
    try {
        const result = await Skill.findById(id);
        if (!result) {
            throw new Error("Skill not found");
        }
        return result;
    } catch (error) {
        throw error;
    }
}

//UPDATE

const updateSkill = async (id, skillDataUpdated) => {
    try {
        const { skillName, category } = skillDataUpdated;
        const updatedSkill = await Skill.findByIdAndUpdate(id, { skillName, category });
        const newItemSkill = await Skill.findById(id);
        return newItemSkill;
    } catch (error) {
        console.error(error);
    }
}

//DELETE

const deleteSkill = async (id) => {
    try {
        const result = await Skill.findById(id)
        return result.deleteOne();
    } catch (error) {

    }
}

module.exports = {
    getSkills,
    createSkill,
    getSkill,
    updateSkill,
    deleteSkill
}