import React from 'react';
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { FaWhatsapp, FaGithub } from 'react-icons/fa';

import TextHeader from '../../components/TextHeader';

import { Container } from './styles';

export default function Contact() {
  return (
    <>
      <TextHeader nameText="Vinícius Poloni Crisol" functionText="Contato" />
      <Container>
        <h2>Informações:</h2>
        <p>
          <AiOutlineMail />
          vinicius.crisol@etec.sp.gov.br
        </p>
        <p>
          <FaWhatsapp />
          (16) 99104-3028
        </p>
        <a
          href="https://www.linkedin.com/in/vin%C3%ADciuscrisol/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
          Linkedin
        </a>
        <a
          href="https://github.com/ViniciusCrisol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub
        </a>
      </Container>
    </>
  );
}
