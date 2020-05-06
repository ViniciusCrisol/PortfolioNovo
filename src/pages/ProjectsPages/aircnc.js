import React from 'react';

import { ImgsProj, ImagsProjCell } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProject from '../../components/ImagesProject/index';
import ImagesProjectCel from '../../components/ImagesProjectCel/index';

import Img1 from '../../images/aircnc/Inicio.png';
import Img2 from '../../images/aircnc/Spots.png';
import Img3 from '../../images/aircnc/Cadastrar-Spot.png';
import Img4 from '../../images/aircnc/Aceitar.png';
import Img5 from '../../images/aircnc/Login.png';
import Img6 from '../../images/aircnc/Empresas.png';
import Img7 from '../../images/aircnc/data.png';
import Img8 from '../../images/aircnc/Reserva-Solicitada.png';
import Img9 from '../../images/aircnc/Aprova-o.png';

export default function aircnc() {
  return (
    <>
      <Pages
        ProjectName="AIRCNC"
        ProjectDescription="O projeto foi desenvolvido durante a semana OmniStack 09. Para sua criação foram utilizados React, React-Native e NodeJs. A aplicação consiste em uma plataforma que facilita realizar a reserva de Spots de empresas para desenvolvedores."
        ProjectTechs="Para a contrução do banco dados da aplicação foi utilizando MongoDB, já que o projeto não possui muitas relações entre tabelas e exige um banco extremamente performático. A funcionalidade que mais se destaca do projeto é a confirmação de reserva que é feita em tempo real, para isso foi utilizado o Socket.io, já que ele facilita trabalhar com WebSockets, possibilitando que ao realizar o pedido de reserva, instantaneamente a solicitação apareça para a empresa."
        RepositoryLink="https://github.com/ViniciusCrisol/AirCnC"
      />
      <ImgsProj>
        <ImagesProject Image={Img1} />
        <ImagesProject Image={Img2} />
        <ImagesProject Image={Img3} />
        <ImagesProject Image={Img4} />
      </ImgsProj>
      <ImagsProjCell>
        <ImagesProjectCel Image={Img5} />
        <ImagesProjectCel Image={Img6} />
        <ImagesProjectCel Image={Img7} />
      </ImagsProjCell>
      <ImagsProjCell>
        <ImagesProjectCel Image={Img8} />
        <ImagesProjectCel Image={Img9} />
      </ImagsProjCell>
      <Footer />
    </>
  );
}
