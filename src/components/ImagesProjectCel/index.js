import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ImagesProjectCel({ image }) {
  return (
    <Container>
      <a href={image} target="_blank" rel="noopener noreferrer">
        <img src={image} alt=" " />
      </a>
    </Container>
  );
}

ImagesProjectCel.propTypes = {
  image: PropTypes.element.isRequired,
};
