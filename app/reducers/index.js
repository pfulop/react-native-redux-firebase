import { combineReducers } from 'redux';
import items from './items';
import auth from './auth';

const rootReducer = combineReducers({
  items, auth
});

export default rootReducer;
