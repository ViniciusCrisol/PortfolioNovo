import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ImagesProject({ Image }) {
  return (
    <Container href={Image} target="_blank" rel="noopener noreferrer">
      <img src={Image} alt=" " />
    </Container>
  );
}

ImagesProject.propTypes = {
  Image: PropTypes.element.isRequired,
};
