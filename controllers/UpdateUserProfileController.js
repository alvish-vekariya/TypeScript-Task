const errorHandler = require("../handlers/errorHandler");
const ProfilesModel = require("../models/ProfilesModel");
const UserModel = require("../models/UserModel");
const mongoose = require('mongoose');

const updateProfiles = async (req, res, next)=>{
    const {userID, profileName, updateProfile} = req.body;
    if(!userID || !profileName || !updateProfile) return res.send("userID, profileName and updateProfile are require!");
    try{
        const checkProfileAvailble = await ProfilesModel.findOne({"userID":userID, "profileName":updateProfile});
        if(checkProfileAvailble){
            return res.send('profile is already exists, try with different name');
        }
        if(await ProfilesModel.findOneAndUpdate({"userID":userID, "profileName": profileName},{$set :{"profileName" : updateProfile}})){
            return res.send(`${profileName} is updated to ${updateProfile}`);
        }else{
            return next(new errorHandler('updating error', 500));
        }
    }catch(err){
        return next(new errorHandler('server error',500))
    }
}

module.exports = {
    updateProfiles
};