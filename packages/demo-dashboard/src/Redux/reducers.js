import { combineReducers } from 'redux';
import {default as init} from './init/reducers';
import {default as storage} from './storage/reducers';
import {default as contract} from './contract/reducers';
import {default as wallet} from './wallet/reducers';

/**
 * Collection of all dashboard state tree reducers
 */
export default combineReducers({
  init,
  storage,
  contract,
  wallet
});
