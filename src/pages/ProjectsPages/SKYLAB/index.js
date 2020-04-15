import React from 'react';

import { ImgsProj } from '../../../styles/stylesPage';

import Pages from '../../../components/Pages/index';
import Footer from '../../../components/Footer/index';
import ImagesProject from '../../../components/ImagesProject/index';

import Img1 from '../../../assets/imagesInPages/SKYLAB/Index.png';
import Img2 from '../../../assets/imagesInPages/SKYLAB/Cadastro.png';
import Img3 from '../../../assets/imagesInPages/SKYLAB/Login.png';

export default function SKYLAB() {
  return (
    <>
      <Pages
        ProjectName="Clone SKYLAB"
        ProjectDescription="Clone do site SkyLab da RocketSeat. Desenvolvido em React, com o objetivo de estudar a criação de sites responsivos com o framework."
        disableDesc={true}
        RepositoryLink="https://github.com/ViniciusCrisol/Clone-SkyLab"
      />
      <ImgsProj>
        <ImagesProject Image={Img1} />
        <ImagesProject Image={Img2} />
        <ImagesProject Image={Img3} />
      </ImgsProj>
      <Footer />
    </>
  );
}
