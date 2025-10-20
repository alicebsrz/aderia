import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// NOVO: Schema para os itens dentro do carrinho
const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  variant: { type: String }, // NOVO: Campo para armazenar a variação (ex: "Glow", "Matte")
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Garante que cada email seja único no banco de dados
  },
  password: {
    type: String,
    required: true,
  },
  cart: [cartItemSchema], // Adiciona o campo do carrinho
  // Futuramente, podemos adicionar um campo isAdmin: { type: Boolean, required: true, default: false }
}, {
  timestamps: true,
});

// Antes de salvar um novo usuário, vamos criptografar a senha
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// ADICIONE ESTE MÉTODO
// Ele irá comparar a senha que o usuário digitou com a senha criptografada no banco de dados
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;