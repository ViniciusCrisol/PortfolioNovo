import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';
import { Container } from './styles';

export default function Header() {
  return (
    <>
      <div className="diagonal-hero-bg">
        <div className="stars">
          <div className="small" />
          <div className="medium" />
          <div className="big" />
        </div>
      </div>
      <Container>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/projetos">
          Projetos
        </NavLink>
        <NavLink exact to="/contato">
          Contato
        </NavLink>
      </Container>
    </>
  );
}
