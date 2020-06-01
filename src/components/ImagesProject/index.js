import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ImagesProject({ image }) {
  return (
    <Container href={image} target="_blank" rel="noopener noreferrer">
      <img src={image} alt=" " />
    </Container>
  );
}

ImagesProject.propTypes = {
  image: PropTypes.element.isRequired,
};
