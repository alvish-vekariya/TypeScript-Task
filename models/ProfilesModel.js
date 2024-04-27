const mongoose = require("mongoose");
require('dotenv').config({ path : '../config/.env'})
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL).then(()=> console.log('database connected')).catch(err=> console.error(err));

const ProfileSchema = mongoose.Schema({
    profileName : {
        type : String,
        required : [true, "profilename is required"]
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        require : [true, "profile's User is required"]
    }
})


const ProfilesModel = mongoose.model("profiles", ProfileSchema);

module.exports = ProfilesModel;