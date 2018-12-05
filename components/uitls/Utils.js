import React, {Component} from 'react';
import {
    Alert,
    Dimensions,
    Keyboard
} from 'react-native';

// import Toast from 'react-native-root-toast';

import DBUtils from './DBUtils';
// var dismissKeyboard = require('dismissKeyboard');//隐藏键盘调用 dismissKeyboard();

let instance = null;


export default class Utils {


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
    static Toast = (toast, time) => {

        // Toast.show(
        //     toast,
        //     {
        //         duration: 1500,
        //         position: Toast.positions.BOTTOM
        //     }
        // )
    };

    //吐司
    static DismissKeyboard = () => {
        Keyboard.dismiss();
    };


    //提示框
    static Alert = (title, title2, cancleTitle, comfireTitle, cancleOnPress, comfireOnPress) => {
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
            return this.SubStr(ret2, length);
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

    test() {
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


    //获取支付类型
    static getPayTypeStr(typeStr) {
        let array = [
            {typeStr: '-2', title: '积分兑换'},
            {typeStr: '-1', title: ''},
            {typeStr: '0', title: '还没付款'},
            {typeStr: 'wx_pub', title: '微信公众号支付'},
            {typeStr: 'wx', title: 'app微信支付'},
            {typeStr: 'bfb_pub', title: '百度钱包'},
            {typeStr: '31', title: '到付'},
            {typeStr: 'wx_pub_qr', title: '微信扫码支付'},
            {typeStr: 'alipay', title: '支付宝支付'},
            {typeStr: 'WeixinBERL', title: '微信公众号支付'},
            {typeStr: 'AlipayCS', title: '支付宝支付'},
            {typeStr: 'Cash', title: '现金支付'},
            {typeStr: 'AlipayPAZH', title: '支付宝支付'},
            {typeStr: 'Weixin', title: '微信支付'},
        ];

        let str = '';
        for (let i = 0; i < array.length; i++) {
            let dict = array[i];
            if (dict.typeStr == typeStr) {
                str = dict.title;
            }

        }
        return str;

    }


    //格式化数字,加0,3位加逗号
    static formatNum(str) {
        var newStr = "";
        var count = 0;
        // 当数字是整数
        if (str.indexOf(".") == -1) {
            for (var i = str.length - 1; i >= 0; i--) {
                if (count % 3 == 0 && count != 0) {
                    newStr = str.charAt(i) + "," + newStr;
                } else {
                    newStr = str.charAt(i) + newStr;
                }
                count++;
            }
            str = newStr + ".00"; //自动补小数点后两位
            return str;
        }
        // 当数字带有小数
        else {
            for (var i = str.indexOf(".") - 1; i >= 0; i--) {
                if (count % 3 == 0 && count != 0) {
                    newStr = str.charAt(i) + "," + newStr;
                } else {
                    newStr = str.charAt(i) + newStr; //逐个字符相接起来
                }
                count++;
            }
            str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
            return str;
        }
    }


}


//输入类
module.exports = Utils
