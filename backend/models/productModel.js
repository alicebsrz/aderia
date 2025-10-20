import mongoose from 'mongoose';

// Vamos definir a estrutura das avaliações primeiro
const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
}, {
  timestamps: true,
});

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, // ADICIONE ESTA LINHA
  // Futuramente, conectaremos o usuário que criou o produto
  // user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  name: { type: String, required: true },
  image: { type: String, required: true },
  images: [String],
  options: [{
    name: String,
    image: String,
  }],
  category: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  rating: { type: Number, required: true, default: 0 },
  reviews: [reviewSchema], // Um produto pode ter várias avaliações
}, {
  timestamps: true, // Cria campos 'createdAt' e 'updatedAt' automaticamente
});

const Product = mongoose.model('Product', productSchema);

export default Product;