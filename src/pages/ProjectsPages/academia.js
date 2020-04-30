import React from 'react';

import { ImgsProj } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProject from '../../components/ImagesProject/index';

import Img1 from '../../images/controleAcademia/Instrutores.png';
import Img2 from '../../images/controleAcademia/VerInstrutor.png';
import Img3 from '../../images/controleAcademia/EditarInstrutor.png';
import Img4 from '../../images/controleAcademia/NovoInstrutor.png';
import Img5 from '../../images/controleAcademia/NovoAluno.png';
import Img6 from '../../images/controleAcademia/VerAluno.png';

export default function ACADEMIA() {
  return (
    <>
      <Pages
        ProjectName="Controle Academia"
        ProjectDescription="Projeto foi construido durante o curso LaunchBase. A aplicação realiza um controle de uma academia, cadastrando novos intrutores e clientes, possibilitando fazer a edição e remoção dos mesmos."
        ProjectTechs="Para seu desenvolvimento foi utilizado um banco de dados local, salvando os arquivos em .JSON na raiz do projeto. O sistema de componets foi feito utilizando o Nunjucks, que sem dúvidas é amelhor opção para isso no desenvolvimento HTML."
        RepositoryLink="https://github.com/ViniciusCrisol/ControleAcademia"
      />
      <ImgsProj>
        <ImagesProject Image={Img1} />
        <ImagesProject Image={Img2} />
        <ImagesProject Image={Img3} />
        <ImagesProject Image={Img4} />
        <ImagesProject Image={Img5} />
        <ImagesProject Image={Img6} />
      </ImgsProj>
      <Footer />
    </>
  );
}
