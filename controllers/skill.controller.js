const skillService = require("../services/skills.service");


//CREATE
const createSkill = async (req, res) => {
    try {
        const newSkill = await skillService.createSkill(req.body);
        res.status(200).json(newSkill);
    } catch (error) {
        console.log(error);
    }
}

//READ
const getSkills = async (req, res) => {
    try {
        const allSkills = await skillService.getSkills();
        if (!allSkills) {
            const message = "Skill not found";
            return res.status(404).json({ message });
        }
        res.status(200).json(allSkills);
        console.log(allSkills);
    } catch (error) {
        console.error(error);
    }
}   

const getSkill = async (req, res) => {
    try {
        const id = req.params.id;
        const getSkill = await skillService.getSkill(id);
        if (!getSkill) {
            const message = "Skill not found";
            return res.status(404).json({ message });
        }
        res.status(200).json(getSkill);
    } catch (error) {
        console.error(error);
    }
}

//UPDATE

const updateSkill = async (req, res) => {
    try {
        const updatedSkillChange = req.body;
        const id = req.params.id;
        const updatedSkill = await skillService.updateSkill(id, updatedSkillChange);
        res.status(200).json(updatedSkill);
    }
    catch (error) {
        console.error(error);
    }
}

//DELETE

const deleteSkill = async (req, res) => {
    try {
        const deleteSkill = await skillService.deleteSkill(req.params.id);
        res.status(200).json({ message: "skill deleted" })
    } catch (error) {
        console.error(error);
    }
}
module.exports = {
    createSkill,
    getSkills,
    getSkill,
    updateSkill,
    deleteSkill
}
