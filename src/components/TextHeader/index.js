import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function TextHeader({ NameText, FunctionText }) {
  return (
    <Container>
      <h1>{NameText}</h1>
      <h3>{FunctionText}</h3>
    </Container>
  );
}

TextHeader.propTypes = {
  NameText: PropTypes.element.isRequired,
  FunctionText: PropTypes.element.isRequired,
};
