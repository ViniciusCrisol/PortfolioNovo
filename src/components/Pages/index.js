import React from 'react';
import PropTypes from 'prop-types';

import { Container, DescProj, DescProjText } from './styles';

export default function Pages({
  ProjectName,
  ProjectDescription,
  ProjectTechs,
  RepositoryLink,
  disableDesc,
}) {
  return (
    <Container>
      <h1>{ProjectName}</h1>
      <a href={RepositoryLink} target="_blank" rel="noopener noreferrer">
        <h3>repositório</h3>
      </a>
      <DescProj>
        <DescProjText>
          <h1>Descrição do projeto</h1>
          <p>{ProjectDescription}</p>
          <h1>{disableDesc ? '' : 'Descrição técnica'}</h1>
          <p>{ProjectTechs}</p>
        </DescProjText>
      </DescProj>
    </Container>
  );
}

Pages.propTypes = {
  ProjectName: PropTypes.element.isRequired,
  ProjectDescription: PropTypes.element.isRequired,
  ProjectTechs: PropTypes.element.isRequired,
  RepositoryLink: PropTypes.element.isRequired,
  disableDesc: PropTypes.element.isRequired,
};
