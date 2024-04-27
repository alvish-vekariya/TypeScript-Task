const mongoose = require('mongoose');
require('dotenv').config({ path : '../config/.env'});
const url = process.env.MONGO_URL;

mongoose.connect(url).then(()=>console.log('user database connected')).catch(err=> console.log(err));

const schema = mongoose.Schema({
    username : {
        type: String,
        unique: [true, 'username must be unique'],
        require: [true, 'username is required']
    },
    password : {
        type : String,
        required : true
    },
    token :{
        type : String
    }
})

const UserModel = mongoose.model("users",schema);

module.exports = UserModel;