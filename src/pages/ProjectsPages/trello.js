import React from 'react';

import { ImgsProj } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProject from '../../components/ImagesProject/index';

import Img1 from '../../images/trello/gif.gif';

export default function productHunt() {
  return (
    <>
      <Pages
        ProjectName="Notas"
        ProjectDescription="Projeto desenvolvido com o obejtivo de estudar ReactJs e Node. Sua funcinalidade foi criada baseando-se no Trello, para a criação da API foi utilizado Node e MongoDB."
        disableDesc
        RepositoryLink="https://github.com/ViniciusCrisol/Trello"
      />
      <ImgsProj>
        <ImagesProject Image={Img1} />
      </ImgsProj>
      <Footer />
    </>
  );
}
