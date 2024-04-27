import express from 'express';
const router = express.Router();
import profileUpdateMiddle from '../middleware/UpdateUserProfilesMiddleware';

router.use('/',profileUpdateMiddle);

export default router;