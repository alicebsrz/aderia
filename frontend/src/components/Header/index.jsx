// src/components/Header/index.jsx
import React, { useState, useContext } from 'react'; // 1. Importar useContext
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthContext.jsx'; // 2. Importar o AuthContext
import CartContext from '../../context/CartContext';
import { 
  HeaderContainer, 
  LogoImage,
  NavMenu, 
  IconGroup, 
  SearchInputContainer,
  AuthIcon,
  CartIconContainer,
  HamburgerIcon,  // Importar
  MobileMenu      // Importar
} from './styles';

import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/logo.png';

const Header = () => {
  // 2. Criar o estado para controlar o menu mobile
  const [menuOpen, setMenuOpen] = useState(false);
  const [keyword, setKeyword] = useState(''); // 1. Estado para a palavra-chave
  const { userInfo, logout } = useContext(AuthContext); // 3. Pegar userInfo e logout
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const logoutHandler = () => {
    logout();
    navigate('/login');
  };

  // 2. Função para lidar com o clique no "About"
  const handleAboutClick = () => {
    // Fecha o menu mobile se estiver aberto
    setMenuOpen(false);

    // Se já estamos na página inicial, apenas rola
    if (location.pathname === '/') {
      document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Se não, navega para a página inicial com um "hash"
      navigate('/#about-us');
    }
  };

  // 2. Função para lidar com o submit da pesquisa
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${encodeURIComponent(keyword.trim())}`);
      setKeyword(''); // Limpa o campo após a busca
    } else {
      navigate('/products'); // Se a busca for vazia, vai para o catálogo
    }
  };
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImage src={logo} alt="Aderia Logo" />
      </Link>

      {/* --- Menu para Desktop --- */}
      <NavMenu>
        {/* 3. Atualizar os links */}
  <Link to="/products">Products</Link>
  <button onClick={handleAboutClick} className="nav-button">About</button>
  <Link to="/contact">Contact</Link>
      </NavMenu>

      <IconGroup>
        <form onSubmit={submitHandler}>
          <SearchInputContainer>
            <input 
              type="text" 
              placeholder="Search" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <FiSearch onClick={submitHandler} style={{ cursor: 'pointer' }} />
          </SearchInputContainer>
        </form>
        
        <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}>
          <CartIconContainer>
            <FiShoppingCart />
            <span>{cartItems ? cartItems.reduce((acc, item) => acc + (item.qty || 0), 0) : 0}</span>
          </CartIconContainer>
        </Link>
        
        {/* 4. LÓGICA CONDICIONAL */}
        {userInfo ? (
          // Se o usuário estiver logado, mostra o nome e a opção de logout
          <AuthIcon onClick={logoutHandler} style={{ cursor: 'pointer' }}>
            <FiUser />
            <span>Logout ({userInfo.name.split(' ')[0]})</span>
          </AuthIcon>
        ) : (
          // Se não, mostra o link de login
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <AuthIcon>
              <FiUser />
              <span>Login</span>
            </AuthIcon>
          </Link>
        )}
      </IconGroup>

      {/* --- Ícone do Menu Mobile --- */}
      <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)}>
        {/* Muda o ícone se o menu estiver aberto ou fechado */}
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </HamburgerIcon>

      {/* --- Painel do Menu Mobile --- */}
  <MobileMenu $isOpen={menuOpen}>
  <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
  <button onClick={handleAboutClick} className="nav-button">About</button>
  <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;