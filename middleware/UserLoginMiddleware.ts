import express, { Router } from 'express';
const router: Router = express.Router();
import UserLoginController from '../controllers/UserLoginController';

router.post('/',UserLoginController.loginUser);

export default router;