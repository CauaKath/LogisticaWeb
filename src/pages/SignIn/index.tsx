import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import Input from "../../components/Input";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Faça seu Login</h1>

        <Input name="email" placeholder="Email" />
        <Input name="senha" type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="teste">Esqueci minha senha</a> 
      </form>

      <a href="teste">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;