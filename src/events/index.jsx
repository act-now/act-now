import React from 'react';
import { Route } from 'react-router';
import NewEvent from './NewEvent';
import EventDetails from './EventDetails.jsx';

export default (
  <Route path="events">
    <Route path="new" component={NewEvent} />
    <Route path=":id" component={EventDetails} />
  </Route>
)
