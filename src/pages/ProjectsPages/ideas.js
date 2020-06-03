import React from 'react';

import { ImgsProj } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProject from '../../components/ImagesProject/index';

import Img1 from '../../images/ideas/img.gif';

export default function productHunt() {
  return (
    <>
      <Pages
        projectName="Ideas"
        projectDescription="Projeto desenvolvido com o obejtivo de estudar ReactJs e Node. No desenvolvimento do back end usei Node com o banco MongoDB, foquei na parte de autenticação com JWT e o resultado foi maior que o esperado. Já no front foquei no Redux. O projeto como um todo foi muito bom de se desenvolver, consequentemente o resultado não poderia ser diferente de um projeto completo 100% funcional."
        disableDesc
        repositoryLink="https://github.com/ViniciusCrisol/Ideas"
      />
      <ImgsProj>
        <ImagesProject image={Img1} />
      </ImgsProj>
      <Footer />
    </>
  );
}
