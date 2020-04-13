import React from 'react';

import { ImgsProj, ImagsProjCell } from './styles';

import Pages from '../../../components/Pages/index';
import Footer from '../../../components/Footer/index';
import ImagesProject from '../../../components/ImagesProject/index';
import ImagesProjectCel from '../../../components/ImagesProjectCel/index';

import Img1 from '../../../assets/imagesInPages/BTH/CadastrarCaso.png';
import Img2 from '../../../assets/imagesInPages/BTH/Cadastro.png';
import Img3 from '../../../assets/imagesInPages/BTH/CasoCadastrado.png';
import Img4 from '../../../assets/imagesInPages/BTH/TelaInicial.png';
import Img5 from '../../../assets/imagesInPages/BTH/CasoCel.png';
import Img6 from '../../../assets/imagesInPages/BTH/TelaInicialCel.png';

export default function BTH() {
  return (
    <>
      <Pages
        ProjectName="Be The Hero"
        ProjectDescription="O projeto foi desenvolvido durante a semana OmniStack 11. Para sua criação foram utilizados React, React-Native e NodeJs. A aplicação consiste em uma plataforma que cadastra ONG's e lista casos que necessitam de ajuda, possibilitando que os usuários entrem em contato para axiliarem estas causas."
        RepositoryLink="https://github.com/ViniciusCrisol/BeTheHero"
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
      </ImagsProjCell>
      <Footer />
    </>
  );
}
