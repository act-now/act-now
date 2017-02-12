import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NewEvent from './NewEvent';
import EventView from './EventView';
import EditEvent from './EditEvent';

export default (
  <Route path="events">
    <Route path="new" component={NewEvent} />
    <Route path=":id">
      <IndexRoute component={EventView} />
      <Route path="edit" component={EditEvent} />
    </Route>
  </Route>
);
