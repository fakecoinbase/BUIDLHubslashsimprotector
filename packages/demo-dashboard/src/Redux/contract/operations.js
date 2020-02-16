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
    let provider = new ArbProvider(
      "http://104.248.9.236:1235",
      new ethers.providers.Web3Provider(window.ethereum)
    );

    const accounts = await window.ethereum.enable();
    const signer = provider.getSigner()
    let con = new ethers.Contract(ADDR, abi.abi, signer);
    
    let web3Provider = new ethers.getDefaultProvider("rinkeby");
    let block = await provider.getBlockNumber();
    if(block.toString) {
        block = block.toString() - 0;
    }
    block -= 1000;
    console.log("Start block", block);

    //let con = new ethers.Contract(ROPSTEN_ADDR, abi.abi, provider.getSigner());
    let ifc = new ethers.utils.Interface(abi.abi);

    let evtDefs = ifc.events;
    let regTopic = evtDefs.RegisterPhoneNumber.topic;
    console.log("TOPIC", regTopic);

    
    let events = await web3Provider.getLogs({
        address: ADDR,
        fromBlock: block,
        topics: [regTopic]
    });
    console.log("EVENTS", events);

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
    events.sort((a, b)=>b.timestamp-a.timestamp);

    dispatch(Creators.initSuccess({
        contract: con,
        provider: provider,
        events,
        abi: abi.abi
    }));

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
    let txn = await contr.functions.registerPhoneNumber(hashed, numberOwner);
    const ap = getState().contract.provider;
    const r = await txn.wait(); 
    if(r) {
      let evts = r.events || [];
      let evt = evts[0];
      if(evt) {
        let vals = evt.args;
        if(vals) {
          let pn = vals.phoneNumber.toString();
          let timestamp = (vals.timestamp.toString()-0)*1000;
          let ownerAddress = (vals.ownerAddress.toString());
          dispatch(Creators.lastReceipt({
            phoneNumber: pn,
            timestamp,
            ownerAddress
          }));
        }
      }
    }
    
  } catch (e) {
    console.log(e);
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
