const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel')


const logoutUser = async (req, res)=>{
    const {username} = req.body;
    try{
        const checkLogin = await UserModel.findOne({"username":username, "token":{$exists : true}});
        if(checkLogin == null){
            res.send('User is already logout!!');
        } else{
            await UserModel.updateOne({"username":username},{$unset : {token : 1}});
            res.send(`${username} is logout`);
        }
    }catch(err){
        res.send(err);
    }
}

module.exports = {logoutUser};
