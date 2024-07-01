const express = require('express');
const router = express.Router();
const projectController = require("../controllers/projet.controller");
const userController = require("../controllers/user.controller");
const skillController = require("../controllers/skill.controller");
const authController = require("../controllers/auth.controller");
const verifyJWT = require('../midlleware/verifyJWT')

//auth
router.post('/login', authController.login)
router.get('/refresh', authController.refresh)
router.get('/logout', authController.logout)

//project
router.get('/projects', verifyJWT, projectController.getProjects);
router.post('/project', projectController.createProject);

//user
router.post('/signup', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser)
router.get('/confirm/:token', userController.confirmUser);


//skill
router.post('/skill', skillController.createSkill);
router.get('/skills', skillController.getSkills);
router.get('/skill/:id', skillController.getSkill);
router.put('/skill/:id', skillController.updateSkill);
router.delete("/skill/:id", skillController.deleteSkill);

//work

module.exports = router;    