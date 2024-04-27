import express from 'express';
const router = express.Router();

router.use('/',require('../middleware/CreateUserProfileMiddleware'))

export default router;