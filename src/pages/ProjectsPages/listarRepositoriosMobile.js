import React from 'react';

import { ImagsProjCell } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProjectCel from '../../components/ImagesProjectCel/index';

import Img1 from '../../images/listarGitMobile/1.png';
import Img2 from '../../images/listarGitMobile/2.png';

export default function listarGitMobile() {
  return (
    <>
      <Pages
        ProjectName="Respositórios com estrela"
        ProjectDescription="O aplicativo foi desenvolvido durante o módulo 06 do curso GoStack da RocketSeat, nele o usuário adiciona perfis do github e visualisa os repositórios marcados com estrela."
        disableDesc
        RepositoryLink="https://github.com/ViniciusCrisol/ListarRepositoriosMobile"
      />
      <ImagsProjCell>
        <ImagesProjectCel Image={Img1} />
        <ImagesProjectCel Image={Img2} />
      </ImagsProjCell>
      <Footer />
    </>
  );
}
