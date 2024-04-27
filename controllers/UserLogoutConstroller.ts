import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel';


const logoutUser = async (req:Request, res:Response)=>{
    const {username} = req.body;
    try{
        const checkLogin = await UserModel.findOne({"username":username, "token":{$exists : true}});
        if(checkLogin == null){
            res.send('User is already logout!!');
        } else{
            await UserModel.updateOne({"username":username},{$unset : {token : 1}});
            res.send(`${username} is logout`);
        }
    }catch(err:any){
        res.send(err);
    }
}

export = {logoutUser};
