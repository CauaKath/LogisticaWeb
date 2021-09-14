import React, { useRef, useCallback } from 'react';
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core'; 
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { Link, useHistory } from 'react-router-dom';

//yarn add yup  
//yarn add -D @types/yup

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

interface SignUpFormData {
    email: string;
    senha: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(async (data: SignUpFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Informe um e-mail válido'),
                senha: Yup.string().min(6, 'No mínimo 6 digitos'),
            });

            await api.post('/pessoas/usuario', data);

            history.push('/');

            addToast({
                type: 'success',
                title: 'cadastro realizado',
                description: 'Você já pode realizar seu login no Logística PSIN!'
            })

            await schema.validate(data, {
                abortEarly: false,
            })
        } catch(err) {
            if(err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);

                return;
            }

            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Ocorreu um erro ao fazer o cadastro, tente novamente!'
            })
        }
    }, [addToast, history]);

    return (
        <Container>
            <Background />
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input icon={FiUser} name="email" placeholder="E-mail" />
                    <Input icon={FiLock} name="senha" type="password" placeholder="Senha" />

                    <Button type="submit">Cadastrar</Button>
                </Form>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para o login
                </Link>
            </Content>
        </Container>
    )
};

export default SignUp;