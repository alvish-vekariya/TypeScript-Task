import express from 'express';
const router = express.Router();
import logoutmiddle from '../middleware/UserLogoutMiddleware';

router.use('/', logoutmiddle)

export default router;