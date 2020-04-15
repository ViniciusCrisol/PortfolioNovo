import React from 'react';

import { ImgsProj } from '../../../styles/stylesPage';

import Pages from '../../../components/Pages/index';
import Footer from '../../../components/Footer/index';
import ImagesProject from '../../../components/ImagesProject/index';

import Img1 from '../../../assets/imagesInPages/AIRBNB/1.jpg';
import Img2 from '../../../assets/imagesInPages/AIRBNB/2.png';
import Img3 from '../../../assets/imagesInPages/AIRBNB/3.jpg';
import Img4 from '../../../assets/imagesInPages/AIRBNB/4.png';

export default function AIRBNB() {
  return (
    <>
      <Pages
        ProjectName="Clone interface AIRBNB"
        ProjectDescription="A página foi desenvolvida em HTML/CSS com o objetivo de estudar interfaces. O site não possui responsividade, já que o intuito do estudo era compreender melhor a interação de elementos na tela. O resultado final foi muito satisfatório, levando em conta que o objetivo de resporduzir a interface do site original foi concluído com êxito."
        disableDesc={true}
        RepositoryLink="https://github.com/ViniciusCrisol/CloneAirbnb"
      />
      <ImgsProj>
        <ImagesProject Image={Img1} />
        <ImagesProject Image={Img2} />
        <ImagesProject Image={Img3} />
        <ImagesProject Image={Img4} />
      </ImgsProj>
      <Footer />
    </>
  );
}
