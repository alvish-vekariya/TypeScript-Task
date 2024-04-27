import express from 'express';
const router = express.Router();
import getcartmiddle from '../middleware/getcartsMiddleware';

router.use('/', getcartmiddle);

export default router;