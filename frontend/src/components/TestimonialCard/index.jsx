import React from 'react';
import { CardContainer, ImageWrapper, Name, Rating, ReviewText } from './styles';

// Ícone de estrela da Font Awesome
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ name, image, rating, review }) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <img src={image} alt={name} />
      </ImageWrapper>
      <Name>{name}</Name>
      <Rating>
        {/* Cria um array com 'rating' posições e renderiza uma estrela para cada */}
        {Array.from({ length: rating }).map((_, index) => (
          <FaStar key={index} />
        ))}
      </Rating>
      <ReviewText>"{review}"</ReviewText>
    </CardContainer>
  );
};

export default TestimonialCard;