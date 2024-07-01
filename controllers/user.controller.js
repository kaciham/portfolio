const userService = require("../services/user.service");
const User = require('../models/user.js')

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        userService.sendConfirmationEmail(user.email, user.confirmationToken);
        console.log(user);
        res.status(201).json({
            message: 'User created successfully, please confirm your email',
            user: user,
        });
    } catch (error) {
        console.error(error);
    }
}

const confirmUser = async (req, res) => {
    const user = await User.findOne({ confirmationToken: req.params.token });
    if (!user) {
        return res.status(400).json({ error: 'Invalid confirmation token' });
    }
    user.validateUser = true;
    user.confirmationToken = null; // clear the token after it's used
    await user.save();
    res.status(200).json({ message: 'Email confirmed successfully' });
}

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json({ message: 'all users', users: users });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userFound = await userService.getUser(id);
        res.status(200).json({ message: 'User Found', user: userFound });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Error' });
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await userService.updateUser(id, req.body);
        res.status(200).json(updatedUser);

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Error' });
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await userService.deleteUser(id);
        res.status(200).json({ message: 'User deleted !' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Error' });
    }
}
module.exports = {
    createUser,
    confirmUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};

