const userService = require("../services/user.service");

const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        console.log(newUser);
        res.status(201).json({
            message: 'User created successfully',
            user: newUser,
        });
    } catch (error) {
        console.error(error);
    }
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
    getUsers,
    getUser,
    updateUser,
    deleteUser
};

