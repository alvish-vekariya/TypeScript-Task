const express = require('express');
const router = express.Router();

router.use('/', require('../middleware/getcartsMiddleware'));

module.exports = router;