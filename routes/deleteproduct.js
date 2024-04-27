const express = require('express');
const router = express.Router();

router.use('/',require('../middleware/DeleteProductMiddleware'));

module.exports = router;