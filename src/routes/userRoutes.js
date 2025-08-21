import express from 'express';
import { signin, signup, userShow } from '../controllers/userLogin.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/show', userShow);

export default router;
