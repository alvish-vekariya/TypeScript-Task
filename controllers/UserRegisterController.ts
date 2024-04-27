import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel';
import errorHandler from '../handlers/errorHandler';


const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body as {username: string, password: string};
        if (!username || !password) return res.status(499).send('username and password are required!');
        const checkDuplicate = await UserModel.findOne({ "username": username });
        if (checkDuplicate) {
            res.status(409).send('username already exists, try with different username');
        } else {
            const newPWD: string = await bcrypt.hash(password, 10);
            await UserModel.create({
                username: req.body.username,
                password: newPWD
            })
            res.status(201).json({ "201": "user created successfully" });
        }
    } catch (err: any) {
        next(new errorHandler(err, 500).message);
    }
}

export default registerUser