import express, { NextFunction, Request, Response } from 'express';
import ProfilesModel from '../models/ProfilesModel';
import errorHandler from '../handlers/errorHandler';
import mongoose from 'mongoose';
import UserModel from '../models/UserModel';

const getProfiles = async (req: Request, res: Response, next:NextFunction)=>{
    const {userID} = req.body as {userID: string};
    try{
        const allProfiles = await ProfilesModel.find({"userID":userID},{"_id":0,"profileName":1});
        var profiles: string[] = [];
        allProfiles.forEach(element => {
            profiles.push(element.profileName);
        });
        res.send(profiles);     
    }catch(err){
        return next(new errorHandler("server error",501));
    }
}

export default {
    getProfiles
}