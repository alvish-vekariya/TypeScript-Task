const express = require('express');
const UserModel = require('../models/UserModel');
const mongoose = require("mongoose");

const checklogin = async(req, res,next)=>{
    const userID = req.body.userID;
    const checkuserid = mongoose.isValidObjectId(userID);
    if(!checkuserid){
        return res.send("enter valid userid");
    }
    const checkLogin = await UserModel.findOne({"_id":userID, "token":{$exists : true}});
    // console.log(checkLogin);
    if(checkLogin == null){
        return res.send('login is required!!');            
    }
    next();
}

module.exports = {
    checklogin
};