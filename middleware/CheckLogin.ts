import express from 'express';
import UserModel from '../models/UserModel';
import mongoose from "mongoose";

const checklogin = async(req:express.Request, res: express.Response,next: express.NextFunction)=>{
    const userID: string = req.body.userID;
    const checkuserid: boolean = mongoose.isValidObjectId(userID);
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

export = {
    checklogin
};