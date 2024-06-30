const mongoose = require("mongoose");

const Work = require("../modems/work.js");

const createWork = async (workData) => {
    try {
        const newWork = await new Work({ position, company, startYear, startMonth, endYear, endMonth, });
        await newWork.save();
        return newWork;
    } catch (error) {
        console.error(error);
    }
}


const getWorks = async () => {
    try {
        const allWorks = await Work.find();
        return allWorks;
    } catch (error) {
        console.error(error);
    }
}

const deleteWork = async (id) => {
    try {
        const findWork = await Work.findOne({ _id: id });
        const result = await Work.delete(findWork);

        return result;

    } catch (error) {
console.log(error);
    }
}


module.exports = {
    createWork, getWorks, deleteWork
};