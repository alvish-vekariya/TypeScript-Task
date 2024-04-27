import express from 'express';
const router = express.Router();
import deleteProfile from '../middleware/DeleteUserProfileMiddleware'

router.use('/',deleteProfile)

export default router;