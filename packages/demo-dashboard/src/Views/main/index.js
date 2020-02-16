import {connect} from 'react-redux';
import View from './Main';
import {default as conOps} from 'Redux/contract/operations';
import {withRouter} from 'react-router-dom';

const s2p = state => {
    return {
    } 
} 

 const d2p = (dispatch,own) => { 
     return {
        sendTxn: (data) => {
           return dispatch(conOps.registerPhoneNumber(data.phoneNumber, data.address));
        },
        goTo: url => {
            own.history.push(url);
        }
    } 
} 

 export default withRouter(connect(s2p,d2p)(View))