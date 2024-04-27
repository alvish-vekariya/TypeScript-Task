const express = require('express');
const router = express.Router();
const loginCheck = require('./CheckLogin');

router.post('/',loginCheck.checklogin, require('../controllers/AddToCartController').addCart);

module.exports = router;