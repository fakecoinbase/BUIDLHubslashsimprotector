/**
 * There are cases where we want state changes to
 * globally update multiple downstream things. And, more importantly,
 * some of those updates might include asynchronous actions that need
 * be executed as a result of the one state change.
 *
 * This middleware will notify all registered dependencies for a
 * state change type. Dependencies are registered in DepManager.
**/


import _ from 'lodash';
import uuid from 'uuid/v4';

let instance = null;

const _err = e => {
  console.log(e);
}

class DepManager {

  static instance() {
    if(!instance) {
      instance = new DepManager();
    }
    return instance;
  }

  constructor() {
    this.callbacks = {};

    [
      'addDependency',
      'addDependencies',
      'removeDependency',
      'notify'
    ].forEach(fn=>{
      this[fn] = this[fn].bind(this);
    })
  }

  addDependencies(types, id, callback) {
    if(!Array.isArray(types)) {
      let a = [types];
      types = a;
    }
    types.forEach((t,i)=>{
      this.addDependency(t, id + "." + i, callback)
    });
  }

  addDependency(type, id, callback) {
    let set = this.callbacks[type] || {};
    set[id] = callback;
    this.callbacks[type] = set;
  }

  removeDependency(type, id) {
    let set = this.callbacks[type];
    delete set[id];
    this.callbacks[type] = set;
  }

  notify(obj, dispatch, getState) {
    let set = this.callbacks[obj.type];
    setTimeout(async ()=>{
      let ids = _.keys(set);
      for(let i=0;i<ids.length;++i) {
        let cb = set[ids[i]];
        try {
          await cb(obj, dispatch, getState);
        } catch (e) {
          console.log("Problem in callback with id: " + ids[i], e);
          _err(e);
        }
      }
    });
  }
}

export const registerDeps = (deps, callback) => {
  DepManager.instance().addDependencies(deps, uuid(), callback);
}

export default () =>  ({dispatch, getState}) => next => action => {

    //apply the action
    let retValue = next(action);

    //call dependent items
    DepManager.instance().notify(action, dispatch, getState);

    //return orig result
    return retValue;
}
