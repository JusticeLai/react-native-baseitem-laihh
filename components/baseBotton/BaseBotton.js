import React, {Component, PropTypes} from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    Image,
    Platform,
    ScrollView,
    ListView,
    TouchableOpacity,
    AsyncStorage,
    TextInput,//与原生通讯
} from 'react-native'


import CommonStyle from '../style/CommonStyle';
let {width, height} = Dimensions.get('window');

export default class BaseBotton extends Component {

    //构造函数
    constructor(props) {
        super(props)
    }


    //显示界面入口
    render() {
        let data = this.props.data ? this.props.data : {};

        let marginHorizontal = data.marginHorizontal ? data.marginHorizontal : 0;


        let placeholder = data.placeholder ? data.placeholder : '';
        let height = data.height ? data.height : 44;
        let marginTop = data.marginTop ? data.marginTop : 0;
        let marginBottom = data.marginBottom ? data.marginBottom : 0;
        let borderRadius = data.borderRadius ? data.borderRadius : 5;

        let backgroundColor = data.backgroundColor ? data.backgroundColor : CommonStyle.MAIN_COLOR_BLUE;


        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };
        let title = data.title ? data.title : '';
        let color = data.color ? data.color : 'white';
        let fontSize = data.fontSize ? data.fontSize : 14;
        let zIndex = data.zIndex ? data.zIndex : 0;


        return (
            <TouchableOpacity onPress={onPress} style={{
                zIndex: zIndex,
                height: height,
                width: width - marginHorizontal*2,
                justifyContent: 'center',
                marginLeft:marginHorizontal,
                alignItems: 'center',
                backgroundColor: backgroundColor,
                borderRadius:borderRadius,
                marginTop:marginTop,
            }}>

                <Text style={{
                    color: color,
                    fontSize: fontSize,
                }}>{title}</Text>
            </TouchableOpacity>
        )
    }

}
