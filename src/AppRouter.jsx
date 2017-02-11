import React from 'react';
import { Router, Route } from 'react-router';
import App from './containers/App';

export default props => (
  <Router history={props.history}>
    <Route path="/" component={App} />
  </Router>
);
