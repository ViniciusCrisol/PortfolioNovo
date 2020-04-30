import React from 'react';
import { FaReact, FaNodeJs, FaHtml5 } from 'react-icons/fa';

import ProjectContainer from '../../components/ProjectContainer';
import TextHeader from '../../components/TextHeader';

import { Container } from './styles';

import ThumbBTH from '../../assets/images/ThumbBTH.png';
import ThumbAiRCNC from '../../assets/images/ThumbAIRCNC.png';
import ThumbNUBANK from '../../assets/images/ThumbNUBANK.png';
import ThumbACAD from '../../assets/images/ThumbACAD.png';
import ThumbAIRBNB from '../../assets/images/ThumbAIRBNB.png';
import ThumbLR from '../../assets/images/ThumbLR.png';
import ThumbPH from '../../assets/images/ThumbPH.png';
import ThumbTEMPLATE from '../../assets/images/ThumbTEMPLATE.png';
import ThumbSKLB from '../../assets/images/ThumbSKLB.png';
import ThumbLRGITMOBILE from '../../assets/images/ThumbLRGITMOBILE.png';
import ThumbSPOTFY from '../../assets/images/ThumbSPOTFY.png';
import ThumbCHURROS from '../../assets/images/ThumbCHURROS.png';

export default function Projects() {
  const reactIcon = <FaReact size={26} color="#42C4EC" />;
  const nodeIcon = <FaNodeJs size={26} color="#689F63" />;
  const htmlIcon = <FaHtml5 size={26} color="#FFB843" />;

  return (
    <>
      <TextHeader FunctionText="Todos projetos possuem um link para seus respectivos repositórios." />
      <Container>
        <ProjectContainer
          LinkDirection="projetos/BTH"
          Icon1={reactIcon}
          Icon2={nodeIcon}
          Image={ThumbBTH}
          Title="Be The Hero"
          Description="Projeto desenvolvido durante a semana OmniStack 11."
        />

        <ProjectContainer
          LinkDirection="projetos/CHURROS"
          Icon1={htmlIcon}
          Image={ThumbCHURROS}
          Title="Site Churros"
          Description="Projeto desenvolvido para trabalho de faculdade."
        />

        <ProjectContainer
          LinkDirection="projetos/AIRCNC"
          Icon1={reactIcon}
          Icon2={nodeIcon}
          Image={ThumbAiRCNC}
          Title="AIRCNC"
          Description="Projeto desenvolvido durante a semana OmniStack 09."
        />

        <ProjectContainer
          LinkDirection="projetos/NUBANK"
          Icon1={reactIcon}
          Image={ThumbNUBANK}
          Title="Clone interface NUBANK"
          Description="Projeto desenvolvido para estuar React-Native."
        />

        <ProjectContainer
          LinkDirection="projetos/AIRBNB"
          Icon1={htmlIcon}
          Image={ThumbAIRBNB}
          Title="Clone Airbnb"
          Description="Projeto desenvolvido para estudar Html."
        />

        <ProjectContainer
          LinkDirection="projetos/SPOTIFY"
          Icon1={reactIcon}
          Image={ThumbSPOTFY}
          Title="Clone Spotfy"
          Description="Projeto desenvolvido para estudar ReactJs."
        />

        <ProjectContainer
          LinkDirection="projetos/ACADEMIA"
          Icon1={htmlIcon}
          Image={ThumbACAD}
          Title="Controle Academia"
          Description="Projeto desenvolvido durante o curso launchBase."
        />

        <ProjectContainer
          LinkDirection="projetos/SKYLAB"
          Icon1={reactIcon}
          Image={ThumbSKLB}
          Title="Clone SKYLAB"
          Description="Projeto desenvolvido para estudar ReactJs."
        />

        <ProjectContainer
          LinkDirection="projetos/TEMPLATEAPP"
          Icon1={reactIcon}
          Image={ThumbTEMPLATE}
          Title="App Template"
          Description="Projeto desenvolvido para estudar React-Native."
        />

        <ProjectContainer
          LinkDirection="projetos/PH"
          Icon1={reactIcon}
          Icon2={nodeIcon}
          Image={ThumbPH}
          Title="Clone Product Hunt"
          Description="Projeto desenvolvido durante o curso básico RocketSeat."
        />

        <ProjectContainer
          LinkDirection="projetos/LRGIT"
          Icon1={reactIcon}
          Image={ThumbLR}
          Title="Listar Repositórios"
          Description="Projeto desenvolvido durante o curso GoStack."
        />

        <ProjectContainer
          LinkDirection="projetos/LRGITMOBILE"
          Icon1={reactIcon}
          Image={ThumbLRGITMOBILE}
          Title="Repositórios Favoritos"
          Description="Projeto desenvolvido durante o curso GoStack."
        />
      </Container>
    </>
  );
}
