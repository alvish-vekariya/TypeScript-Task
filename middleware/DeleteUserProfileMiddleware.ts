import express from 'express';
const router = express.Router();
import DeleteUserProfile from '../controllers/DeleteUserProfileController';
import loginCheck from './CheckLogin';

router.delete('/',loginCheck.checklogin, DeleteUserProfile.DeleteProfile);

export default router;