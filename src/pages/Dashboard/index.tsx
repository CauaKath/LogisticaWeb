import React, { useState, useEffect } from "react";

import api from "../../services/api";

import { Container, Box } from './styles';

import { Link } from "react-router-dom";

interface Pessoa {
    nome: string;
    telefone: string;
}

const Dashboard: React.FC = () => {
    const [ pessoas, setPessoas ] = useState<Pessoa[]>([]);

    useEffect(() => {
        api.get(`/pessoas`).then(response => {
            setPessoas(response.data);
        });
    }, []);

    return (
        <>
        <Container>
            <h1>Dashboard</h1>

            <Box>
                {pessoas.map(pessoa => (
                    <div>
                        <p>{pessoa.nome}</p>
                        <p>{pessoa.telefone}</p>
                    </div>
                ))}
            </Box>

            <Link to="/cadastro">
                Cadastro
            </Link>
        </Container>        
        </>
    );
}

export default Dashboard;