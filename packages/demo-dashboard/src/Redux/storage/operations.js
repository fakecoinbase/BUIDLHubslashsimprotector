import {Creators} from './actions';
import DB from 'buidl-storage';

const init = () => async (dispatch) => {
    let db = new DB({
        dbPrefix: 'evtflow-'
    });
    dispatch(Creators.initSuccess(db));
}

const changeNetwork = id => async (dispatch) => {
    let db = new DB({
        dbPrefix: ""+id+"-evtflow-"
    });
    dispatch(Creators.changeNetwork(db));
}

export default {
    init,
    changeNetwork
}