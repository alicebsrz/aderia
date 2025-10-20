import { createGlobalStyle } from 'styled-components';

// Adicione a nova família de fontes aqui
export const fonts = {
  body: "'Nunito Sans', sans-serif",
  heading: "'Playfair Display', serif"
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${fonts.body}; /* Aplicando a fonte padrão */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    color: #333;
  }
`;
