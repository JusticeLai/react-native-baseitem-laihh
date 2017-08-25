import React, {Component} from 'react';
import {
    Alert,
    Dimensions,
    Keyboard
} from 'react-native';

import Toast from 'react-native-root-toast';

import DBUtils from './DBUtils';
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
    static Toast = (toast,time) => {
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
        Keyboard.dismiss();
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

    static getDict = (dict) => {
        let dictX = dict;
        dictX.marketPrice = dict.marketPrice != undefined ? dict.marketPrice : '';
        dictX.productId = dict.productId != undefined ? dict.productId : '0';
        dictX.count = dict.count != undefined ? dict.count : 1;
        dictX.buyMax = dict.buyMax != undefined ? dict.buyMax : '0';
        dictX.postPrice = dict.postPrice != undefined ? dict.postPrice : '0';
        dictX.skuIdImageURL = dict.skuIdImageURL != undefined ? dict.skuIdImageURL : '';
        dictX.skuPropsStr = dict.skuPropsStr != undefined ? dict.skuPropsStr : '';
        dictX.skuDescStr = dict.skuDescStr != undefined ? dict.skuDescStr : '';
        dictX.skuId = dict.skuId != undefined ? dict.skuId : '0';


        return dictX;
    }

    test(){
        let shopCarArray = [
            {tite: '商品1', productID: 1, ischecked: false},
            {tite: '商品2', productID: 2, ischecked: false}]

        let selectArray = [];
        //全选增加选中ID
        for (let index in shopCarArray) {
            selectArray.push(shopCarArray[index].productID)
        }
        //全选设置True
        for (let index in shopCarArray) {
            let item = shopCarArray[index]
            for (let index in selectArray) {
                let productID = selectArray[index]
                if (item.productID === productID) {
                    item.ischecked = true;
                    break;
                }
            }
        }
        console.log(JSON.stringify(shopCarArray))
    }


    static  getDBUtils() {
        return DBUtils.getDBUtils()
    }

}


//输入类
module.exports = Utils
