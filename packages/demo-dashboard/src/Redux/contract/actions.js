import {createActions} from 'reduxsauce';

const {
  Types,Creators
} = createActions({
  initStart: null,
  initSuccess: ['contract'],
  reset: null,
  lastReceipt: ['receipt'],
  failure: ['error'],
  working: ['busy'],

}, {prefix: "contract."});

export {
  Types,
  Creators
}
