import React from 'react';

import { ImgsProj, ImgCel } from './styles';

import Pages from '../../../components/Pages/index';
import Footer from '../../../components/Footer/index';

import Img1 from '../../../assets/imagesInPages/BTH/CadastrarCaso.png';
import Img2 from '../../../assets/imagesInPages/BTH/Cadastro.png';
import Img3 from '../../../assets/imagesInPages/BTH/CasoCadastrado.png';
import Img4 from '../../../assets/imagesInPages/BTH/CasoCel.png';
import Img5 from '../../../assets/imagesInPages/BTH/TelaInicial.png';
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
        <img src={Img1} alt=" " />
        <img src={Img2} alt=" " />
        <img src={Img3} alt=" " />
        <img src={Img5} alt=" " />
        <ImgCel>
          <img src={Img4} alt=" " />
          <img src={Img6} alt=" " />
        </ImgCel>
      </ImgsProj>
      <Footer />
    </>
  );
}
