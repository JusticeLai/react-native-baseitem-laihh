import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ListView,
    TextInput,
    Switch,
    Platform,
    Dimensions,
    StatusBar
} from 'react-native';


let {width, height} = Dimensions.get('window');

export default class BackGroundImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // isLogin: 'loading',//默认没有登录
            opacity: 1,
            time: props.time ? props.time : 1000
        }

    }


    render() {
        let heightX = '';
        if (Platform.OS === 'android') {
            heightX = height;
        } else {
            heightX = height;
        }

        return (
            <Image style={{width: width, height: heightX}} resizeMode={'cover'}
                   source={this.props.image}/>
        )
    }

}


