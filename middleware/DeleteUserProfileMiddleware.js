const express = require('express');
const router = express.Router();
const DeleteUserProfile = require('../controllers/DeleteUserProfileController');
const loginCheck = require('./CheckLogin');

router.delete('/',loginCheck.checklogin, DeleteUserProfile.DeleteProfile);

module.exports = router;