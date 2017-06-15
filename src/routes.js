import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Login from './components/Login';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Login} >
      <IndexRoute component={App} />
      <Route path="/user/:accessToken/:refreshToken" component={User} />
      <Route path="/error/:errorMsg" component={Error} />
    </Route>
  </Router>
);

export default Routes;