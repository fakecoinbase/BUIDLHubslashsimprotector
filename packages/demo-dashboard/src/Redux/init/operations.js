import {Creators} from './actions';

import {default as storageOps} from 'Redux/storage/operations';
import {default as conOps} from 'Redux/contract/operations';

const initStorage = props => {
  return props.dispatch(storageOps.init())
      .then(()=>props)
}

const initContract = props => {
  return props.dispatch(conOps.init()).then(()=>props);
}

const start = () => (dispatch,getState) => {
  let state = getState();
  if(state.init.initComplete) {
    return;
  }
 
  return dispatch(_doStart());
}

const _doStart = () => (dispatch,getState) => {
  dispatch(Creators.initStart());
  let props = {
    dispatch,
    getState
  }
  return initStorage(props)
        .then(initContract)
        .then(()=>{
          dispatch(Creators.initSuccess());
        })
        .catch(e=>{
          dispatch(Creators.failure(e));
        });
}

const reset = () => dispatch => {
  dispatch(Creators.reset());
}
 
export default {
  start,
  reset
}
