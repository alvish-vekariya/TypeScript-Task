import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path : '../config/.env'});
const url  = process.env.MONGO_URL as string;


interface userSchema{
    username : string,
    password: string
}

const schema = new mongoose.Schema({
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

export default UserModel;