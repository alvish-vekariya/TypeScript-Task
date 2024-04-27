import express from 'express';
const router = express.Router();
import UserRegisterMiddleware from '../middleware/UserRegisterMiddleware';

router.post('/',UserRegisterMiddleware);

export default router;