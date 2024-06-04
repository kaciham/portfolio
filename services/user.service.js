const mongoose = require("mongoose");

const User = require("../models/user.js");

const createUser = async (userData) => {

    try {
        const { firstName, lastName, email } = userData;
        const newUser = new User({ firstName, lastName, email });
        await newUser.save();

        return newUser;
    } catch (error) {
        console.error(error);
    }
}

const getUsers = async () => {
    try {
        const Users = await User.find();
        return Users;

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    createUser, getUsers
};