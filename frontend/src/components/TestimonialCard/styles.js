import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

export const CardContainer = styled.div`
  background-color: #fff;
  /* AJUSTE FINO: Cantos um pouco menos exagerados para um visual mais suave */
  border-radius: 40px; 
  padding: 30px;
  padding-top: 70px; // Aumentamos um pouco para dar mais espaço
  position: relative;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  height: 100%;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.h3`
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  /* AJUSTE FINO: Menos margem no topo para aproximar o nome da foto */
  margin-top: 10px; 
  color: #333;
`;

export const Rating = styled.div`
  margin: 10px 0;
  color: #ffc107;
  font-size: 1.2rem;
`;

export const ReviewText = styled.p`
  font-family: ${fonts.body};
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;