const userService = require("../services/user.service");

const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        console.log(newUser);
        res.status(200).json(newUser);
    } catch (error) {
        console.error(error);
    }
}

const getUsers = async (req, res) => {
    try {
        const Users = await userService.getUsers();
        res.status(200).json(Users);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    createUser,
    getUsers
};