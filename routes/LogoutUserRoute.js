const express = require('express');
const router = express.Router();

router.use('/',require('../middleware/UserLogoutMiddleware'))

module.exports = router;