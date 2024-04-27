const UserModel = require('../models/UserModel');
const ProfilesModel = require('../models/ProfilesModel');
const errorHandler = require('../handlers/errorHandler');
const mongoose = require('mongoose');

const DeleteProfile = async (req, res,next)=>{
    const {userID, profileName} = req.body;
    if(!userID || !profileName) return res.send("userID and password required!!");
    try{
        if(await ProfilesModel.findOneAndDelete({"profileName" : profileName, "userID" : userID})){
            res.send('user profile deleted');
        }else{
            res.send("profile doesn't exists");
        }
    }catch(err){
        return next(new errorHandler('error while deleting',500));
    }
}

module.exports = {
    DeleteProfile
}