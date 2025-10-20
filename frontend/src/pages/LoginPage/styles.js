import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 24px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
`;

export const Title = styled.h1`
  font-family: ${fonts.heading};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-family: ${fonts.body};
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 15px;
  border-radius: 10px;
  border: none;
  background-color: #da627d;
  color: #fff;
  font-family: ${fonts.body};
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
`;

export const RedirectLink = styled.p`
  text-align: center;
  margin-top: 20px;
  font-family: ${fonts.body};
  
  a {
    color: #da627d;
    font-weight: 700;
    text-decoration: none;
  }
`;