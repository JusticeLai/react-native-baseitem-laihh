import React, { Component } from 'react';
import { requireNativeComponent, DeviceEventEmitter, NativeModules,Platform} from 'react-native';
import { EventEmitter } from 'events';
const emitter = new EventEmitter();
const { RNLhhLibrary } = NativeModules;


export function playSound(string,callBack) {
  if(Platform.OS == 'ios'){
    RNLhhLibrary.RNInvokeOCGShowSound(string,callBack);
  }
}



export {
    RNLhhLibrary,
}


