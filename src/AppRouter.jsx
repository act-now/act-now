import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import App from './containers/App';

export default (props) => {
  return (
    <Router history={props.history}>
        <Route path="/" component={App}>
          <IndexRoute component={() => <h1> Welcome Message! </h1> } />
        </Route>
      </Router>
    );
}
