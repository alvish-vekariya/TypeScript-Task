const express = require('express');
const router = express.Router();

router.use('/',require('../middleware/CreateUserProfileMiddleware'))

module.exports = router;