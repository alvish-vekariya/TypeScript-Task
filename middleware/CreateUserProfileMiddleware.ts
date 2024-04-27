import express from 'express';
const router = express.Router();
import CreateUserProfileController from '../controllers/CreateUserProfileController';
import checklogin from './CheckLogin';

router.post('/',checklogin.checklogin, CreateUserProfileController.createUserProfile);

export = router;