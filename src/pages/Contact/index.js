import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

import TextHeader from '../../components/TextHeader';

import { Container } from './styles';

export default function Contact() {
  return (
    <>
      <TextHeader NameText="Vinícius Poloni Crisol" FunctionText="Contato" />
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
      </Container>
    </>
  );
}
