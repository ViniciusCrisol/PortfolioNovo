import React from 'react';

import { ImgsProj, ImagsProjCell } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProject from '../../components/ImagesProject/index';
import ImagesProjectCel from '../../components/ImagesProjectCel/index';

import Img1 from '../../images/beTheHero/CadastrarCaso.png';
import Img2 from '../../images/beTheHero/Cadastro.png';
import Img3 from '../../images/beTheHero/CasoCadastrado.png';
import Img4 from '../../images/beTheHero/TelaInicial.png';
import Img5 from '../../images/beTheHero/CasoCel.png';
import Img6 from '../../images/beTheHero/TelaInicialCel.png';

export default function beTheHero() {
  return (
    <>
      <Pages
        projectName="Be The Hero"
        projectDescription="O projeto foi desenvolvido durante a semana OmniStack 11. Para sua criação foram utilizados React, React-Native e NodeJs. A aplicação consiste em uma plataforma que cadastra ONG's e lista casos que necessitam de ajuda, possibilitando que os usuários entrem em contato para axiliarem estas causas."
        projectTechs="O aplicativo mobile, desenvolvido com React-Native e ExpoCli possui diversas funcionalidades interessantes, destancando-se entre elas a paginação infinita na tela de casos e o Deep Linking para a abertura do WhatsApp e E-mail com uma mensagem personalizada. O banco de dados foi construido em SqLite, já que fornece uma ótima estrutura para trabalhar com tabelas relacionadas, facilitando o processo na de construção do back-end."
        repositoryLink="https://github.com/ViniciusCrisol/BeTheHero"
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
      </ImagsProjCell>
      <Footer />
    </>
  );
}
