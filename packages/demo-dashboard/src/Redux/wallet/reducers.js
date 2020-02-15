import {Types} from './actions';
import {createReducer} from 'reduxsauce';

const INIT = {
    instance: null
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
        instance: action.wallet.instance,
        loading: false
    }
}

const HANDLERS = {
    [Types.INIT_START]: start,
    [Types.INIT_SUCCESS]: success
}
  
  export default createReducer(INIT, HANDLERS);