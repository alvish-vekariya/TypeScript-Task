const express = require('express');
const router = express.Router();

router.delete('/', require('./CheckLogin').checklogin, require('../controllers/deleteCartController').deleteCart)

module.exports = router;