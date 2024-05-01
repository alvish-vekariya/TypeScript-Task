import mongoose, { ObjectId } from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path : '../config/.env'})
const mongoURL = process.env.MONGO_URL as string;


interface schemaProfile {
    profileName: string,
    userID: ObjectId
}

const ProfileSchema = new mongoose.Schema<schemaProfile>({
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

export = ProfilesModel;