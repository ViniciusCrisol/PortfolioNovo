import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';

import TextHeader from '../../components/TextHeader';

import { Container } from './styles';

export default function Contact() {
  return (
    <>
      <TextHeader NameText="Vinícius Poloni Crisol" FunctionText="Contato" />
      <Container>
        <h2>Informações:</h2>
        <p>
          <MdEmail />
          vinicius.crisol@etec.sp.gov.br
        </p>
        <p>
          <IoLogoWhatsapp />
          (16) 99104-3028
        </p>
      </Container>
    </>
  );
}
