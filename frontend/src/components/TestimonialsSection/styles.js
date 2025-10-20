import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

const bp = {
  md: '768px',
  lg: '1024px',
};

export const SectionContainer = styled.section`
  background-color: #FADBEB; /* Rosa mais claro */
  padding: 80px;
  overflow-x: hidden; /* A MÁGICA ACONTECE AQUI */

  @media (max-width: ${bp.md}) {
    padding: 40px 24px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;

  @media (max-width: ${bp.md}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;

export const TitleBlock = styled.div``;

export const Title = styled.h2`
  font-family: ${fonts.heading};
  font-size: 3.5rem;
  color: #333;

  @media (max-width: ${bp.md}) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-family: ${fonts.body};
  color: #555;
  font-size: 1.1rem;
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 15px;
`;

export const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #da627d;
  background-color: transparent;
  color: #da627d;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #da627d;
    color: #fff;
  }
`;

// Estilização para o Swiper
export const SwiperContainer = styled.div`
  /* MUDANÇA CRÍTICA: Adiciona espaço no topo para as imagens flutuantes */
  padding-top: 60px;

  /* MUDANÇA CRÍTICA: Permite que o conteúdo do slide "vaze" para fora */
  .swiper-slide {
    overflow: visible;
  }
  
  /* Garante que o container principal do swiper não corte também */
  .swiper {
    overflow: visible;
  }

  .swiper-pagination-bullet {
    background: #da627d;
    width: 10px;
    height: 10px;
  }

  .swiper-wrapper {
    padding-bottom: 50px;
  }
`;