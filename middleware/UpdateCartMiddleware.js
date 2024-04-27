const express = require('express');
const router = express.Router();

router.put('/',require('./CheckLogin').checklogin, require('../controllers/UpdateCartController').updateCart);

module.exports = router;