const cartModel = require("../models/CartModel");
const mongoose = require('mongoose');

const getOutput = async (req, res)=>{
    const {userID, profileID} = req.body;

    try{
        const data = await cartModel.aggregate([
            {
                $match : {"profileID" : new mongoose.Types.ObjectId(profileID)}
            },
            {
                $lookup : {
                    from : "profiles",
                    localField : "profileID",
                    foreignField : "_id",
                    as : "cart"
                }
            }
        ])

        res.send(data[0].cart[0]);
    }catch(err){
        console.log(err);
    }
}

module.exports = {getOutput}