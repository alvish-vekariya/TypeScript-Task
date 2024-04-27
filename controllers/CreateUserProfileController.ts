import errorHandler from '../handlers/errorHandler';
import ProfilesModel from '../models/ProfilesModel';
import mongoose from 'mongoose';
import UserModel from '../models/UserModel';
import { Request, Response, NextFunction } from 'express';

const createUserProfile = async (req: Request,res: Response, next:NextFunction)=>{
    const {userID, profileName} = req.body as { userID: string , profileName: string};
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

export default {createUserProfile};