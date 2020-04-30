import React from 'react';

import { ImgsProj } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProject from '../../components/ImagesProject/index';

import Img1 from '../../images/listarGit/1.png';
import Img2 from '../../images/listarGit/2.png';

export default function LRGIT() {
  return (
    <>
      <Pages
        ProjectName="Repositórios do GitHub"
        ProjectDescription="A aplicação busca repositórios do github conforme o nome inserido e lista as buscas. Possibilitando que o usuário acesse o repositório e tenha mais informações."
        ProjectTechs="O site foi desenvolvido em react e conta com a API do github para pesquisa de repositórios."
        RepositoryLink="https://github.com/ViniciusCrisol/ListarRepositorios"
      />
      <ImgsProj>
        <ImagesProject Image={Img1} />
        <ImagesProject Image={Img2} />
      </ImgsProj>
      <Footer />
    </>
  );
}
