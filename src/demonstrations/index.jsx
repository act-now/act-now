import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NewDemonstration from './NewDemonstration';
import DemonstrationView from './DemonstrationView';
import EditDemonstration from './EditDemonstration';

export default (
  <Route path="demonstrations">
    <Route path="new" component={NewDemonstration} />
    <Route path=":id">
      <IndexRoute component={DemonstrationView} />
      <Route path="edit" component={EditDemonstration} />
    </Route>
  </Route>
);
