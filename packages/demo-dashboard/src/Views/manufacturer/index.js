import {connect} from 'react-redux';
import View from './Manufacturer';
import {ethers} from 'ethers';
import _ from 'lodash';

const s2p = state => {
    let ifc = new ethers.utils.Interface(state.contract.abi);
    console.log("FNS", ifc.functions);

    return {
        functions: _.keys(ifc.functions).filter(k=>k.indexOf("(") < 0).map(k=>{
            let f = ifc.functions[k];
            return {
                name: f.name,
                sighash: f.sighash,
                inputs: f.inputs
            }
        })
    } 
} 

 const d2p = dispatch => { 
     return {

    } 
} 

 export default connect(s2p,d2p)(View)