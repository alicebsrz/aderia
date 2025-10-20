import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

const bp = {
  md: '768px',
};

// O container com o fundo rosa
export const SectionContainer = styled.section`
  background-color: #FADBEB; /* O mesmo rosa claro dos depoimentos */
  padding: 80px 80px 0; /* Padding no topo e lados, mas não embaixo */

  @media (max-width: ${bp.md}) {
    padding: 40px 24px 0;
  }
`;

// O card branco que flutua
export const NewsletterCard = styled.div`
  background-color: #fff;
  border-radius: 40px;
  padding: 40px 50px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* A MÁGICA DA FLUTUAÇÃO */
  position: relative;
  z-index: 10; // Garante que ele fique por cima do footer

  @media (max-width: ${bp.md}) {
    flex-direction: column;
    text-align: center;
    gap: 25px;
    padding: 30px;
  }
`;

export const Title = styled.h2`
  font-family: ${fonts.heading};
  font-size: 2.5rem;
  color: #333;

  span {
    color: #da627d; // Cor rosa para a primeira palavra
  }

  @media (max-width: ${bp.md}) {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 30px;
  padding: 5px;
  width: 100%;
  max-width: 400px;

  @media (max-width: ${bp.md}) {
    /* Apenas mobile: empilha o input e o botão */
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    max-width: 100%;
    padding: 8px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px 20px;
  font-family: ${fonts.body};
  font-size: 1rem;
  flex-grow: 1; // Faz o input ocupar o espaço disponível
  background: transparent;
  @media (max-width: ${bp.md}) {
    width: 100%;
    padding: 12px 16px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #fff;
  border: 1px solid #da627d;
  color: #da627d;
  border-radius: 25px;
  padding: 10px 25px;
  font-family: ${fonts.body};
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #da627d;
    color: #fff;
  }
  @media (max-width: ${bp.md}) {
    /* Apenas mobile: botão ocupa a largura inteira e fica abaixo do input */
    width: 100%;
    border-radius: 12px;
    padding: 12px 18px;
    justify-content: center;
  }
`;