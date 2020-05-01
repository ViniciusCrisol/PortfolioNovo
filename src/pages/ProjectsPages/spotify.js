import React from 'react';

import { ImgsProj } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProject from '../../components/ImagesProject/index';

import Img1 from '../../images/spotify/1.png';
import Img2 from '../../images/spotify/2.png';
import Img3 from '../../images/spotify/3.png';
import Img4 from '../../images/spotify/4.png';
import Img5 from '../../images/spotify/5.png';

export default function spotify() {
  return (
    <>
      <Pages
        ProjectName="Repositórios do GitHub"
        ProjectDescription="Clone da interface do SpotiFy 100% resposiva, projeto desenvolvido para estudar ReactJS."
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
