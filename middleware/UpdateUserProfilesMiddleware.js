const express = require('express');
const router = express.Router();
const UpdateUserProfileController = require('../controllers/UpdateUserProfileController');
const loginmiddleware =  require('./CheckLogin');

router.put('/', loginmiddleware.checklogin, UpdateUserProfileController.updateProfiles);

module.exports = router;