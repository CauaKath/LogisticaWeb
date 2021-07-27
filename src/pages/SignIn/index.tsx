import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import Input from "../../components/Input";
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Faça seu Login</h1>

        <Input icon={FiMail} name="email" placeholder="Email" />
        <Input icon={FiLock} name="senha" type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <a href="./">Esqueci minha senha</a> 
      </form>

      <a href="./">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;