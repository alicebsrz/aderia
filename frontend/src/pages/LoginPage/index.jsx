import React, { useState, useContext } from 'react'; // 1. Importar useContext
import { Link, useNavigate } from 'react-router-dom'; // 2. Importar useNavigate
import axios from 'axios';
import AuthContext from '../../context/AuthContext.jsx'; // 3. Importar nosso AuthContext
import { FormContainer, FormWrapper, Title, Form, Input, Button, RedirectLink } from './styles';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext); // 4. Pegar a função de login do contexto
  const navigate = useNavigate(); // 5. Hook para redirecionar o usuário
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, { email, password });
      // 6. Chamar a função de login com os dados do usuário
      login(data);
      // 7. Redirecionar para a página inicial
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Title>Login</Title>
        <Form onSubmit={submitHandler}>
          <Input 
            type="email" 
            placeholder="Enter email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Input 
            type="password" 
            placeholder="Enter password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Sign In</Button>
        </Form>
        <RedirectLink>
          New Customer? <Link to="/register">Register</Link>
        </RedirectLink>
      </FormWrapper>
    </FormContainer>
  );
};

export default LoginPage;