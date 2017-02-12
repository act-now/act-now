import React from 'react';
import {
  Router,
  Route,
  IndexRedirect,
} from 'react-router';
import App from './containers/App';
import DemonstrationRoutes from './demonstrations';

const AppRouter = props => (
  <Router history={props.history}>
    <Route path="/" component={App}>
      <IndexRedirect to="/demonstrations/new" />
      {DemonstrationRoutes}
    </Route>
  </Router>
);

AppRouter.propTypes = {
  history: React.PropTypes.object.isRequired,
};

export default AppRouter;
