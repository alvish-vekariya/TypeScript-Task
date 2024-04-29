import { Request, Response } from "express";

import cartModel from "../models/CartModel";
import mongoose from 'mongoose';

const getOutput = async (req:Request, res:Response)=>{
    const {userID, profileID} = req.body;

    try{
        // const data = await cartModel.aggregate([
        //     {
        //         $match : {"profileID" : new mongoose.Types.ObjectId(profileID)}
        //     },
        //     {
        //         $lookup : {
        //             from : "profiles",
        //             localField : "profileID",
        //             foreignField : "_id",
        //             as : "cart"
        //         }
        //     }
        // ])

        const data = await cartModel.find({profileID : new mongoose.Types.ObjectId(profileID)})
                    .populate('profileID');

        res.send(data);
    }catch(err){
        console.log(err);
    }
}

export default {getOutput}