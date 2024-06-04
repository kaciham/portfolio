const express = require('express');
const router = express.Router();
const projectController = require("../controllers/projet.controller");
const userController = require("../controllers/user.controller");
const skillController = require("../controllers/skill.controller");

//project
router.get('/projects', projectController.getProjects);
router.post('/project', projectController.createProject);

//user
router.post('/signup', userController.createUser);
router.get('/users', userController.getUsers);

//skill
router.post('/skill', skillController.createSkill);
router.get('/skills', skillController.getSkills);
router.get('/skill/:id', skillController.getSkill);
router.put('/skill/:id', skillController.updateSkill);
router.delete("/skill/:id", skillController.deleteSkill);

module.exports = router;    