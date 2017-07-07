import React, {Component} from 'react';
import {
    Alert,
    Dimensions
} from 'react-native';

import Toast from 'react-native-root-toast';
// var dismissKeyboard = require('dismissKeyboard');//隐藏键盘调用 dismissKeyboard();

let instance = null;


export default class Utils  {


    // constructor(props) {
    //     super(props);
    //     if (!instance) {
    //         instance = this;
    //     }
    //     return instance;
    // }

    static getWindow = () => {
        return Dimensions.get('window');
    };



    //吐司
    static Toast = (toast) => {
        Toast.show(
            toast,
            {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER
            }
        )
    };
    //吐司
    static DismissKeyboard = () => {
        // dismissKeyboard();
    };



    //提示框
    static Alert = (title,title2, cancleTitle, comfireTitle, cancleOnPress, comfireOnPress) => {
        Alert.alert(
            title,
            title2,
            [
                {text: cancleTitle, onPress: cancleOnPress},
                {text: comfireTitle, onPress: comfireOnPress},
            ]
        )
    };


    static getTimeStrWithStamp(startTimeStamp, length) {
        //服务器时间戳10位, 客户端时间戳13位
        if (startTimeStamp < 100000000000) {
            startTimeStamp *= 1000;
        }
        // let offset = now.getTimezoneOffset();
        let ret = new Date(startTimeStamp - new Date().getTimezoneOffset() * 60000);
        let ret2 = ret.toISOString().substr(0, ret.toISOString().length - 5).replace('T', ' ');

        if (length) {
            return this.SubStr(ret2,length);
        } else {
            return ret2;
        }


    }

    static SubStr(str, length) {
        return str.substr(0, str.length - length).replace('T', ' ');
    }


    //去重复和过滤---根据skuId
    static getSingleArray = (arr) => {
        return arr.reduce((pre, cur) => {
            let newObj = Object.assign([], pre)
            let ids = newObj.map(v => v.skuId)
            if (ids.indexOf(cur.skuId) === -1) {
                newObj.push(cur)
            } else {
                for (let index in newObj) {
                    let item = newObj[index]
                    if (cur.skuId === item.skuId) {
                        newObj[index].count = item.count + cur.count;
                        newObj[index].allPrice = item.price * newObj[index].count;
                    }
                }
            }
            return newObj
        }, [])
    }

}


//输入类
module.exports = Utils
