import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

const bp = {
  md: '768px',
};

// MUDANÇA PRINCIPAL: Agora o container se adapta ao mobile
export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: ${bp.md}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100%;
    background-color: #fff;
    z-index: 1000;
    padding: 24px;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
    transition: transform 0.3s ease-in-out;
    overflow-y: auto; // Permite rolar se houver muitos filtros
  }
`;

// NOVO: Cabeçalho para o painel mobile
export const MobileHeader = styled.div`
  display: none; // Escondido no desktop
  
  @media (max-width: ${bp.md}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const FilterGroup = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
`;

export const FilterTitle = styled.h3`
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

export const FilterList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FilterItem = styled.li`
  label {
    font-family: ${fonts.body};
    font-size: 1rem;
    color: #555;
    cursor: pointer;
    display: flex;
    align-items: center;

    input {
      margin-right: 10px;
      accent-color: #da627d; // Cor do checkbox
    }
  }
`;