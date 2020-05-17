import React from 'react';

import { ImagsProjCell, ImgsProj } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';

import ImagesProjectCel from '../../components/ImagesProjectCel/index';
import ImagesProject from '../../components/ImagesProject/index';

import Img1 from '../../images/swimsuites/1.png';
import Img2 from '../../images/swimsuites/2.png';
import Img3 from '../../images/swimsuites/3.png';
import Img4 from '../../images/swimsuites/4.png';
import Img5 from '../../images/swimsuites/5.png';

export default function picpay() {
  return (
    <>
      <Pages
        ProjectName="SWIMSUITES"
        ProjectDescription="Aplicação desenvolvida com o objetivo de estudar interfaces web com ReactJs, feito com base no projeto swimsuites. Para sua realização fora utilizados além do framework, principalmenet o Cheeseburger Menu que facilita a criação de menus laterais e o Styled Components."
        disableDesc
        RepositoryLink="https://github.com/ViniciusCrisol/SwimSuites"
      />
      <ImgsProj>
        <ImagesProject Image={Img1} />
        <ImagesProject Image={Img3} />
        <ImagesProject Image={Img2} />
        <ImagesProject Image={Img4} />
      </ImgsProj>
      <ImagsProjCell>
        <ImagesProjectCel Image={Img5} />
      </ImagsProjCell>
      <Footer />
    </>
  );
}
