import Product from '../models/productModel.js';
import User from '../models/userModel.js';

// @desc    Add item to cart
// @route   POST /api/cart
const addItemToCart = async (req, res) => {
  try {
    const { productId, qty, variant } = req.body; // NOVO: Recebe a variação
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find product by our numeric 'id' field
    const product = await Product.findOne({ id: productId });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // NOVA LÓGICA: considera a variação ao procurar um item existente
    const existingItem = user.cart.find(
      item => item.product.toString() === product._id.toString() && item.variant === variant
    );

    if (existingItem) {
      existingItem.qty = qty; // atualiza a quantidade
    } else {
      user.cart.push({
        product: product._id, // store MongoDB _id reference
        name: product.name,
        image: product.image,
        price: product.price,
        qty,
        variant, // SALVA A VARIAÇÃO
      });
    }

    await user.save();
    res.status(201).json(user.cart);
  } catch (error) {
    console.error('ADD ITEM TO CART ERROR:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get user's cart
// @route   GET /api/cart
const getCart = async (req, res) => {
  // Populates the product reference so the frontend gets product fields (including numeric `id`)
  const user = await User.findById(req.user._id).populate('cart.product');
  if (user) {
    res.json(user.cart);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:productId
const removeItemFromCart = async (req, res) => {
  const { productId } = req.params;
  const { variant } = req.query; // opcional: remover apenas uma variação
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find product by numeric id
    const product = await Product.findOne({ id: productId });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (variant) {
      // Remove only the cart item that matches both product and variant
      user.cart = user.cart.filter(
        item => !(item.product.toString() === product._id.toString() && item.variant === variant)
      );
    } else {
      // Remove all items for this product
      user.cart = user.cart.filter(item => item.product.toString() !== product._id.toString());
    }

    await user.save();
    res.json(user.cart);
  } catch (error) {
    console.error('REMOVE ITEM FROM CART ERROR:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export { addItemToCart, getCart, removeItemFromCart };