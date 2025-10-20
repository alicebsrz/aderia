import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

const bp = {
  md: '768px',
};

export const PageWrapper = styled.div`
  padding: 40px 80px;
  @media (max-width: ${bp.md}) {
    padding: 20px 24px;
  }
`;

export const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: ${bp.md}) {
    grid-template-columns: 1fr; // Uma coluna no mobile
    gap: 0; // O gap será controlado pelos elementos internos
  }
`;

// ImageGallery consolidated further down

export const MainImage = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

export const InfoSection = styled.div`
  @media (max-width: ${bp.md}) {
    order: 2; // Informações vêm depois
  }
`;

export const ProductName = styled.h1`
  font-family: ${fonts.heading};
  font-size: 2.8rem;
  margin-bottom: 15px;
`;

export const ProductPrice = styled.p`
  font-family: ${fonts.body};
  font-size: 1.8rem;
  font-weight: 700;
  color: #da627d;
  margin-bottom: 25px;
`;

export const AddToCartButton = styled.button`
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
  margin-bottom: 30px;
`;

export const AccordionSection = styled.div`
  border-top: 1px solid #eee;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
  h3 {
    font-family: ${fonts.heading};
    font-size: 1.3rem;
  }
`;

export const AccordionContent = styled.div`
  padding-bottom: 20px;
  font-family: ${fonts.body};
  color: #555;
  line-height: 1.6;
`;

export const ReviewsSection = styled.div`
  margin-top: 50px;
  h2 {
    font-family: ${fonts.heading};
    font-size: 2rem;
    text-align: center;
    margin-bottom: 30px;
  }

  // NOVO: Container para os cards de review
  .reviews-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

// NOVOS ESTILOS: Galeria e opções
export const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: ${bp.md}) {
    order: 1; /* imagem vem primeiro */
    margin-bottom: 20px;
  }
`;

// NOVO: Container para os thumbnails
export const ImageThumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

// NOVO: Estilo para cada thumbnail
export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid ${({ $isActive }) => ($isActive ? '#da627d' : 'transparent')};
  transition: border-color 0.3s ease;
`;

// NOVOS: Opções / swatches
export const OptionsContainer = styled.div`
  margin-bottom: 25px;
`;

export const OptionLabel = styled.p`
  font-family: ${fonts.body};
  font-weight: 700;
  margin-bottom: 10px;
`;

export const OptionSwatches = styled.div`
  display: flex;
  gap: 10px;
`;

export const OptionSwatch = styled.button`
  padding: 8px 15px;
  border-radius: 8px;
  font-family: ${fonts.body};
  cursor: pointer;
  background-color: ${({ $isActive }) => ($isActive ? '#da627d' : '#f5f5f5')};
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#333')};
  border: 1px solid ${({ $isActive }) => ($isActive ? '#da627d' : '#ddd')};
  transition: all 0.3s ease;
`;

export const QuantitySelectorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: fit-content;
`;

export const QuantityButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px 15px;
  font-size: 1.2rem;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const QuantityInput = styled.input`
  width: 50px;
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

export const VariantContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const VariantLabel = styled.span`
  font-family: ${fonts.body};
  font-size: 1rem;
  font-weight: 500;
  margin-right: 10px;
`;

export const VariantButton = styled.button`
  background-color: ${({ $isSelected }) => ($isSelected ? '#da627d' : '#f0f0f0')};
  color: ${({ $isSelected }) => ($isSelected ? '#fff' : '#333')};
  border: 1px solid ${({ $isSelected }) => ($isSelected ? '#da627d' : '#ccc')};
  padding: 8px 15px;
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
  font-family: ${fonts.body};
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;