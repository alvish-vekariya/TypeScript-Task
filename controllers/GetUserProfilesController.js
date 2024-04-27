const express = require('express');
const ProfilesModel = require('../models/ProfilesModel');
const errorHandler = require('../handlers/errorHandler');
const mongoose = require('mongoose');
const UserModel = require('../models/UserModel');

const getProfiles = async (req, res, next)=>{
    const {userID} = req.body;
    try{
        const allProfiles = await ProfilesModel.find({"userID":userID},{"_id":0,"profileName":1});
        var profiles = [];
        allProfiles.forEach(element => {
            profiles.push(element.profileName);
        });
        res.send(profiles);     
    }catch(err){
        return next(new errorHandler("server error",501));
    }
}

module.exports = {
    getProfiles
}