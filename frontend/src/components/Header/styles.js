import styled from 'styled-components';

// Definindo nosso breakpoint para mobile
const bp = {
  md: '850px', // Usamos 850px para ter mais espaço antes de quebrar para mobile
};

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${bp.md}) {
    padding: 15px 24px; // Menos padding no mobile
  }
`;

export const LogoImage = styled.img`
  /* Reduziu um pouco para balancear o header */
  height: 70px;
  width: auto;
  @media (max-width: ${bp.md}) {
    /* Versão mobile proporcional */
    height: 54px;
  }
`;

// O menu principal, que será escondido no mobile
export const NavMenu = styled.nav`
  display: flex;
  gap: 40px; // Mais espaço entre os links

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 1.05rem;
    position: relative;

    &:hover {
      color: #da627d; /* MUDANÇA: Efeito hover rosa */
    }
  }

  .nav-button {
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    color: #333;
    font-family: inherit;
    font-weight: 500;
    font-size: 1.05rem;
    position: relative;

    &:hover {
      color: #da627d;
    }
  }

  @media (max-width: ${bp.md}) {
    display: none; // Esconde o menu de desktop no mobile
  }
`;

// O grupo de ícones, que também será parcialmente escondido
export const IconGroup = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  svg {
    font-size: 1.6rem;
    color: #555;
    cursor: pointer; // Garante que o ícone pareça clicável

    &:hover {
      color: #da627d;
    }
  }

  @media (max-width: ${bp.md}) {
    /* Escondemos os ícones de texto e a busca no mobile para simplificar */
    .SearchInputContainer, .AuthIcon span {
      display: none;
    }
  }
`;

// NOVO: Ícone de Hambúrguer (só aparece no mobile)
export const HamburgerIcon = styled.div`
  display: none; // Escondido por padrão
  cursor: pointer;
  z-index: 1001; // Garante que fique acima de tudo

  @media (max-width: ${bp.md}) {
    display: block; // Visível apenas no mobile
  }
`;

// NOVO: O painel do menu mobile que desliza
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 100px 40px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 280px;
  background-color: #fff;
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  z-index: 1000;
  
  // A mágica do slide-in/slide-out (usa transient prop $isOpen para não encaminhar para o DOM)
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 1.5rem;
    color: #333;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #da627d;
    }
  }
`;

// Damos uma classe para os componentes que vamos esconder no mobile
export const SearchInputContainer = styled.div.attrs({ className: 'SearchInputContainer' })`
  /* ... estilos existentes ... */
  position: relative;
  display: flex;
  align-items: center;
  input { border: 1px solid #ccc; padding: 8px 35px 8px 15px; border-radius: 20px; font-size: 1rem; width: 200px; outline: none; &:focus { border-color: #da627d; } }
  svg { position: absolute; right: 12px; color: #555; font-size: 1.2rem; cursor: pointer; }
`;
export const AuthIcon = styled.div.attrs({ className: 'AuthIcon' })`
  /* ... estilos existentes ... */
  display: flex; align-items: center; gap: 5px; cursor: pointer;
  span { font-size: 0.9rem; font-weight: 500; color: #555; &:hover { color: #da627d; } }
`;
export const CartIconContainer = styled.div`
  /* ... estilos existentes ... */
  position: relative; cursor: pointer;
  span { position: absolute; top: -8px; right: -8px; background-color: #da627d; color: white; border-radius: 50%; padding: 2px 6px; font-size: 0.75rem; font-weight: bold; line-height: 1; }
`;

// NOVO: Estilo para o botão de navegação (nav-button)
export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.05rem;
  position: relative;

  &:hover {
    color: #da627d;
  }
`;