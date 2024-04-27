const express = require('express');
const router = express.Router();

router.use('/',require('../middleware/GetProfilesMiddleware'));

module.exports = router;