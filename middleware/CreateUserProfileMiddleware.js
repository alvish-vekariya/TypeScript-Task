const express = require('express');
const router = express.Router();
const CreateUserProfileController = require('../controllers/CreateUserProfileController');
const checklogin = require('./CheckLogin');

router.post('/',checklogin.checklogin, CreateUserProfileController.createUserProfile);

module.exports = router;