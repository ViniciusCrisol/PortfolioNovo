import React from 'react';

import { Container } from './styles';

export default function TextHeader({ NameText, FunctionText }) {
  return (
    <Container>
      <h1>{NameText}</h1>
      <h3>{FunctionText}</h3>
    </Container>
  );
}
