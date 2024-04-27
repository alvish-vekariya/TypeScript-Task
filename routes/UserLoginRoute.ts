import express from 'express';
const router = express.Router();
import userLoginMiddle from '../middleware/UserLoginMiddleware'

router.use('/',userLoginMiddle);


export default router;