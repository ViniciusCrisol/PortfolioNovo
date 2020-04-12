import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import BTH from './pages/ProjectsPages/BTH';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/projetos" exact component={Projects} />
      <Route path="/contato" exact component={Contact} />

      <Route path="/projetos/BTH" exact component={BTH} />
    </Switch>
  );
}
