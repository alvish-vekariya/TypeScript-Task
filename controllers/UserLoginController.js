const errorHandler = require('../handlers/errorHandler');
const userModel =  require('../models/UserModel');
require('dotenv').config({path : '../config/.env'});
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const loginUser = async (req, res, next)=>{
    const {username, password} = req.body;
    if(!username || !password) return res.status(499).send('username and password are required!');
    try{
        const foundUser = await userModel.findOne({"username" : username});
        if(foundUser){
            const validateUser = await bcrypt.compare(password,foundUser.password);
            // console.log(validateUser)
            if(validateUser){
                const data = {
                    _id : foundUser._id,
                    username : username
                }
                const token = jwt.sign(data,process.env.SECRETE_KEY);
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

module.exports = {
    loginUser
}