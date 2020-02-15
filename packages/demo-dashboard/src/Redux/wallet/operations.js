import { Creators } from "./actions";
import { ethers } from 'ethers';
// import ethereumjsWallet from 'ethereumjs-wallet';
// const createHmac = require('create-hmac');

// const randomBytes = function(length, callback) {
//   const byteArray = new Uint8Array(length);
//   window.crypto.getRandomValues(byteArray);
//   const buffer = new Buffer(byteArray);
//   if (callback) {
//     callback(null, buffer);
//   } else {
//     return buffer;
//   }
// }



const init = () => async dispatch => {
    try {
        dispatch(Creators.initStart());

        const response = await fetch('/api/wallet/generate');
        const walletParams = await response.json();
        console.log(walletParams);
        // const instance = walletParams;
        // var entropy = randomBytes(16);
        // console.log(ethers.utils.HDNode);
        // var mnemonic = ethers.utils.HDNode.entropyToMnemonic(entropy);
        // const instance = ethers.Wallet.fromMnemonic(mnemonic);

        // const instance = ethers.Wallet.createRandom();

        // const instance = ethereumjsWallet.generate();
        const instance =  new ethers.Wallet(walletParams.privateKey);
        dispatch(Creators.initSuccess({
            instance
        }));

    } catch (e) {
        console.log(e);
    }
}

const sign = data => async (dispatch, getState) => {
    try {
        return await getState().wallet.instance.signMessage
    } catch (e) {
        console.log(e);
    }
}

export default {
    init,
    sign
}
