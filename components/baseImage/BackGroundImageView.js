/**
 * Created by lipeiwei on 2017/1/6.
 */

import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ListView,
    TextInput,
    Switch,
    Dimensions,
    Platform,
    Keyboard,
} from 'react-native';


let {width, height} = Dimensions.get('window');
// import Utils from '../uitls/Utils';
// let dismissKeyboard = require('dismissKeyboard');//隐藏键盘调用 dismissKeyboard();



export default class BackGroundImageView extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        let image = this.props.image ? this.props.image : require('../../images/bg.png');
        return (
            <TouchableOpacity style={{flex: 1}} onPress={()=> {Keyboard.dismiss()}}  activeOpacity={1}>
                <Image style={{width: width, height: height, zIndex: 100, position: 'absolute'}} source={image}
                       resizeMode={'cover'}/>

                <View style={{flex: 1, zIndex: 101}}>
                    {
                        this.props.renderChildView ? this.props.renderChildView : this.renderChildView()
                    }
                </View>
            </TouchableOpacity>
        )
    }

    renderChildView() {

    }


}


