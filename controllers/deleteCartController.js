const errorHandler = require("../handlers/errorHandler");
const cartModel = require("../models/CartModel");
const ProfilesModel = require("../models/ProfilesModel");

const deleteCart  = async (req, res, next)=>{
    const {userID, profileID, cartID} = req.body;
    if(!userID || !profileID || !cartID) return res.send("userID, profileID, cartID are required!!");
    try{
        const ProfileAvailable = await ProfilesModel.find({"_id":profileID, "userID":userID});
        if(ProfileAvailable){
            await cartModel.deleteOne({"_id":cartID});
            return res.send("Cart Delete Successfully!");
        }else{
            return res.send("Profile Doesn't Exists!!");
        }
    }catch(err){
        return next(new errorHandler(err.message,500));
    }
}

module.exports = {
    deleteCart
}