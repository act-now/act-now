import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import demonstrations from '../demonstrations/redux';

export default combineReducers({
  routing,
  demonstrations,
});
