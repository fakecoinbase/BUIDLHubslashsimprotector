import {connect} from 'react-redux';
import View from './Main';
import {default as conOps} from 'Redux/contract/operations';

const s2p = state => {
    return {
    } 
} 

 const d2p = dispatch => { 
     return {
        sendTxn: (data) => {
           return dispatch(conOps.registerPhoneNumber(data.phoneNumber, data.address));
        }
    } 
} 

 export default connect(s2p,d2p)(View)