// frontend/src/App.jsx
import { GlobalStyle } from './styles/GlobalStyle';
import Header from './components/Header';
// (Landing and other sections moved to pages)
import CatalogPage from './pages/CatalogPage'; // 1. Importe a nova página de catálogo
import LandingPage from './pages/LandingPage';
import ProductDetailPage from './pages/ProductDetailPage'; // 1. Importar a nova página
import LoginPage from './pages/LoginPage'; // Importar
import RegisterPage from './pages/RegisterPage'; // Importar
import CartPage from './pages/CartPage'; // 1. Importar a nova página
import SearchPage from './pages/SearchPage'; // 1. Importar a página de busca
import ContactPage from './pages/ContactPage'; // 1. Importar página de contato
import Footer from './components/Footer'; // 2. Importar
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
  {/* 2. Definir as rotas */}
      <main>
    <Routes>
      {/* Rota para a página inicial ("/") */}
      <Route path="/" element={<LandingPage />} />
      {/* Rota para a página de produtos ("/products") */}
      <Route path="/products" element={<CatalogPage />} />
      {/* Rota dinâmica para detalhe de produto */}
      <Route path="/products/:productId" element={<ProductDetailPage />} />
      <Route path="/login" element={<LoginPage />} /> {/* Adicionar */}
      <Route path="/register" element={<RegisterPage />} /> {/* Adicionar */}
      <Route path="/cart" element={<CartPage />} /> {/* Adicionar rota do carrinho */}
      <Route path="/search/:keyword" element={<SearchPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </main>

  <Footer />
  {/* O resto da sua landing page virá aqui */}
    </>
  )
}

export default App;