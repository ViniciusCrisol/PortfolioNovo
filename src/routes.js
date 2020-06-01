import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import pageNotFound from './pages/pageNotFound';

import beTheHero from './pages/ProjectsPages/beTheHero';
import aircnc from './pages/ProjectsPages/aircnc';
import swimsuites from './pages/ProjectsPages/swimsuites';
import drinks from './pages/ProjectsPages/drinks';
import pipefine from './pages/ProjectsPages/pipefine';
import ideas from './pages/ProjectsPages/ideas';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/projetos" exact component={Projects} />
      <Route path="/contato" exact component={Contact} />

      <Route path="/projetos/beTheHero" exact component={beTheHero} />
      <Route path="/projetos/aircnc" exact component={aircnc} />
      <Route path="/projetos/swimsuites" exact component={swimsuites} />
      <Route path="/projetos/drinks" exact component={drinks} />
      <Route path="/projetos/pipefine" exact component={pipefine} />
      <Route path="/projetos/ideas" exact component={ideas} />

      <Route path="/" component={pageNotFound} />
    </Switch>
  );
}
