import {createActions} from 'reduxsauce';

const {
  Types,Creators
} = createActions({
  initStart: null,
  initSuccess: ['wallet'],
}, {prefix: "wallet."});

export {
  Types,
  Creators
}
