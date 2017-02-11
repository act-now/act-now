import React from 'react';
import AppBar from 'material-ui/AppBar';

export default props => (
  <div>
    <AppBar title="Act Now!" />
    {props.children}
  </div>
);
