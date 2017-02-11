import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <AppRouter hisotry={history} />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
