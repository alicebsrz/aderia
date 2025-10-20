import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// Reutilizamos os mesmos estilos da página de login
import { FormContainer, FormWrapper, Title, Form, Input, Button, RedirectLink } from '../LoginPage/styles';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      try {
  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register`, { name, email, password });
        console.log('Registration successful:', data);
        alert('Registration successful!');
        // No futuro, faremos o login automático e redirecionaremos o usuário
      } catch (error) {
        console.error('Registration error:', error.response.data.message);
        alert(error.response.data.message);
      }
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Title>Register</Title>
        <Form onSubmit={submitHandler}>
          <Input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <Button type="submit">Register</Button>
        </Form>
        <RedirectLink>
          Already have an account? <Link to="/login">Login</Link>
        </RedirectLink>
      </FormWrapper>
    </FormContainer>
  );
};

export default RegisterPage;