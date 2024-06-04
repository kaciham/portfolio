const mongoose = require("mongoose");
const Project = require("../models/project.js");

//CREATE

const createProjet = async (projectData) => {
    try {
        const { title, description, link, mainImage, images } = projectData;
        const newProject = new Project({ title, description, link, mainImage, images });
        await newProject.save();

        return newProject;
    } catch (error) {
        console.error(error);
    }
}

//READ

const getProjects = async () => {
    try {
        const result = await Project.find();
        return result;
    } catch (error) {
        console.error(error);
    }
}

//UPDATE

//DELETE

module.exports = {
    createProjet,
    getProjects
};