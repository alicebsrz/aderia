import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import cors from 'cors'; // 1. Importar o cors
import userRoutes from './routes/userRoutes.js'; // 1. Importar as rotas de usuário
import cartRoutes from './routes/cartRoutes.js'; // 1.b Importar as rotas do carrinho
import productRoutes from './routes/productRoutes.js'; // 1.c Importar as rotas de produto

dotenv.config();

connectDB(); 

const app = express();

// 2. Configurar o CORS explicitamente usando a URL do frontend
const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// 3. Adicionar o middleware para aceitar dados JSON no corpo da requisição
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// 3. Usar as rotas de usuário
app.use('/api/users', userRoutes);
// 3.b Usar as rotas do carrinho
app.use('/api/cart', cartRoutes);
// 3.c Usar as rotas de produto
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});