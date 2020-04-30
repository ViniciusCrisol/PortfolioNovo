import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import BTH from './pages/ProjectsPages/beTheHero';
import AIRCNC from './pages/ProjectsPages/aircnc';
import SKYLAB from './pages/ProjectsPages/skylab';
import NUBANK from './pages/ProjectsPages/nubank';
import ACADEMIA from './pages/ProjectsPages/academia';
import AIRBNB from './pages/ProjectsPages/airbnb';
import PH from './pages/ProjectsPages/productHunt';
import TEMPLATEAPP from './pages/ProjectsPages/templateApp';
import LRGIT from './pages/ProjectsPages/listarRepositorios';
import LRGITMOBILE from './pages/ProjectsPages/listarRepositoriosMobile';
import SPOTIFY from './pages/ProjectsPages/spotify';
import CHURROS from './pages/ProjectsPages/churros';
import PICPAY from './pages/ProjectsPages/picpay';

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
      <Route path="/projetos/SPOTIFY" exact component={SPOTIFY} />
      <Route path="/projetos/CHURROS" exact component={CHURROS} />
      <Route path="/projetos/PICPAY" exact component={PICPAY} />
    </Switch>
  );
}
