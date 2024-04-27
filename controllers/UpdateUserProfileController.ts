import { NextFunction, Request, Response } from "express";
import errorHandler from "../handlers/errorHandler";
import ProfilesModel from "../models/ProfilesModel";
import UserModel from "../models/UserModel";
import mongoose from 'mongoose';

const updateProfiles = async (req:Request, res:Response, next:NextFunction)=>{
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

export = {
    updateProfiles
};