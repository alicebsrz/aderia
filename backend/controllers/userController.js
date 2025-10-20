import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

// Função para gerar o Token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // O token expira em 30 dias
  });
};

// @desc    Register a new user
// @route   POST /api/users/register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  const user = await User.create({
    name,
    email,
    password, // A senha será criptografada pelo 'pre-save' hook no model
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

// --- ADICIONE A FUNÇÃO DE LOGIN ABAIXO ---

// @desc    Auth user & get token
// @route   POST /api/users/login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // 1. Encontrar o usuário pelo email
  const user = await User.findOne({ email });

  // 2. Verificar se o usuário existe E se a senha corresponde
  if (user && (await user.matchPassword(password))) {
    // Se tudo estiver correto, envia os dados do usuário e o token
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    // 3. Se algo estiver errado, envia uma mensagem de erro genérica e segura
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

// Atualize a linha de exportação para incluir a nova função
export { registerUser, loginUser };