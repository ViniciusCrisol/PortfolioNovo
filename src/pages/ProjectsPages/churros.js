import React from 'react';

import { ImgsProj } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProject from '../../components/ImagesProject/index';

import Img1 from '../../images/churros/1.png';
import Img2 from '../../images/churros/2.png';
import Img3 from '../../images/churros/3.png';
import Img4 from '../../images/churros/4.png';

export default function churros() {
  return (
    <>
      <Pages
        ProjectName="Site sobre Churros"
        ProjectDescription="A página foi desenvolvida em HTML/CSS para um trabalho da faculdade, 100% responsiva, com um design muito interessante o reultado final do trabalho foi excelente."
        disableDesc
        RepositoryLink="https://github.com/ViniciusCrisol/SiteDeChurros"
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
