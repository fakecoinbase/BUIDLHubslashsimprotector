import {Types} from './actions';
import {createReducer} from 'reduxsauce';

const INIT = {
    loading: false,
    instance: null,
    provider: null
}

const start = (state=INIT) => {
    return {
        ...state,
        loading: true
    }
}

const success = (state=INIT, action) => {
    return {
        ...state,
        instance: action.contract.contract,
        provider: action.contract.provider,
        loading: false
    }
}

const working = (state=INIT, action) => {
    return {
        ...state,
        loading: action.busy
    }
}

const HANDLERS = {
    [Types.INIT_START]: start,
    [Types.INIT_SUCCESS]: success,
    [Types.WORKING]: working
}
  
  export default createReducer(INIT, HANDLERS);