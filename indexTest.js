import {
    Platform,
    NativeModules,
    NativeAppEventEmitter
} from 'react-native';

const ios = Platform.OS === 'ios';
const android = Platform.OS === 'android';
const Picker = NativeModules.RNLhhLibrary;
const options = {
    isLoop: false,
    pickerConfirmBtnText: 'confirm',
    pickerCancelBtnText: 'cancel',
    pickerTitleText: 'pls select',
    pickerConfirmBtnColor: [1, 186, 245, 1],
    pickerCancelBtnColor: [1, 186, 245, 1],
    pickerTitleColor: [20, 20, 20, 1],
    pickerToolBarBg: [232, 232, 232, 1],
    pickerTextEllipsisLen: 6,
    pickerBg: [196, 199, 206, 1],
    pickerRowHeight: 24,
    wheelFlex: [1, 1, 1],
    pickerData: [],
    selectedValue: [],
    onPickerConfirm(){},
    onPickerCancel(){},
    onPickerSelect(){},
    pickerToolBarFontSize: 16,
    pickerFontSize: 16,
    pickerFontColor: [31, 31 ,31, 1],
    title:"哈哈"
};

export default {

    init(params){

        const opt = {
            ...options,
            ...params
        };

        const fnConf = {
            confirm: opt.onPickerConfirm,
            cancel: opt.onPickerCancel,
            select: opt.onPickerSelect
        };

        this.listener && this.listener.remove();
        this.listener = NativeAppEventEmitter.addListener('pickerEvent', event => {
            console.log(event)
        });
    },

    // show(){
    //     Picker.show();
    // },
    //
    // hide(){
    //     Picker.hide();
    // },


};