// frontend/src/components/ProductCard/index.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importar o Link
import { 
  CardContainer, 
  ImageWrapper, 
  ProductImage, 
  ContentWrapper, 
  TextInfo,
  CardTitle,
  CardDescription,
  CartButton
} from './styles';

import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ image, title, description }) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <ProductImage src={image} alt={title} />
      </ImageWrapper>
      <ContentWrapper>
        <TextInfo>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextInfo>
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <CartButton>
            <FiShoppingCart />
          </CartButton>
        </Link>
      </ContentWrapper>
    </CardContainer>
  );
};

export default ProductCard;