import React from 'react';
import { FaReact, FaNodeJs, FaHtml5 } from 'react-icons/fa';

import ProjectContainer from '../../components/ProjectContainer';
import TextHeader from '../../components/TextHeader';

import { Container } from './styles';

import thumbBeTheHero from '../../images/beTheHero/TelaInicial.png';
import thumbChurros from '../../images/churros/2.png';
import thumbPicpay from '../../images/picpay/Thumb.png';
import thumbAircnc from '../../images/aircnc/Inicio.png';
import thumbNubank from '../../images/nubank/Thumb.png';
import thumbAirbnb from '../../images/airbnb/2.png';
import thumbSpotify from '../../images/spotify/1.png';
import thumbPH from '../../images/productHunt/Produtos.png';
import thumbSkylab from '../../images/skylab/Inicio.png';
import thumbAcademia from '../../images/controleAcademia/NovoInstrutor.png';
import thumbLGit from '../../images/listarGit/2.png';
import thumbLGitMobile from '../../images/listarGitMobile/Thumb.png';

export default function Projects() {
  const reactIcon = <FaReact size={28} color="#42C4EC" />;
  const nodeIcon = <FaNodeJs size={28} color="#689F63" />;
  const htmlIcon = <FaHtml5 size={28} color="#FFB843" />;

  return (
    <>
      <TextHeader FunctionText="Todos projetos possuem um link para seus respectivos repositórios." />
      <Container>
        <ProjectContainer
          LinkDirection="projetos/beTheHero"
          Icon1={reactIcon}
          Icon2={nodeIcon}
          Image={thumbBeTheHero}
          bgColor="#A11D3C"
          Title="Be The Hero"
          Description="Projeto desenvolvido durante a semana OmniStack 11."
        />

        <ProjectContainer
          LinkDirection="projetos/churros"
          Icon1={htmlIcon}
          Image={thumbChurros}
          bgColor="#8C273A"
          Title="Site Churros"
          Description="Projeto desenvolvido para trabalho de faculdade."
        />

        <ProjectContainer
          LinkDirection="projetos/picpay"
          Icon1={reactIcon}
          Image={thumbPicpay}
          bgColor="#2ae871"
          Title="Clone interface PicPay"
          Description="Projeto desenvolvido para estudar React-Native."
        />

        <ProjectContainer
          LinkDirection="projetos/aircnc"
          Icon1={reactIcon}
          Icon2={nodeIcon}
          Image={thumbAircnc}
          bgColor="#F05A5B"
          Title="AIRCNC"
          Description="Projeto desenvolvido durante a semana OmniStack 09."
        />

        <ProjectContainer
          LinkDirection="projetos/nubank"
          Icon1={reactIcon}
          Image={thumbNubank}
          bgColor="#c248f0"
          Title="Clone interface NUBANK"
          Description="Projeto desenvolvido para estudar React-Native."
        />

        <ProjectContainer
          LinkDirection="projetos/airbnb"
          Icon1={htmlIcon}
          Image={thumbAirbnb}
          bgColor="#F05A5B"
          Title="Clone Airbnb"
          Description="Projeto desenvolvido para estudar Html."
        />

        <ProjectContainer
          LinkDirection="projetos/spotify"
          Icon1={reactIcon}
          Image={thumbSpotify}
          bgColor="#2ae871"
          Title="Clone Spotify"
          Description="Projeto desenvolvido para estudar ReactJs."
        />

        <ProjectContainer
          LinkDirection="projetos/productHunt"
          Icon1={reactIcon}
          Icon2={nodeIcon}
          Image={thumbPH}
          bgColor="#FF674C"
          Title="Clone Product Hunt"
          Description="Projeto desenvolvido durante o curso básico RocketSeat."
        />

        <ProjectContainer
          LinkDirection="projetos/skylab"
          Icon1={reactIcon}
          Image={thumbSkylab}
          bgColor="#6C4FBB"
          Title="Clone SKYLAB"
          Description="Projeto desenvolvido para estudar ReactJs."
        />

        <ProjectContainer
          LinkDirection="projetos/academia"
          Icon1={htmlIcon}
          Image={thumbAcademia}
          bgColor="#6C4FBB"
          Title="Controle Academia"
          Description="Projeto desenvolvido durante o curso launchBase."
        />

        <ProjectContainer
          LinkDirection="projetos/listarRepositorios"
          Icon1={reactIcon}
          Image={thumbLGit}
          bgColor="#6C4FBB"
          Title="Listar Repositórios"
          Description="Projeto desenvolvido durante o curso GoStack."
        />

        <ProjectContainer
          LinkDirection="projetos/listarRepositoriosMobile"
          Icon1={reactIcon}
          Image={thumbLGitMobile}
          bgColor="#FF6447"
          Title="Repositórios Favoritos"
          Description="Projeto desenvolvido durante o curso GoStack."
        />
      </Container>
    </>
  );
}
