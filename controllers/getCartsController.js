const errorHandler = require("../handlers/errorHandler");
const cartModel = require("../models/CartModel");
const ProfilesModel = require("../models/ProfilesModel");

const getcarts = async(req, res, next)=>{
    const {userID, profileID} = req.body;
    if(!profileID) return res.send("profileID is required!");
    try{
        const checkProfile = await ProfilesModel.findOne({"userID":userID, "_id":profileID});
        if(checkProfile){
            const cartItems = await cartModel.find({"profileID":profileID});
            return res.send(cartItems);
        }else{
            return res.send("profile doesn't exists!!");
        }
    }catch(err){
        return next(new errorHandler(err.message, 500));
    }
}

module.exports = {
    getcarts
}