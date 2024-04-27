const express = require('express');
const router = express.Router();

router.use('/',require('../middleware/UpadateProductMiddleware'))

module.exports = router;