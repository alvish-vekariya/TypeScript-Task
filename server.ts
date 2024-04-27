import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config({path : './config/.env'});

const PORT = process.env.PORT;
// console.log(PORT);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',require('./routes'));

app.listen(PORT, ()=> console.log(`Server connected on port ${PORT}`));