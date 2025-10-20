import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

const bp = {
  md: '992px', // Breakpoint para o layout de duas colunas
};

export const CartPageWrapper = styled.div`
  padding: 40px 80px;
  @media (max-width: ${bp.md}) {
    padding: 20px 24px;
  }
`;

export const Title = styled.h1`
  font-family: ${fonts.heading};
  font-size: 3rem;
  text-align: center;
  margin-bottom: 40px;
`;

export const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; // Coluna de itens maior que a de resumo
  gap: 40px;

  @media (max-width: ${bp.md}) {
    grid-template-columns: 1fr; // Uma coluna no mobile
  }
`;

export const ItemsContainer = styled.div``;

export const CartItem = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ItemDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h3`
  font-family: ${fonts.body};
  font-weight: 700;
  font-size: 1.1rem;
`;

export const ProductPrice = styled.p`
  font-family: ${fonts.body};
  color: #555;
  margin: 5px 0;
`;

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: auto; // Empurra para a base
`;

export const QtySelector = styled.select`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const ProductVariant = styled.p`
  font-family: ${fonts.body};
  color: #777;
  font-size: 0.9rem;
  margin: 0;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: fit-content;

  @media (max-width: 576px) {
    margin: 10px auto; // Centraliza no mobile
  }
`;

export const QuantityButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px 12px;
  font-size: 1.2rem;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const QuantityInput = styled.input`
  width: 40px;
  text-align: center;
  border: none;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  -moz-appearance: textfield; /* Remove setas em Firefox */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  font-family: ${fonts.body};
  font-size: 1rem;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #da627d;
  cursor: pointer;
  font-size: 1.2rem;
`;

export const OrderSummary = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 20px;
  height: fit-content; // Faz com que a altura se ajuste ao conteúdo
`;

export const SummaryTitle = styled.h2`
  font-family: ${fonts.heading};
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-family: ${fonts.body};
`;

export const TotalRow = styled(SummaryRow)`
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: none;
  background-color: #da627d;
  color: #fff;
  font-family: ${fonts.body};
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 20px;
`;

export const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 50px;
  font-family: ${fonts.body};
  font-size: 1.2rem;
`;