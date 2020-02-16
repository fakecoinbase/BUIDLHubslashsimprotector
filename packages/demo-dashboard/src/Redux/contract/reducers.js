import {Types} from './actions';
import {createReducer} from 'reduxsauce';

const INIT = {
    loading: false,
    instance: null,
    provider: null,
    receipt: null,
    recentEvents: [],
    abi: []
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
        abi: action.contract.abi,
        recentEvents: action.contract.events,
        loading: false
    }
}

const working = (state=INIT, action) => {
    return {
        ...state,
        loading: action.busy
    }
}

const last = (state=INIT, action) => {
    return {
        ...state,
        lastReceipt: action.receipt
    }
}

const HANDLERS = {
    [Types.INIT_START]: start,
    [Types.LAST_RECEIPT]: last,
    [Types.INIT_SUCCESS]: success,
    [Types.WORKING]: working
}
  
  export default createReducer(INIT, HANDLERS);