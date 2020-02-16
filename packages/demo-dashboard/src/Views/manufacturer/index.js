import {connect} from 'react-redux';
import View from './Manufacturer';
import {ethers} from 'ethers';
import { default as ConOps } from 'Redux/contract/operations'
import _ from 'lodash';

const s2p = state => {
    console.log('state', state)
    let ifc = new ethers.utils.Interface(state.contract.abi);
    return {
        functions: _.keys(ifc.functions).filter(k=>k.indexOf("(") < 0).map(k=>{
            let f = ifc.functions[k];
            return {
                name: f.name,
                sighash: f.sighash,
                inputs: f.inputs,
                actualFn: f
            }
        })
    } 
} 

 const d2p = dispatch => { 
     return {
        generateQRCode: ({fn, params}) => {
            console.log("FN", fn);

            let data = fn.encode(params);
            console.log("ENCO", data);
            //TODO: sign with ephemeral wallet 

            return data;
        },
        registerPhoneNumber: (phoneNumber, numberOwner) => {
            dispatch(ConOps.registerPhoneNumber(phoneNumber, numberOwner))
        },
        addProvider: (address) => {
            dispatch(ConOps.addProvider(address))
        }
    } 
} 


 export default connect(s2p,d2p)(View)