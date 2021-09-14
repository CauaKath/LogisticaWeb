import React, { useRef, useCallback } from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

interface SingInFormData {
    email: string;
    senha: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();
    const { addToast } = useToast();
    const history =  useHistory();

    const handleSubmit = useCallback(async (data: SingInFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Informe um e-mail válido'),
                senha: Yup.string().required('Senha obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await signIn({
                email: data.email,
                senha: data.senha
            });

            history.push('/');

        } catch(err) {
            if(err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);

                return;
            } 

            addToast({
                type: 'error',
                title: 'Erro na autenticação',
                description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
            });
        }
    }, [signIn, addToast, history]);

    return (
        <Container>
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu login</h1>

                    <Input icon={FiMail} name="email" placeholder="E-mail" />
                    <Input icon={FiLock} name="senha" type="password" placeholder="Senha" />

                    <Button type="submit">Entrar</Button>

                    <a href="./">Esqueci minha senha</a>
                </Form>

                <Link to="/signup">
                    <FiLogIn />
                    Criar conta
                </Link>
            </Content>
            <Background />
        </Container>
    )
};

export default SignIn;