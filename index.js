import SCBaseItemView from './components/baseItem/index';
import RadioGroup from './components/baseItem/RadioGroup';
import EasyListView from './components/listView/EasyListView';
import MyListView from './components/listView/MyListView';
import SimpleListView from './components/listView/SimpleListView';




import BackGroundImageView from './components/baseImage/BackGroundImageView';
import ImageTextView from './components/baseImage/ImageTextView';



import md5 from './components/three/md5';

import Swiper from './components/three/Swiper';//广告轮播器
import CountdownView from './components/three/CountdownView';//定时器--短信验证码

import CountDownTimer from './components/three/CountDownReact';//时分秒...倒计时
import QRCodeTwo from './components/three/QRCodeTwo/QRCode';//二维码生产
import AutoHeightImage from './components/three/react-native-auto-height-image/index';//图片自适应高度
import CheckBox from './components/three/react-native-check-box/index';//复选框
import AboutCommon from './components/three/react-native-parallax-scroll-view/AboutCommon';// 拉伸图片
import StarRating from './components/three/react-native-start-rating/star-rating';//评分星星
import Toast from './components/three/react-native-easy-toast/index';//Toast



import BaseNavigationBar from './components/widget/BaseNavigationBar';//定时器
import BackGroundImage from './components/widget/BackGroundImage';//背景图
import FirstEnterView from './components/widget/FirstEnterView';//第一次进去的轮播图
import LoadingView from './components/widget/LoadingView';//加载界面
import CodePushAlertView from './components/widget/CodePushAlertView';//定时器


import SwipeListView from './components/three/Swipe-ListView/SwipeListView';//侧滑删除
import SwipeRow from './components/three/Swipe-ListView/SwipeRow';//侧滑删除


import BaseAlert from './components/baseAlert/BaseAlert';//对话框

import indexTest from './indexTest';//侧滑删除


import AddCutCoutView from './components/widget/AddCutCoutView';//数字加减



import CommonStyle from './components/style/CommonStyle';
import Utils from './components/uitls/Utils';
import DBUtils from './components/uitls/DBUtils';
import ImageUtils from './components/uitls/ImageUtils';

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
    BackGroundImage,
    FirstEnterView,
    LoadingView,
    CodePushAlertView,
    Swiper,//广告轮播
    SwipeListView,//侧滑删除
    SwipeRow,//侧滑删除
    indexTest,
    CountDownTimer,
    QRCodeTwo,//二维码生成
    StarRating,//评分星星
    BaseAlert,
    SimpleListView,
    AddCutCoutView,
    ImageUtils,
    AutoHeightImage,
    CheckBox,
    AboutCommon,
    Toast,
    // MessageView,
    // playSound,
}

