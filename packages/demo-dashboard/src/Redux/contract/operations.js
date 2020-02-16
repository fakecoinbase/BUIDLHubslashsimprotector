import {Creators} from "./actions";
import {default as toastr} from 'Redux/toastr/operations';
import abi from 'Constants/abi/SimProtector.json';
import {ethers} from 'ethers';


const ROPSTEN_ADDR = "0xAA92f0E922ea64912DE454048deF8D3274260f47"
const RINKEBY_ADDR = "0xe345Ef5532B82db821DEa89E2ED5a5CF689583e3";

const init = () => async dispatch => {
    try {
        dispatch(Creators.initStart());
        if(typeof global.web3 === 'undefined') {
            dispatch(toastr.error("No web3 provider found in environment"));
            return;
        }
        if(typeof global.ethereum === 'undefined') {
            dispatch(toastr.error("No ethereum provider found in environment"));
            return;
        }

        //TODO: swap out provider for L2 provider
        
        const accounts = await global.ethereum.enable();

        let provider = new ethers.providers.Web3Provider(global.web3.currentProvider, "ropsten"); //ethers.getDefaultProvider('rinkeby');
        let block = await provider.getBlockNumber();
        if(block.toString) {
            block = block.toString() - 0;
        }
        block -= 10000;
        console.log("Start block", block);

        let con = new ethers.Contract(ROPSTEN_ADDR, abi.abi, provider.getSigner());
        let ifc = new ethers.utils.Interface(abi.abi);

        let evtDefs = con.interface.events;
        let regTopic = evtDefs.RegisterPhoneNumber.topic;
        
        let events = await provider.getLogs({
            address: ROPSTEN_ADDR,
            fromBlock: block,
            topics: [regTopic]
        });
        events = events.map(e=>{
            let ev = ifc.parseLog(e);
            let num = ev.values.phoneNumber.toString();
            let time = ev.values.timestamp.toString()-0;
            let owner = ev.values.ownerAddress.toString();
            return {
                phoneNumber: num,
                timestamp: time * 1000,
                owner
            }
        });
        events.sort((a, b)=>b.timstamp-a.timestamp);

        dispatch(Creators.initSuccess({
            contract: con,
            provider: provider,
            events,
            abi: abi.abi
        }));
    } catch (e) {
        console.log(e);
    }
}

const addProvider = (address) => async (dispatch, getState) => {
    try {

        dispatch(Creators.working(true));

        await getState().contract.instance.addProvider(address);
        

    } catch (e) {
        console.log(e);
        dispatch(toastr.error("Problem adding provider"));
    }
}

const registerPhoneNumber = (phoneNumber, numberOwner) => async (dispatch, getState) => {
    try {
        dispatch(Creators.working(true));
        let hashed = ethers.utils.id(phoneNumber);
        
        let txn = await getState().contract.instance.registerPhoneNumber(hashed, numberOwner);
        let rec = await txn.wait(1);
        let event = rec.events[0];
        
        dispatch(Creators.lastReceipt(event));
    } catch (e) {
        console.log(e);
        dispatch(toastr.error("problem register number"));
    }
}

const confirmShutdown = (phoneNumber) => async (dispatch, getState) => {
    try {
        dispatch(Creators.working(true));
        let hashed = ethers.utils.id(phoneNumber);
        await getState().contract.instance.confirmShutdown(hashed);
    } catch (e) {
        console.log(e);
        dispatch(toastr.error("problem register number"));
    }
}

const registerSimChange = (phoneNumber) => async (dispatch, getState) => {
    try {

    } catch (e) {
        console.log(e);
        dispatch(toastr.error("problem registering sim change"));
    }
}

export default {
    init,
    addProvider,
    registerPhoneNumber,
    confirmShutdown,
    registerSimChange
}
