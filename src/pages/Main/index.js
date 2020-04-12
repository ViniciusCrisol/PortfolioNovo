import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

import TextHeader from '../../components/TextHeader';

import { Container } from './styles';

export default function Main() {
  return (
    <>
      <TextHeader
        NameText="Vinícius Poloni Crisol"
        FunctionText="Programador"
      />
      <Container>
        <h2>Sobre:</h2>
        <p>
          Desenvolvedor Francano, amante de javaScript. Tenho diversos projetos
          em meu portfólio, para saber mais acesse &quot;Projetos&quot; no menu
          superior ou clique no link abaixo para ser redirecionado.
        </p>
        <Link to="projetos">Projetos</Link>
        <div>
          <a
            href="https://github.com/ViniciusCrisol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={16} color="#6064A8" />
            github.com/ViniciusCrisol
          </a>
          <a
            href="https://github.com/ViniciusCrisol/viniciuscrisol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={16} color="#6064A8" />
            Repositório do Site
          </a>
        </div>
      </Container>
    </>
  );
}
