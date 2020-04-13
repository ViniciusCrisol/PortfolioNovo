import React from 'react';

import { Container } from './styles';

export default function ImagesProjectCel({ Image }) {
  return (
    <Container>
      <a href={Image} target="_blank" rel="noopener noreferrer">
        <img src={Image} alt=" " />
      </a>
    </Container>
  );
}
