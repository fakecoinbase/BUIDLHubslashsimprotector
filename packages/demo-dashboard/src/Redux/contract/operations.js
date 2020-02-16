import { Creators } from "./actions";
import { default as toastr } from "Redux/toastr/operations";
import abi from "Constants/abi/SimProtector.json";
import { ethers } from "ethers";
import { ArbProvider } from "arb-provider-ethers";

// const ADDR = "0xebb10aadcfe3903a474dda106cffa597794b7a66"; // full rinkeby
const ADDR = "0x895521964D724c8362A36608AAf09A3D7d0A0445"; // arbitrum
// const ADDR = "0xdd03704a1d8540b12889a7837161127632c21c14"; // rollup

const init = () => async dispatch => {
  try {
    dispatch(Creators.initStart());
    let arbProvider = new ArbProvider(
      "http://104.248.9.236:1235",
      new ethers.providers.Web3Provider(window.ethereum)
    );

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
    const contr = await getState().contract.instance;
    await contr["addProvider(address)"](address);
    console.log('done')
  } catch (e) {
    console.log('add provider err', e);
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
    contr["registerPhoneNumber(uint256,address)"](hashed, numberOwner);
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
