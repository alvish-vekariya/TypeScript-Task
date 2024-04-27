const express = require('express');
const router = express.Router();
const UserLogoutController = require('../controllers/UserLogoutConstroller');

router.post('/', UserLogoutController.logoutUser);

module.exports = router;