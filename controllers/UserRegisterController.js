const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');
const errorHandler = require('../handlers/errorHandler');

const registerUser = async (req,res,next)=>{
    try{
        const {username, password} = req.body;
        if(!username || !password) return res.status(499).send('username and password are required!');
        const checkDuplicate = await UserModel.findOne({"username" : username});
        if(checkDuplicate){
            res.status(409).send('username already exists, try with different username');
        }else{
            const newPWD = await bcrypt.hash(password, 10);
            await UserModel.create({
                username : req.body.username,
                password : newPWD
            })
            res.status(201).json({"201":"user created successfully"});
        }
    }catch(err){
        next(new errorHandler(err, 500).message);
    }
}

module.exports = {
    registerUser
}