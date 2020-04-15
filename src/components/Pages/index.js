import React from 'react';

import { Container, DescProj, ImgsProj, DescProjText } from './styles';

export default function Pages({
  ProjectName,
  ProjectDescription,
  ProjectTechs,
  RepositoryLink,
  disableDesc,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
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
