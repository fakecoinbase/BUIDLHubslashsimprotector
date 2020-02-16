import {connect} from 'react-redux';
import View from './Step3';

const s2p = state => {
  let lastEvent = state.contract.recentEvents[0];

  return {
    lastEvent
  } 
} 

 const d2p = dispatch => { 
   return {

  } 
} 

 export default connect(s2p,d2p)(View)