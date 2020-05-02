import React from 'react';

import { ImagsProjCell } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProjectCel from '../../components/ImagesProjectCel/index';

import Img1 from '../../images/nubank/Inicio.jpg';
import Img2 from '../../images/nubank/Menu.jpg';

export default function nubank() {
  return (
    <>
      <Pages
        ProjectName="Clone APP Nubank"
        ProjectDescription="O projeto foi desenvolvido com o objetivo de estudar animações em interface mobile nativa. Criado utilizando React Native, ao seu final o resultado foi muito satisfatório, levando em conta que a meta de clonar a interface do Nubank foi atingida com sucesso."
        disableDesc
        RepositoryLink="https://github.com/ViniciusCrisol/CloneInterfaceNubankMobile"
      />
      <ImagsProjCell>
        <ImagesProjectCel Image={Img1} />
        <ImagesProjectCel Image={Img2} />
      </ImagsProjCell>
      <Footer />
    </>
  );
}
