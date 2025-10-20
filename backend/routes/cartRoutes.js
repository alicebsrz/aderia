import express from 'express';
const router = express.Router();
import { addItemToCart, getCart, removeItemFromCart } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

// Todas estas rotas são protegidas e requerem login
router.route('/').post(protect, addItemToCart).get(protect, getCart);
router.route('/:productId').delete(protect, removeItemFromCart);

export default router;