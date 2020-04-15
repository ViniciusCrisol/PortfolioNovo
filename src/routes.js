import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import BTH from './pages/ProjectsPages/BTH';
import AIRCNC from './pages/ProjectsPages/AIRCNC';
import SKYLAB from './pages/ProjectsPages/SKYLAB';
import NUBANK from './pages/ProjectsPages/NUBANK';
import ACADEMIA from './pages/ProjectsPages/ACADEMIA';
import AIRBNB from './pages/ProjectsPages/AIRBNB';
import PH from './pages/ProjectsPages/PH';
import TEMPLATEAPP from './pages/ProjectsPages/TEMPLATEAPP';
import LRGIT from './pages/ProjectsPages/LRGIT';
import LRGITMOBILE from './pages/ProjectsPages/LRGITMOBILE';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/projetos" exact component={Projects} />
      <Route path="/contato" exact component={Contact} />

      <Route path="/projetos/BTH" exact component={BTH} />
      <Route path="/projetos/AIRCNC" exact component={AIRCNC} />
      <Route path="/projetos/SKYLAB" exact component={SKYLAB} />
      <Route path="/projetos/NUBANK" exact component={NUBANK} />
      <Route path="/projetos/ACADEMIA" exact component={ACADEMIA} />
      <Route path="/projetos/AIRBNB" exact component={AIRBNB} />
      <Route path="/projetos/PH" exact component={PH} />
      <Route path="/projetos/TEMPLATEAPP" exact component={TEMPLATEAPP} />
      <Route path="/projetos/LRGIT" exact component={LRGIT} />
      <Route path="/projetos/LRGITMOBILE" exact component={LRGITMOBILE} />
    </Switch>
  );
}
