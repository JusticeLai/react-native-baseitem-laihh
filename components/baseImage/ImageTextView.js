/**
 * Created by lipeiwei on 2017/1/6.
 */

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
    Platform
} from 'react-native';


export default class ImageTextView extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        let data = this.props.data ? this.props.data : {};

        //最外层对象
        let activeOpacity = data.activeOpacity ? data.activeOpacity : 0.8;
        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };


        //图片对象
        let image = data.image ? data.image : '';  //图片值
        let zIndex = data.zIndex ? data.zIndex : 1;//层级
        let width = data.width ? data.width : 50;//图标宽度
        let height = data.height ? data.height : 50;//图标高度

        //文字对象
        let text = data.text ? data.text : '';//文案值
        let fontSize = data.fontSize ? data.fontSize : 14;//文案值大小
        let color = data.color ? data.color : 'white';  //文案颜色
        let textHeight = 20; //文案高度


        //文字对象2
        let text2 = data.text2 ? data.text2 : '';//文案值
        // let fontSize = data.fontSize ? data.fontSize : 14;//文案值大小
        // let textHeight = 20; //文案高度

        let borderRadius = data.borderRadius ? (width - 10) / 2 : data.borderRadius;


        return (
            <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity} style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: height + 20,
                width: width + 30,
                zIndex: zIndex,
            }}>
                <Image style={{width: width - 10, height: height - 10, margin: 5, borderRadius: borderRadius}}
                       source={image}/>
                <Text style={{height: textHeight, color: color, fontSize: fontSize}}>{text}</Text>

                {this.renderCount(text2)}
            </TouchableOpacity>
        );
    }

    renderCount(count) {
        if (count == '0' || count == '' || count == undefined) {
            return (
                null
            )
        } else {
            let countX = count;
            if (count >= 99) {
                countX = '99+';
            }

            return (
                <View style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: 20,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                    borderRadius: 10
                }}>
                    <Text style={{color: 'white', fontSize: 10}}>{countX}</Text>
                </View>
            )
        }

    }

}


