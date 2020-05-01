import React from 'react';

import { ImgsProj } from '../../styles/stylesPage';

import Pages from '../../components/Pages/index';
import Footer from '../../components/Footer/index';
import ImagesProject from '../../components/ImagesProject/index';

import Img1 from '../../images/productHunt/Produtos.png';
import Img2 from '../../images/productHunt/Inserir-Dados.png';
import Img3 from '../../images/productHunt/Produto.png';

export default function productHunt() {
  return (
    <>
      <Pages
        ProjectName="Clone Product Hunt"
        ProjectDescription="Clone do site ProductHunt, idealizado no curso básico RocketSeat. Desenvolvido com Node e React, a aplicação possui um sistema em que cadastra produtos no banco de dados e automaticamente exibe os dados no front-end."
        ProjectTechs="A construção do banco de dados foi feita com o MongoDB, já que a aplicação não necessita de tabelas relacionadas e exige uma performance alta do back-end."
        RepositoryLink="https://github.com/ViniciusCrisol/ProductHuntClone"
      />
      <ImgsProj>
        <ImagesProject Image={Img1} />
        <ImagesProject Image={Img2} />
        <ImagesProject Image={Img3} />
      </ImgsProj>
      <Footer />
    </>
  );
}
