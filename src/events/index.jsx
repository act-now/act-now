import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NewEvent from './NewEvent';
import EventDetails from './EventDetails';
import EditEvent from './EditEvent';

export default (
  <Route path="events">
    <Route path="new" component={NewEvent} />
    <Route path=":id">
      <IndexRoute component={EventDetails} />
      <Route path="edit" component={EditEvent} />
    </Route>
  </Route>
);
