import UserModel from '../models/UserModel';
import ProfilesModel from '../models/ProfilesModel';
import errorHandler from '../handlers/errorHandler';
import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express';

const DeleteProfile = async (req:Request, res:Response,next:NextFunction)=>{
    const {userID, profileName} = req.body as {userID :  string, profileName : string};
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

export = {
    DeleteProfile
}