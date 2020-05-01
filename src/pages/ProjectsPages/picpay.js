import React from 'react';

import { ImagsProjCell } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProjectCel from '../../components/ImagesProjectCel/index';

import Img1 from '../../images/picpay/1.jpg';
import Img2 from '../../images/picpay/2.jpg';
import Img3 from '../../images/picpay/3.jpg';
import Img4 from '../../images/picpay/4.jpg';
import Img5 from '../../images/picpay/5.jpg';

export default function picpay() {
  return (
    <>
      <Pages
        ProjectName="Clone APP Nubank"
        ProjectDescription="Clone da Interface do PicPay desnvolvida em React-Native, com o objetivo de estudar interfaces mobile. O resultado final do app foi muito satisfatório, levando em conta que o objetivo de reproduzir a interface foi alcançado com êxito."
        disableDesc
        RepositoryLink="https://github.com/ViniciusCrisol/ClonePicPay"
      />
      <ImagsProjCell>
        <ImagesProjectCel Image={Img1} />
        <ImagesProjectCel Image={Img2} />
        <ImagesProjectCel Image={Img3} />
        <ImagesProjectCel Image={Img4} />
        <ImagesProjectCel Image={Img5} />
      </ImagsProjCell>
      <Footer />
    </>
  );
}
