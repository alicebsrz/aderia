import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

const bp = {
  md: '768px',
};

// Banner no topo da página
export const BannerContainer = styled.div`
  background-color: #FFD1EF;
  text-align: center;
  padding: 60px 24px;
`;

export const BannerTitle = styled.h1`
  font-family: ${fonts.heading};
  font-size: 3.5rem;
  color: #333;
`;

// Layout principal com filtros e grade de produtos
export const MainContent = styled.main`
  display: grid;
  grid-template-columns: 280px 1fr; // Coluna de filtro + Coluna de produtos
  gap: 40px;
  padding: 40px 80px;

  @media (max-width: ${bp.md}) {
    grid-template-columns: 1fr; // Apenas uma coluna no mobile
    padding: 20px 24px;
  }
`;

export const FilterSidebar = styled.aside`
  // Estilos virão em breve
`;

export const ProductGridContainer = styled.div`
  /* Container que envolve a grade para controlar margens e responsividade */
  width: 100%;
`;

// NOVO: A grade que conterá os cards
export const ProductGrid = styled.div`
  display: grid;
  /* Cria colunas responsivas: elas terão no mínimo 250px, e o '1fr' faz com que se ajustem para preencher o espaço */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

// NOVO: O botão de filtro para mobile
export const MobileFilterButton = styled.button`
  display: none; // Escondido no desktop
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-family: ${fonts.body};
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  @media (max-width: ${bp.md}) {
    display: flex; // Visível no mobile
  }
  @media (min-width: ${bp.md}) {
    /* Garantia explícita: escondido em desktop */
    display: none;
  }
`;

// NOVO: O overlay escuro que fica atrás do painel
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; // Fica abaixo do painel de filtros
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;