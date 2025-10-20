import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

export const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-color: #f9f9f9;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoContainer = styled.div`
  padding: 20px;
  text-align: left; /* MUDANÇA: Alinhando o texto à esquerda */
`;

export const ProductName = styled.h3`
  font-family: ${fonts.body}; /* MUDANÇA: Usando Nunito Sans */
  font-size: 1.25rem;
  font-weight: 700; // Deixando o nome em negrito
  color: #333;
  margin-bottom: 12px;
  min-height: 40px; // Garante que os cards fiquem alinhados mesmo com nomes de 1 ou 2 linhas
`;

// NOVO: Container para alinhar preço e botão
export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPrice = styled.p`
  font-family: ${fonts.body};
  font-size: 1.1rem;
  font-weight: 700;
  color: #da627d;
`;

// NOVO: Botão do carrinho
export const CartButton = styled.button`
  background-color: transparent;
  border: 1.5px solid #ccc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
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