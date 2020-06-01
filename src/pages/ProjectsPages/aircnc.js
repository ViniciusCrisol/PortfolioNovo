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
        projectName="AIRCNC"
        projectDescription="O projeto foi desenvolvido durante a semana OmniStack 09. Para sua criação foram utilizados React, React-Native e NodeJs. A aplicação consiste em uma plataforma que facilita realizar a reserva de Spots de empresas para desenvolvedores."
        projectTechs="Para a contrução do banco dados da aplicação foi utilizando MongoDB, já que o projeto não possui muitas relações entre tabelas e exige um banco extremamente performático. A funcionalidade que mais se destaca do projeto é a confirmação de reserva que é feita em tempo real, para isso foi utilizado o Socket.io, já que ele facilita trabalhar com WebSockets, possibilitando que ao realizar o pedido de reserva, instantaneamente a solicitação apareça para a empresa."
        repositoryLink="https://github.com/ViniciusCrisol/AirCnC"
      />
      <ImgsProj>
        <ImagesProject image={Img1} />
        <ImagesProject image={Img2} />
        <ImagesProject image={Img3} />
        <ImagesProject image={Img4} />
      </ImgsProj>
      <ImagsProjCell>
        <ImagesProjectCel image={Img5} />
        <ImagesProjectCel image={Img6} />
        <ImagesProjectCel image={Img7} />
      </ImagsProjCell>
      <ImagsProjCell>
        <ImagesProjectCel image={Img8} />
        <ImagesProjectCel image={Img9} />
      </ImagsProjCell>
      <Footer />
    </>
  );
}
