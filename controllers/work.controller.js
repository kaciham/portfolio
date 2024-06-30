const workService = require("../services/work.service");

const createWork = async (req, res) => {
    try {
        const newWork = await workService.createWork(req.body);
        console.log(newWork);
        res.status(201).json({
            message: 'Work created successfully with existing Work',
            work: newWork,
        });
    } catch (error) {
        console.error(error);
    }
}

const getWorks = async (req, res) => {
    try {
        const Users = await workService.getworks(); 
        res.status(200).json(Users);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    createWork,
    getWorks
};