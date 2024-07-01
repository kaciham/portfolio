const mongoose = require("mongoose");
const User = require("../models/user.js");
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'kacihamroun@outlook.com',
        pass: '#KaciKaci59'
    },
    tls: {
        rejectUnauthorized: false
    }
});
function sendConfirmationEmail(email, confirmationToken) {

    const mailOptions = {
        from: 'kacihamroun@outlook.com',
        to: email,
        subject: 'Confirm your email',
        text: `Please confirm your email by clicking the following link: http://localhost:3000/api/confirm/${confirmationToken}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const createUser = async (userData) => {

    try {
        const { firstName, lastName, profilePicture, resumeLink, phone, linkedInUrl, githubUrl, email, password, } = userData;

        // const skills = await Skill.find({ '_id': { $in: skillId } });
        // const works = await Work.find({ '_id': { $in: workId } })
        // const education = await Education.find({ '_id': { $in: workId } })
        // const service = await Service.find({ '_id': { $in: workId } })
        const newUser = await new User({ firstName, lastName, email, password, profilePicture, resumeLink, phone, linkedInUrl, githubUrl });

        await newUser.save();

        return newUser;

    } catch (error) {
        console.error(error);
    }
}

const updateUser = async (userId, userData) => {
    try {
        const { firstName, lastName, profilePicture, resumeLink, phone, linkedInUrl, githubUrl, email, password, visioScheduleLink } = userData;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                firstName,
                lastName,
                email,
                password,
                profilePicture,
                resumeLink,
                phone,
                linkedInUrl,
                githubUrl,
                visioScheduleLink,
            },
            { new: true }
        );

        return updatedUser;
    } catch (error) {
        console.error(error);
    }
};

const getUsers = async () => {
    try {
        const users = await User.find();
        return users;

    } catch (error) {
        console.error(error);
    }
}

const getUser = async (id) => {
    try {
        const user = await User.findById({ _id: id });
        return user;
    } catch (error) {
        console.error(error)
    }
}

const deleteUser = async (id) => {
    try {
        const deleteUser = await User.findByIdAndDelete({ _id: id })
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createUser, getUsers, getUser, deleteUser, updateUser, sendConfirmationEmail
};