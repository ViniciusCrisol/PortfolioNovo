import React from 'react';

import { ImgsProj } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProject from '../../components/ImagesProject/index';

import Img1 from '../../images/pipefine/img.gif';

export default function productHunt() {
  return (
    <>
      <Pages
        projectName="Pipefine"
        projectDescription="Projeto desenvolvido com o obejtivo de estudar Drag N' Drop no ReactJs. Para isso foi utilizado o módulo React DND. Particularmente gostei muito do resultado, apesar de ainda possuir pontos a serem melhorados, coloco ele como um dos meus projetos favoritos pela facilidade de contrução."
        disableDesc
        repositoryLink="https://github.com/ViniciusCrisol/Pipefine"
      />
      <ImgsProj>
        <ImagesProject image={Img1} />
      </ImgsProj>
      <Footer />
    </>
  );
}
