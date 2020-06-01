import React from 'react';

import { ImgsProj } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProject from '../../components/ImagesProject/index';

import Img1 from '../../images/drinks/gif.gif';

export default function productHunt() {
  return (
    <>
      <Pages
        projectName="Drinks"
        projectDescription="Projeto desenvolvido com o obejtivo de estudar ReactJs. Para seu desenvolvimento foi utilizado a API thecocktaildb em conjunto do ReactJs. O resultado final ficou muito satisfatório, coloco esse projeto aqui pela grande quantidade de conhecimento que ele me trouxe."
        disableDesc
        repositoryLink="https://github.com/ViniciusCrisol/drinks"
      />
      <ImgsProj>
        <ImagesProject image={Img1} />
      </ImgsProj>
      <Footer />
    </>
  );
}
