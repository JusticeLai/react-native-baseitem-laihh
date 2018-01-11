import SCBaseItemView from './components/baseItem/index';
import RadioGroup from './components/baseItem/RadioGroup';
import EasyListView from './components/listView/EasyListView';
import MyListView from './components/listView/MyListView';




import BackGroundImageView from './components/baseImage/BackGroundImageView';
import ImageTextView from './components/baseImage/ImageTextView';



import md5 from './components/three/md5';

import Swiper from './components/three/Swiper';//广告轮播器
import CountdownView from './components/three/CountdownView';//定时器
import BaseNavigationBar from './components/widget/BaseNavigationBar';//定时器


import SwipeListView from './components/three/Swipe-ListView/SwipeListView';//侧滑删除
import SwipeRow from './components/three/Swipe-ListView/SwipeRow';//侧滑删除




import CommonStyle from './components/style/CommonStyle';
import Utils from './components/uitls/Utils';
import DBUtils from './components/uitls/DBUtils';
// import {playSound} from './index2';

let height = Utils.getWindow().height;
let width = Utils.getWindow().width;


// import React, { Component } from 'react';
// import { requireNativeComponent, DeviceEventEmitter, NativeModules,Platform} from 'react-native';



// let RCTMessageView = requireNativeComponent('MyCustomView', MessageView);
// class MessageView extends Component {
//   render() {
//
//     console.warn('执行了index')
//     return <RCTMessageView style={{flex:1}} {...this.props}/>
//   }
// }






export {
    SCBaseItemView,
    RadioGroup,
    EasyListView,
    MyListView,
    BackGroundImageView,
    ImageTextView,
    CommonStyle,
    Utils,
    DBUtils,
    height,
    width,
    md5,
    CountdownView,
    BaseNavigationBar,
    Swiper,//广告轮播
    SwipeListView,//侧滑删除
    SwipeRow,//侧滑删除
    // MessageView,
    // playSound,
}


