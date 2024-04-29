import errorHandler from '../handlers/errorHandler';
import userModel  from '../models/UserModel';
import dotenv from 'dotenv';
dotenv.config({path : '../config/.env'});
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { Request,Response, NextFunction } from 'express';

const loginUser = async (req:Request, res:Response, next:NextFunction)=>{
    const {username, password} = req.body;
    if(!username || !password) return res.status(499).send('username and password are required!');
    try{
        interface interfaceUser{
            _id : string,
            username : string,
            password: string
        }
        const foundUser = await userModel.findOne<interfaceUser>({"username" : username});
        if(foundUser){
            const validateUser = await bcrypt.compare(password,foundUser.password);
            // console.log(validateUser)
            if(validateUser){
                const data = {
                    _id : foundUser._id,
                    username : username
                }
                const token = jwt.sign(data,process.env.SECRETE_KEY as string);
                await userModel.updateOne({"username":foundUser.username},{$set:{"token":token}})
                res.send(`${foundUser.username} is logged in`);
            }else{
                res.status(401).send('incorrect password');
            }
        }else{
            res.status(404).json({"404": "user not found"});
        }
    }catch(err){
        return next(new errorHandler("user not found", 404));
    }

}

export = {
    loginUser
}