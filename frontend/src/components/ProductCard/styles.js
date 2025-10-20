import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

const bp = {
  md: '768px',
};

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  @media (max-width: ${bp.md}) {
    /* MUDANÇA: Definindo o tamanho do card no carrossel */
    flex-shrink: 0; /* Impede que o card encolha */
    width: 80%; /* Ocupa 80% da largura da tela */
    scroll-snap-align: start; /* Alinha o card no início da tela (para o efeito "imã") */
  }
`;

export const ImageWrapper = styled.div`
  background-color: #FFD1EF;
  padding: 20px;
  border-radius: 50px 50px 0 0;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ContentWrapper = styled.div`
  padding: 25px 30px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
`;

export const TextInfo = styled.div``;

export const CardTitle = styled.h3`
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 5px;
`;

export const CardDescription = styled.p`
  font-family: ${fonts.body};
  color: #777;
  font-size: 0.9rem;
`;

export const CartButton = styled.button`
  background-color: transparent;
  border: 1.5px solid #ccc;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  svg {
    font-size: 1.5rem;
    color: #555;
  }
  &:hover {
    background-color: #da627d;
    border-color: #da627d;
    svg {
      color: #fff;
    }
  }
`;