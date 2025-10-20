import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importar o Link
import { 
  CardWrapper, 
  ImageContainer, 
  InfoContainer,
  ProductName,
  PriceRow, // Importar
  ProductPrice,
  CartButton // Importar
} from './styles';

// MUDANÇA: Trocamos FaStar por FiShoppingCart
import { FiShoppingCart } from 'react-icons/fi';

const CatalogProductCard = ({ product }) => {
  return (
    // 2. Envolver tudo com um Link que leva para a página do produto
    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
      <CardWrapper>
        <ImageContainer>
          <img src={product.image} alt={product.name} />
        </ImageContainer>
        <InfoContainer>
          <ProductName>{product.name}</ProductName>
          
          {/* MUDANÇA: Nova estrutura para preço e botão */}
          <PriceRow>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            <CartButton>
              <FiShoppingCart />
            </CartButton>
          </PriceRow>
        </InfoContainer>
      </CardWrapper>
    </Link>
  );
};

export default CatalogProductCard;