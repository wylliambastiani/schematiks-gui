
import { serverReducer } from './serverReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  serverList: serverReducer
});