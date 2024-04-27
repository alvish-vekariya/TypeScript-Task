const express = require('express');
const router = express.Router();

router.use('/',require('../middleware/DeleteUserProfileMiddleware'))

module.exports = router;