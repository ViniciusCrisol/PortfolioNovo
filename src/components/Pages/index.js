import React from 'react';
import PropTypes from 'prop-types';

import { Container, DescProj, DescProjText } from './styles';

export default function Pages({
  projectName,
  projectDescription,
  projectTechs,
  repositoryLink,
  disableDesc,
}) {
  return (
    <Container>
      <h1>{projectName}</h1>
      <a href={repositoryLink} target="_blank" rel="noopener noreferrer">
        <h3>repositório</h3>
      </a>
      <DescProj>
        <DescProjText>
          <h1>Descrição do projeto</h1>
          <p>{projectDescription}</p>
          <h1>{disableDesc ? '' : 'Descrição técnica'}</h1>
          <p>{projectTechs}</p>
        </DescProjText>
      </DescProj>
    </Container>
  );
}

Pages.propTypes = {
  projectName: PropTypes.element.isRequired,
  projectDescription: PropTypes.element.isRequired,
  projectTechs: PropTypes.element.isRequired,
  repositoryLink: PropTypes.element.isRequired,
  disableDesc: PropTypes.element.isRequired,
};
