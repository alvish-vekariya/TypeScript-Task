const errorHandler = require('../handlers/errorHandler');
const ProfilesModel = require('../models/ProfilesModel');
const mongoose = require('mongoose');
const UserModel = require('../models/UserModel');

const createUserProfile = async (req,res, next)=>{
    const {userID, profileName} = req.body;
    if(!userID || !profileName) return res.send('userID and profileName are require');

    try{
        const checkProfileAvailble = await ProfilesModel.findOne({"userID":userID, "profileName":profileName});
        if(checkProfileAvailble){
           return res.send('profile is already exists');
        }
        await ProfilesModel.create({
            "userID" : userID,
            "profileName" : profileName
        })
        res.send('user profile created');
        
    }catch(err){
        console.log(err);
        return next(new errorHandler("Validation Error", 409));
    }
    
}

module.exports = {createUserProfile};