import React from 'react';
import {
  Router,
  Route,
  IndexRedirect,
} from 'react-router';
import App from './containers/App';
import EventRoutes from './events';

const AppRouter = props => (
  <Router history={props.history}>
    <Route path="/" component={App}>
      <IndexRedirect to="/events/new" />
      {EventRoutes}
    </Route>
  </Router>
);

AppRouter.propTypes = {
  history: React.PropTypes.object.isRequired,
};

export default AppRouter;
