// frontend/src/components/TrendingDeals/styles.js
import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

const bp = {
  md: '768px',
};

export const SectionContainer = styled.section`
  background-color: #FFD1EF;
  padding: 80px;

  @media (max-width: ${bp.md}) {
    /* MUDANÇA: Reduzir padding e remover o da direita para o scroll funcionar bem */
    padding: 40px 0 40px 24px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;

  @media (max-width: ${bp.md}) {
    /* MUDANÇA: Centralizar o bloco de texto */
    justify-content: center;
    text-align: center;
    margin-bottom: 30px;
    padding-right: 24px; /* Adiciona o padding que removemos do container */
  }
`;

export const TitleBlock = styled.div``;

export const Title = styled.h2`
  font-family: ${fonts.heading};
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: ${bp.md}) {
    font-size: 2.5rem; /* Título um pouco menor no mobile */
  }
`;

export const Subtitle = styled.p`
  font-family: ${fonts.body};
  color: #555;
  font-size: 1.1rem;
`;

export const FilterButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 12px 25px;
  font-family: ${fonts.body};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${bp.md}) {
    /* MUDANÇA: Ocultar o botão no mobile */
    display: none;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: ${bp.md}) {
    /* MUDANÇA PRINCIPAL: Transformando em Carrossel */
    display: flex; /* Mudar para flex */
    overflow-x: auto; /* Ativar scroll horizontal */
    gap: 20px; /* Espaço entre os cards no carrossel */
    padding-right: 24px; /* Espaço à direita para respirar */
    
    /* Efeito "imã" para o scroll */
    scroll-snap-type: x mandatory;
    
    /* Esconder a barra de rolagem */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;