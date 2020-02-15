import {connect} from 'react-redux';
import View from './Main';
import {default as initOps} from 'Redux/init/operations';

const s2p = state => {
    return {
    } 
} 

 const d2p = dispatch => { 
     return {
        runInit: () => {
            dispatch(initOps.start());
        }
    } 
} 

 export default connect(s2p,d2p)(View)