import {connect} from 'react-redux';
import View from './Coinbase';
import {withRouter} from 'react-router-dom';

const s2p = state => {
    return {
        
    } 
} 

 const d2p = (dispatch,own) => { 
     return {
        goTo: url => {
            own.history.push(url);
        }
    } 
} 

 export default withRouter(connect(s2p,d2p)(View));