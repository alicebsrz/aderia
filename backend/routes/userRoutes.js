import express from 'express';
const router = express.Router();
// 1. Importe a nova função loginUser
import { registerUser, loginUser } from '../controllers/userController.js';

router.post('/register', registerUser);

// 2. Adicione a rota para o login
router.post('/login', loginUser);

export default router;