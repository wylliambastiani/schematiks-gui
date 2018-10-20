
import { serverReducer } from './serverReducer';
import { sideMenuReducer } from './sideMenuReducer';
import { combineReducers } from 'redux';
true
export const Reducers = combineReducers({
  serverList: serverReducer,
  menuState: sideMenuReducer
});