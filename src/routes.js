import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import pageNotFound from './pages/pageNotFound';

import beTheHero from './pages/ProjectsPages/beTheHero';
import aircnc from './pages/ProjectsPages/aircnc';
import skylab from './pages/ProjectsPages/skylab';
import nubank from './pages/ProjectsPages/nubank';
import academia from './pages/ProjectsPages/academia';
import airbnb from './pages/ProjectsPages/airbnb';
import productHunt from './pages/ProjectsPages/productHunt';
import listarGit from './pages/ProjectsPages/listarRepositorios';
import listarGitM from './pages/ProjectsPages/listarRepositoriosMobile';
import spotify from './pages/ProjectsPages/spotify';
import churros from './pages/ProjectsPages/churros';
import picpay from './pages/ProjectsPages/picpay';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/projetos" exact component={Projects} />
      <Route path="/contato" exact component={Contact} />

      <Route path="/projetos/beTheHero" exact component={beTheHero} />
      <Route path="/projetos/aircnc" exact component={aircnc} />
      <Route path="/projetos/skylab" exact component={skylab} />
      <Route path="/projetos/nubank" exact component={nubank} />
      <Route path="/projetos/academia" exact component={academia} />
      <Route path="/projetos/airbnb" exact component={airbnb} />
      <Route path="/projetos/productHunt" exact component={productHunt} />
      <Route path="/projetos/listarGit" exact component={listarGit} />
      <Route path="/projetos/listarGitMobile" exact component={listarGitM} />
      <Route path="/projetos/spotify" exact component={spotify} />
      <Route path="/projetos/churros" exact component={churros} />
      <Route path="/projetos/picpay" exact component={picpay} />

      <Route path="/" component={pageNotFound} />
    </Switch>
  );
}
