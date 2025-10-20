import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

// Vamos adicionar nosso breakpoint
const bp = {
  md: '768px',
};

export const SectionContainer = styled.section`
  background-color: #FFEBF1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 100px 80px;

  @media (max-width: ${bp.md}) {
    /* MUDANÇA: Empilhar e ajustar espaçamentos */
    flex-direction: column;
    padding: 40px 24px;
    gap: 30px;
  }
`;

export const ImageContainer = styled.div`
  max-width: 450px;
  flex-shrink: 0;
  border-radius: 250px 250px 0 0;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);

  @media (max-width: ${bp.md}) {
    /* MUDANÇA: Garantir que a imagem não fique muito pequena */
    width: 100%;
    max-width: 350px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  display: block;
`;

export const TextContainer = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${bp.md}) {
    /* MUDANÇA: Centralizar todo o texto */
    text-align: center;
    align-items: center;
  }
`;

export const MainHeadline = styled.h2`
  font-family: ${fonts.heading};
  font-size: 3rem;
  line-height: 1.3;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: ${bp.md}) {
    /* MUDANÇA: Reduzir o tamanho da fonte */
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
`;

export const HighlightText = styled.span`
  color: #da627d;
`;

export const SubsectionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: ${bp.md}) {
    /* MUDANÇA: Transformar em uma única coluna */
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const Subsection = styled.div``;

export const SubsectionTitle = styled.h3`
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: ${bp.md}) {
    /* MUDANÇA: Reduzir o tamanho da fonte */
    font-size: 1.3rem;
  }
`;

export const SubsectionText = styled.p`
  font-family: ${fonts.body};
  color: #666;
  line-height: 1.6;
`;