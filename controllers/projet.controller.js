const projectService = require("../services/project.service.js");
const verifyJWT = require("../midlleware/verifyJWT.js")

const createProject = async (req, res) => {
    try {
        const newProject = await projectService.createProjet(req.body);
        res.status(200).json(newProject);
    } catch (error) {
        console.error(error);
    }
}

const getProjects = async (req, res) => {
    try {
        const allProjects = await projectService.getProjects();
        res.status(200).json(allProjects);
    } catch (error) {

    }
};

module.exports = {
    createProject,
    getProjects
}