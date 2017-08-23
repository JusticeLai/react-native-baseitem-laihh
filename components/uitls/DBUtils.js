import React, {Component} from 'react';
import {
    AsyncStorage,
} from 'react-native';


let instance = null;


export default class DBUtils extends Component {

    constructor(props) {
        super(props);
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    test(){
        DBUtils.get(DBUtils.UserInfo).then((result) => {
            if(result == null ){
                DBUtils.save(DBUtils.UserInfo,'标题')
                console.log(result)
            }else{
                console.log(result)
            }
        });

    }

    static  UserInfo = 'UserInfo_KEY';//用户信息
    static  UserToken = 'UserToken_KEY';//用户信息
    static  APPVersion = 'APPVersion_KEY';//是否新版,或者第一次进入
    static  isLogin = 'isLogin_KEY';//是否登录
    static  androidFirstEnter = 'androidFirstEnter_KEY';//安卓第一次进入
    static  isShowCodePush = 'isShowCodePush_KEY';//是否显示热更新
    static  LocalAccount = 'LocalAccount_KEY';//已经登录过的账号



    test(){
        DBUtils.get('appHotSearchTagList').then((result) => {
            if(result == null ){
                DBUtils.save('appHotSearchTagList',{title:'标题'})
            }else{
                console.log(result)
            }
        });
    }

    //获取
    static get(key) {
        return AsyncStorage.getItem(key).then((value) => {
            const jsonValue = JSON.parse(value);
            return jsonValue;
        });
    }

    static save(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    static update(key, value) {
        return DeviceStorage.get(key).then((item) => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);
            return AsyncStorage.setItem(key, JSON.stringify(value));
        });
    }

    static delete(key) {
        return AsyncStorage.removeItem(key);
    }

    // static  getDBUtils() {
    //     // let singleton = new DBUtils();
    //     return instance;
    // }


}


// export const getDBUtils = () => {
//     return new DBUtils();
// }
//
//
// export const get = (key) => {
//     return AsyncStorage.getItem(key).then((value) => {
//         const jsonValue = JSON.parse(value);
//         return jsonValue;
//     });
// }
//
// export const save = (key,value) => {
//     return AsyncStorage.setItem(key, JSON.stringify(value));
// }

