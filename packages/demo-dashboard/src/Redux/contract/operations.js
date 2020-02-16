import { Creators } from "./actions";
import { default as toastr } from "Redux/toastr/operations";
import abi from "Constants/abi/SimProtector.json";
import { ethers } from "ethers";
import { ArbProvider } from "arb-provider-ethers";

const ADDR = "0xe345Ef5532B82db821DEa89E2ED5a5CF689583e3";

const init = () => async dispatch => {
  try {
    dispatch(Creators.initStart());
    //TODO: swap out provider for L2 provider
    // let provider = ethers.getDefaultProvider("rinkeby");
    let arbProvider = new ArbProvider(
      "http://104.248.9.236:1235",
      // new ethers.providers.Web3Provider(global.web3.currentProvider)
      new ethers.providers.Web3Provider(window.ethereum)
    );
    // let provider = new ethers.providers.Web3Provider(global.web3.currentProvider, "ropsten");

    const accounts = await window.ethereum.enable();
    const signer = arbProvider.getSigner()
    let con = new ethers.Contract(ADDR, abi.abi, signer);
    con.connect(signer)

    dispatch(
      Creators.initSuccess({
        contract: con,
        provider: arbProvider,
        // provider: provider,
        abi: abi.abi
      })
    );
  } catch (e) {
    console.log(e);
  }
};

const addProvider = address => async (dispatch, getState) => {
  try {
    dispatch(Creators.working(true));

    await getState().contract.instance.addProvider(address);
  } catch (e) {
    console.log(e);
    dispatch(toastr.error("Problem adding provider"));
  }
};

const registerPhoneNumber = (phoneNumber, numberOwner) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(Creators.working(true));
    let hashed = ethers.utils.id(phoneNumber);
    const contr = await getState().contract.instance;
    console.log('contr', contr)
    await contr.registerPhoneNumber(hashed, numberOwner);
    console.log('done')
  } catch (e) {
    dispatch(toastr.error("problem register number"));
  }
};

const confirmShutdown = phoneNumber => async (dispatch, getState) => {
  try {
    dispatch(Creators.working(true));
    let hashed = ethers.utils.id(phoneNumber);
    await getState().contract.instance.confirmShutdown(hashed);
  } catch (e) {
    console.log(e);
    dispatch(toastr.error("problem register number"));
  }
};

const registerSimChange = phoneNumber => async (dispatch, getState) => {
  try {
  } catch (e) {
    console.log(e);
    dispatch(toastr.error("problem registering sim change"));
  }
};

export default {
  init,
  addProvider,
  registerPhoneNumber,
  confirmShutdown,
  registerSimChange
};
