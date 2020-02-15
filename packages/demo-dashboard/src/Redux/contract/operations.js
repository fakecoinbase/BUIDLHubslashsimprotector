import {Creators} from "./actions";
import {default as toastr} from 'Redux/toastr/operations';
import abi from 'Constants/abi/SimProtector.json';
import {ethers} from 'ethers';


const ROPSTEN_ADDR = "0xAA92f0E922ea64912DE454048deF8D3274260f47";

const init = () => async dispatch => {
    try {
        dispatch(Creators.initStart());
        //TODO: swap out provider for L2 provider
        let provider = ethers.getDefaultProvider('ropsten');
        let con = new ethers.Contract(ROPSTEN_ADDR, abi.abi, provider);
        dispatch(Creators.initSuccess({
            contract: con,
            provider: provider,
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
        await getState().contract.instance.registerPhoneNumber(hashed, numberOwner);
    } catch (e) {
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
