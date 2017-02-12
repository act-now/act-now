import React from 'react';
import { Route } from 'react-router';
import NewDemonstration from './NewDemonstration';
import DemonstrationDetails from './DemonstrationDetails';

export default (
  <Route path="Demonstrations">
    <Route path="new" component={NewDemonstration} />
    <Route path=":id" component={DemonstrationDetails} />
  </Route>
);
