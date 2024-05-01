import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config({path : './config/.env'});
import mongoose from 'mongoose';

const PORT = process.env.PORT;
const mongoURL = process.env.MONGO_URL as string;
// console.log(PORT);
mongoose.connect(mongoURL).then(()=> console.log('Database connected!')).catch(err=> console.error(err));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',require('./routes'));

app.listen(PORT, ()=> console.log(`Server connected on port ${PORT}`));