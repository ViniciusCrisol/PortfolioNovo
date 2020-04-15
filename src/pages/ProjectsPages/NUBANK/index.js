import React from 'react';

import { ImagsProjCell } from '../../../styles/stylesPage';

import Pages from '../../../components/Pages/index';
import Footer from '../../../components/Footer/index';
import ImagesProjectCel from '../../../components/ImagesProjectCel/index';

import Img1 from '../../../assets/imagesInPages/NUBANK/Inicio.jpg';
import Img2 from '../../../assets/imagesInPages/NUBANK/Menu.jpg';

export default function NUBANK() {
  return (
    <>
      <Pages
        ProjectName="Clone APP Nubank"
        ProjectDescription="O projeto foi desenvolvido com o objetivo de estudar animações em interface mobile nativa."
        disableDesc={true}
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
