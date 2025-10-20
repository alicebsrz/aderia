import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';

// Nossos modelos e dados
import Product from '../models/productModel.js';
// ATENÇÃO: Precisamos ajustar o caminho para pegar o arquivo do frontend
import { products } from '../../frontend/src/data/products.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // 1. Limpa o banco de dados de produtos antigos
    await Product.deleteMany();

    // 2. Insere os novos produtos
    await Product.insertMany(products);

    console.log('Data Imported! ✅');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();

    console.log('Data Destroyed! ❌');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Lógica para decidir qual função rodar
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}