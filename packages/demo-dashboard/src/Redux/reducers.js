import { combineReducers } from 'redux';
import {default as init} from './init/reducers';
import {default as storage} from './storage/reducers';

/**
 * Collection of all dashboard state tree reducers
 */
export default combineReducers({
  init,
  storage
});
