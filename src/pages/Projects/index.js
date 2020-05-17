import React from 'react';
import { FaReact, FaNodeJs, FaHtml5 } from 'react-icons/fa';

import ProjectContainer from '../../components/ProjectContainer';
import TextHeader from '../../components/TextHeader';

import { Container } from './styles';

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
          bgColor="#A11D3C"
          Title="Be The Hero"
          Description="Projeto desenvolvido durante a semana OmniStack 11."
        />
        <ProjectContainer
          LinkDirection="projetos/swimsuites"
          Icon1={reactIcon}
          bgColor="#FFBA53"
          Title="SWIMSUITES"
          Description="Projeto desenvolvido para estudar ReactJs."
        />

        <ProjectContainer
          LinkDirection="projetos/churros"
          Icon1={htmlIcon}
          bgColor="#8C273A"
          Title="Site Churros"
          Description="Projeto desenvolvido para trabalho de faculdade."
        />

        <ProjectContainer
          LinkDirection="projetos/picpay"
          Icon1={reactIcon}
          bgColor="#2ae871"
          Title="Clone interface PicPay"
          Description="Projeto desenvolvido para estudar React-Native."
        />

        <ProjectContainer
          LinkDirection="projetos/aircnc"
          Icon1={reactIcon}
          Icon2={nodeIcon}
          bgColor="#F05A5B"
          Title="AIRCNC"
          Description="Projeto desenvolvido durante a semana OmniStack 09."
        />

        <ProjectContainer
          LinkDirection="projetos/nubank"
          Icon1={reactIcon}
          bgColor="#c248f0"
          Title="Clone interface NUBANK"
          Description="Projeto desenvolvido para estudar React-Native."
        />

        <ProjectContainer
          LinkDirection="projetos/airbnb"
          Icon1={htmlIcon}
          bgColor="#F05A5B"
          Title="Clone interface Airbnb"
          Description="Projeto desenvolvido para estudar Html."
        />

        <ProjectContainer
          LinkDirection="projetos/spotify"
          Icon1={reactIcon}
          bgColor="#2ae871"
          Title="Clone interface Spotify"
          Description="Projeto desenvolvido para estudar ReactJs."
        />

        <ProjectContainer
          LinkDirection="projetos/productHunt"
          Icon1={reactIcon}
          Icon2={nodeIcon}
          bgColor="#FF674C"
          Title="Clone Product Hunt"
          Description="Projeto desenvolvido durante o curso básico RocketSeat."
        />

        <ProjectContainer
          LinkDirection="projetos/skylab"
          Icon1={reactIcon}
          bgColor="#6C4FBB"
          Title="Clone interface SKYLAB"
          Description="Projeto desenvolvido para estudar ReactJs."
        />

        <ProjectContainer
          LinkDirection="projetos/academia"
          Icon1={htmlIcon}
          bgColor="#6C4FBB"
          Title="Controle Academia"
          Description="Projeto desenvolvido durante o curso launchBase."
        />

        <ProjectContainer
          LinkDirection="projetos/listarGit"
          Icon1={reactIcon}
          bgColor="#6C4FBB"
          Title="Listar Repositórios"
          Description="Projeto desenvolvido durante o curso GoStack."
        />

        <ProjectContainer
          LinkDirection="projetos/listarGitMobile"
          Icon1={reactIcon}
          bgColor="#FF6447"
          Title="Repositórios Favoritos"
          Description="Projeto desenvolvido durante o curso GoStack."
        />
      </Container>
    </>
  );
}
