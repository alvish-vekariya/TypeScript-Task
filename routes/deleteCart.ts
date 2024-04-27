import express from 'express';
const router = express.Router();
import deletecartmiddle from '../middleware/deleteCartMiddleware';

router.use('/', deletecartmiddle);

export default router;