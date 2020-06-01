import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function TextHeader({ nameText, functionText, link }) {
  return (
    <Container>
      <h1>{nameText}</h1>
      <h3>{functionText}</h3>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
    </Container>
  );
}

TextHeader.propTypes = {
  nameText: PropTypes.element.isRequired,
  functionText: PropTypes.element.isRequired,
  link: PropTypes.element.isRequired,
};
