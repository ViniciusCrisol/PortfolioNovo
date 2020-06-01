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
      <TextHeader
        functionText="Esses são meus projetos favoritos, acesse meu GitHub e confira todos que possuo ! "
        link="https://github.com/ViniciusCrisol"
      />
      <Container>
        <ProjectContainer
          linkDirection="projetos/aircnc"
          icon1={reactIcon}
          icon2={nodeIcon}
          bgColor="#F05A5B"
          title="AIRCNC"
          description="Projeto desenvolvido durante a semana OmniStack 09."
        />

        <ProjectContainer
          linkDirection="projetos/pipefine"
          icon1={reactIcon}
          bgColor="#3CBCAC"
          title="Pipefine"
          description="Projeto desenvolvido para estudar ReactJs e Drag n' Drop."
        />

        <ProjectContainer
          linkDirection="projetos/beTheHero"
          icon1={reactIcon}
          icon2={nodeIcon}
          bgColor="#A11D3C"
          title="Be The Hero"
          description="Projeto desenvolvido durante a semana OmniStack 11."
        />

        <ProjectContainer
          linkDirection="projetos/ideas"
          icon1={htmlIcon}
          icon2={nodeIcon}
          bgColor="#D1774F"
          title="Ideas"
          description="Projeto desenvolvido para estudar ReactJs e Node."
        />

        <ProjectContainer
          linkDirection="projetos/drinks"
          icon1={reactIcon}
          bgColor="#E87F8A"
          title="Drinks"
          description="Projeto desenvolvido para estudar ReactJs."
        />

        <ProjectContainer
          linkDirection="projetos/swimsuites"
          icon1={reactIcon}
          bgColor="#FFBA53"
          title="SWIMSUITES"
          description="Projeto desenvolvido para estudar ReactJs."
        />
      </Container>
    </>
  );
}
