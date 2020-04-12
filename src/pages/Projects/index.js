import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';

import PorjectContainer from '../../components/ProjectContainer';
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

export default function Projects() {
  return (
    <>
      <TextHeader FunctionText="Todos projetos possuem um link para seus respectivos repositórios." />
      <Container>
        <PorjectContainer
          LinkDirection="/"
          Icon1={<FaReact size={26} color="#42C4EC" />}
          Icon2={<FaNodeJs size={26} color="#689F63" />}
          image={ThumbBTH}
          Title="Be The Hero"
          Description="Projeto desenvolvido durante a semana OmniStack 11."
        />
        <PorjectContainer
          LinkDirection="/"
          Icon1={<FaReact size={26} color="#42C4EC" />}
          Icon2={<FaNodeJs size={26} color="#689F63" />}
          image={ThumbAiRCNC}
          Title="AIRCNC"
          Description="Projeto desenvolvido durante a semana OmniStack 09."
        />
        <PorjectContainer
          LinkDirection="/"
          Icon1={<FaReact size={26} color="#42C4EC" />}
          image={ThumbSKLB}
          Title="Clone SKYLAB"
          Description="Projeto desenvolvido para estuar ReactJs."
        />
      </Container>
    </>
  );
}
