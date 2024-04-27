import express from 'express';
const router = express.Router();
import updatecartmiddle from '../middleware/UpdateCartMiddleware';
router.use('/', updatecartmiddle);

export default router;