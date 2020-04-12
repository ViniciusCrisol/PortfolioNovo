import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';

import { Container } from './styles';

import ThumbBTH from '../../assets/images/ThumbBTH.png';

import PorjectContainer from '../../components/PorjectContainer';

export default function Projects() {
  return (
    <>
      <Container>
        <PorjectContainer
          LinkDirection="/"
          Icon1={<FaReact size={28} color="#42C4EC" />}
          Icon2={<FaNodeJs size={28} color="#689F63" />}
          image={ThumbBTH}
          Title="Be The Hero"
          Description="Projeto desenvolvido durante a semana OmniStack 11."
        />
        <PorjectContainer
          LinkDirection="/"
          Icon1={<FaReact size={28} color="#42C4EC" />}
          Icon2={<FaNodeJs size={28} color="#689F63" />}
          image={ThumbBTH}
          Title="Be The Hero"
          Description="Projeto desenvolvido durante a semana OmniStack 11."
        />
      </Container>
    </>
  );
}
