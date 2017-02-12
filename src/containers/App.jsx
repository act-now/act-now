import React from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css'

export default props => (
  <div>
    <AppBar title="Act Now!" />
    <div className="app-container">
      {props.children}
    </div>
  </div>
);
