import React from 'react';

import { ImagsProjCell } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProjectCel from '../../components/ImagesProjectCel/index';

import Img1 from '../../images/templateApp/1.jpg';
import Img2 from '../../images/templateApp/2.jpg';
import Img3 from '../../images/templateApp/3.jpg';

export default function TEMPLATEAPP() {
  return (
    <>
      <Pages
        ProjectName="Template APP"
        ProjectDescription="Template de um aplicativo. Desenvolvido com objetivo de estudar React-Native. Projeto realizado no dia 04/04/2020.Aplicação idealizada em React-Native, com auxílio do Expo-cli."
        disableDesc
        RepositoryLink="https://github.com/ViniciusCrisol/TemplateApp"
      />
      <ImagsProjCell>
        <ImagesProjectCel Image={Img1} />
        <ImagesProjectCel Image={Img2} />
        <ImagesProjectCel Image={Img3} />
      </ImagsProjCell>
      <Footer />
    </>
  );
}
