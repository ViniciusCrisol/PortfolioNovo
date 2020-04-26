import React from 'react';

import { ImgsProj } from '../../../styles/stylesPage';

import Pages from '../../../components/Pages/index';
import Footer from '../../../components/Footer/index';
import ImagesProject from '../../../components/ImagesProject/index';

import Img1 from '../../../assets/imagesInPages/SPOTFY/1.png';
import Img2 from '../../../assets/imagesInPages/SPOTFY/2.png';
import Img3 from '../../../assets/imagesInPages/SPOTFY/3.png';
import Img4 from '../../../assets/imagesInPages/SPOTFY/4.png';
import Img5 from '../../../assets/imagesInPages/SPOTFY/5.png';

export default function LRGIT() {
  return (
    <>
      <Pages
        ProjectName="Repositórios do GitHub"
        ProjectDescription="Clone da interface do SpotFy 100% resposiva, projeto desenvolvido para estudar ReactJS."
        disableDesc
        RepositoryLink="https://github.com/ViniciusCrisol/CloneSpotfy"
      />
      <ImgsProj>
        <ImagesProject Image={Img1} />
        <ImagesProject Image={Img2} />
        <ImagesProject Image={Img3} />
        <ImagesProject Image={Img4} />
        <ImagesProject Image={Img5} />
      </ImgsProj>
      <Footer />
    </>
  );
}
