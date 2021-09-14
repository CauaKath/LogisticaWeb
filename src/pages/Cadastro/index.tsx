import React, { useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from 'yup';

import api from "../../services/api";
import Button from "../../components/Button";
import Input from "../../components/Input";

import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';

import { Container } from './styles';

interface PessoaProps {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
}

const Cadastro: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const pessoa = {
        nome: "",
        telefone: "",
        usuario: {
            email: "",
            senha: ""
        }
    }

    const cadastrar = useCallback( async (data: PessoaProps) => {
        try {
            formRef.current?.setErrors({});

            pessoa.nome = data.nome;
            pessoa.telefone = data.telefone;
            pessoa.usuario.email = data.email;
            pessoa.usuario.senha = data.senha;

            await api.post("/pessoas", pessoa);
        } catch(err) {
            if(err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);

                return;
            } 

            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Ocorreu um erro ao cadastrar pessoa, cheque os campos.',
            });
        }
    }, []);

    return (
        <>
            <Container>
                <h1>Cadastro</h1>
                <Form ref={formRef} onSubmit={cadastrar}>
                    <Input name="nome" placeholder="Informe o nome" />
                    <Input name="telefone" placeholder="Telefone com DDD" />
                    <Input name="email" placeholder="Email" />
                    <Input name="senha" placeholder="Senha" />

                    <Button type="submit">Cadastrar</Button>
                </Form>
            </Container>
        </>
    );
}

export default Cadastro;