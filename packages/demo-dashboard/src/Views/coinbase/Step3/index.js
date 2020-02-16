import {connect} from 'react-redux';
import View from './Step3';
import axios from 'axios';

const flowURL = "https://52429878-ff2d-566f-ab61-06226c536592.buidlhub.net/v1/trigger";

const s2p = state => {
  let lastEvent = state.contract.recentEvents[0];

  return {
    lastEvent
  } 
} 

 const d2p = dispatch => { 
   return {

    sendText: async code => {
      let r = await axios.post(flowURL, {
        code
      });
    }
  } 
} 

 export default connect(s2p,d2p)(View)