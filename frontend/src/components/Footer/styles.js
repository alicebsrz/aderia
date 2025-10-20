import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

const bp = {
  md: '768px',
};

// O container principal do footer
export const FooterContainer = styled.footer`
  background-color: #fff;
  /* Espaço no topo para o card flutuante se encaixar */
  padding: 120px 80px 40px;
  margin-top: -80px; /* Puxa o footer para cima, para baixo do card */
  
  @media (max-width: ${bp.md}) {
    padding: 100px 24px 24px;
    margin-top: -60px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;

  @media (max-width: ${bp.md}) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap; // Permite que os links quebrem a linha no mobile

  a {
    font-family: ${fonts.body};
    color: #555;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: #da627d;
    }
  }

  @media (max-width: ${bp.md}) {
    justify-content: center;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  
  a {
    color: #555;
    font-size: 1.5rem;
    transition: color 0.3s ease;
    &:hover {
      color: #da627d;
    }
  }
`;

export const BottomSection = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${fonts.body};
  color: #777;
  font-size: 0.9rem;

  @media (max-width: ${bp.md}) {
    flex-direction: column-reverse; // Inverte a ordem no mobile
    gap: 15px;
    text-align: center;
  }
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
  
  a {
    color: #777;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LogoImage = styled.img`
  /* MUDANÇA AQUI: Aumentar a altura para um valor mais visível */
  height: 80px; 
  margin-top: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${bp.md}) {
    /* MUDANÇA AQUI: Ajustar também para mobile, se necessário */
    height: 64px;
    margin-top: 30px;
  }
`;