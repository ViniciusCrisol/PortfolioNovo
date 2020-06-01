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
        projectName="SWIMSUITES"
        projectDescription="Aplicação desenvolvida com o objetivo de estudar interfaces web com ReactJs, feito com base no projeto swimsuites. Para sua realização fora utilizados além do framework, principalmenet o Cheeseburger Menu que facilita a criação de menus laterais e o Styled Components."
        disableDesc
        repositoryLink="https://github.com/ViniciusCrisol/SwimSuites"
      />
      <ImgsProj>
        <ImagesProject image={Img1} />
        <ImagesProject image={Img3} />
        <ImagesProject image={Img2} />
        <ImagesProject image={Img4} />
      </ImgsProj>
      <ImagsProjCell>
        <ImagesProjectCel image={Img5} />
      </ImagsProjCell>
      <Footer />
    </>
  );
}
