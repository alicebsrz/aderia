import express from 'express';
const router = express.Router();
import { getProducts } from '../controllers/productController.js';

// A rota GET para /api/products irá usar a função getProducts
router.route('/').get(getProducts);

export default router;