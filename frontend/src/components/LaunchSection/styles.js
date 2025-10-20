import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

const bp = {
  md: '768px',
};

export const SectionContainer = styled.section`
  position: relative;
  padding: 40px 80px 80px;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media (max-width: ${bp.md}) {
    padding: 40px 24px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: ${bp.md}) {
    /* MUDANÇA: Empilhar (sem inverter agora) */
    flex-direction: column; 
    gap: 30px;
  }
`;

export const TextContent = styled.div`
  max-width: 500px;
  flex: 1;

  @media (max-width: ${bp.md}) {
    /* MUDANÇA: Centralizar tudo */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 100%;
    order: 1; /* MUDANÇA: O texto vem primeiro no mobile */
  }
`;

export const MainTitle = styled.h2`
  font-family: ${fonts.heading};
  font-size: 3rem;
  line-height: 1.3;
  color: #333;

  @media (max-width: ${bp.md}) {
    font-size: 2rem;
  }
`;

export const LaunchTitle = styled.h3`
  font-family: ${fonts.heading};
  font-size: 3.5rem;
  color: #da627d;
  margin-bottom: 25px;

  @media (max-width: ${bp.md}) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  font-family: ${fonts.body};
  color: #555;
  line-height: 1.7;
  margin-bottom: 35px;
`;

export const DetailsButton = styled.button`
  background: transparent;
  border: 1.5px solid #da627d;
  color: #333;
  border-radius: 30px;
  padding: 15px 30px;
  font-family: ${fonts.body};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #da627d;
    color: #fff;
  }
`;

export const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${bp.md}) {
    order: 2; /* MUDANÇA: A imagem vem por último no mobile */
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  width: 550px;
  filter: drop-shadow(0 20px 25px rgba(0,0,0,0.15));

  @media (max-width: ${bp.md}) {
    width: 80%;
    max-width: 300px;
  }
`;