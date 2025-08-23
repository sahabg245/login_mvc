import express from 'express';
import { signin, signup, userShow } from '../controllers/userLogin.js';
import { authMiddleware } from '../middleware/auth.js';


const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/show', authMiddleware, userShow);

export default router;
