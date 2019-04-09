import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import path from './path';
import Home from './pages/home';

const Routes = () => (
  <Switch>
    <Route exact={true} path={path.root} component={Home} />
    <Redirect to={path.root} />;
  </Switch>
);

export default Routes;
