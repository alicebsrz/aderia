import Product from '../models/productModel.js';

// @desc    Fetch products based on a keyword
// @route   GET /api/products
const getProducts = async (req, res) => {
  try {
    const keyword = req.query.keyword 
      ? {
          name: {
            $regex: req.query.keyword, // A "expressão regular" para buscar por parte do nome
            $options: 'i', // 'i' para tornar a busca case-insensitive (não diferencia maiúsculas/minúsculas)
          },
        }
      : {}; // Se não houver keyword, o objeto fica vazio e busca todos os produtos

    const products = await Product.find({ ...keyword });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export { getProducts };