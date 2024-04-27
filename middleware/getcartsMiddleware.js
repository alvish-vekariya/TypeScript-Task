const express = require('express');
const router = express.Router();

router.post("/", require('./CheckLogin').checklogin, require('../controllers/getCartsController').getcarts);

module.exports = router;