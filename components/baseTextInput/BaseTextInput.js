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

export default class BaseTextInput extends Component {

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

        let backgroundColor = data.backgroundColor ? data.backgroundColor : 'white';


        let ref = data.ref ? data.ref : '';
        let maxLength = data.maxLength ? data.maxLength : 16;
        let leftTitle = data.leftTitle ? data.leftTitle : '';
        let leftTitleWidth = data.leftTitleWidth ? data.leftTitleWidth : 50;
        let leftTitleFontSize = data.leftTitleFontSize ? data.leftTitleFontSize : 14;
        let leftTitleColor = data.leftTitleColor ? data.leftTitleColor : 'white';
        let leftImage = data.leftImage ? data.leftImage : '';

        let AndroidImageWH = 0;
        if (Platform.OS === 'android') {
            AndroidImageWH = 5;
        }

        let leftImageWidth = data.leftImageWidth ? data.leftImageWidth - AndroidImageWH : 30 - AndroidImageWH;
        let leftImageHeight = data.leftImageHeight ? data.leftImageHeight - AndroidImageWH : 30 - AndroidImageWH;


        let rightImage = data.rightImage ? data.rightImage : '';
        let zIndex = data.zIndex ? data.zIndex : 1;


        let borderBottomWidth = data.borderBottomWidth ? data.borderBottomWidth : 1;
        let borderBottomColor = data.borderBottomColor ? data.borderBottomColor : CommonStyle.UNDER_LINE_COLOR;

        let borderTopWidth = data.borderTopWidth ? data.borderTopWidth : 1;
        let borderTopColor = data.borderTopColor ? data.borderTopColor : 'transparent';


        let secureTextEntry = data.secureTextEntry ? data.secureTextEntry : false;
        let multiline = data.multiline ? data.multiline : false;
        let editable = true;

        if (data.editable == true) {
            editable = true;
        } else if (data.editable == false) {
            editable = false;
        }

        let alignItems = 'center'
        if (multiline == true) {
            alignItems = 'flex-start';
        } else if (data.editable == false) {
            alignItems = 'center';
        }


        // data.editable ? editable = data.editable : editable = true


        data.borderBottomWidth == 0 ? borderBottomColor = 'transparent' : null
        data.borderTopWidth == 0 ? borderTopColor = 'transparent' : null


        let rightOnPress = this.props.rightOnPress ? this.props.rightOnPress : ()=> {
        };
        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };
        let title = data.title ? data.title : '';
        let autoFocus = data.autoFocus ? data.autoFocus : false;
        let titleColor = data.titleColor ? data.titleColor : 'white';
        let placeholderTextColor = data.placeholderTextColor ? data.placeholderTextColor : 'white';

        let keyboardType = data.keyboardType ? data.keyboardType : 'default';


        return (
            <TouchableOpacity onPress={onPress} style={{
                zIndex: zIndex,
                height: height + 2,
                width: width - marginHorizontal,
                backgroundColor: backgroundColor,
                marginBottom: marginBottom,
                marginTop: marginTop,
            }}>
                <View style={{height: borderTopWidth, backgroundColor: borderTopColor, marginHorizontal: 10}}/>
                <View style={{
                    height: height,
                    width: width - marginHorizontal,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: alignItems,
                }}>

                    {
                        leftTitle == '' ? null :
                            <Text style={{
                                color: leftTitleColor,
                                marginLeft: 25,
                                marginRight: 5,
                                fontSize: 16,
                                width: leftTitleWidth,
                                fontSize: leftTitleFontSize,
                                marginTop:multiline == true ? 6 :0
                            }}>{leftTitle}</Text>
                    }
                    {
                        leftImage == '' ? null : <Image style={{
                            width: leftImageWidth,
                            height: leftImageHeight,
                            marginHorizontal: 15,
                            marginBottom: Platform.OS === 'android' ? 4 : 0,
                        }} source={leftImage} resizeMode={'contain'}/>
                    }
                    <TextInput
                        ref={this.props.ref}
                        style={{
                            height: height,
                            flex: 1,
                            fontSize: 14,
                            color: titleColor,
                        }}
                        keyboardType={keyboardType}
                        textAlignVertical={'top'}
                        secureTextEntry={secureTextEntry}
                        value={title}
                        placeholder={placeholder}
                        maxLength={maxLength}
                        placeholderTextColor={placeholderTextColor}
                        editable={editable}
                        underlineColorAndroid='transparent'
                        clearButtonMode={'while-editing'}
                        multiline={multiline}
                        onChangeText={(text)=> {
                            this.props.onChangeText ? this.props.onChangeText(text) : ()=> {
                            }
                        }}
                        onEndEditing={(text)=> {
                            this.props.onEndEditing ? this.props.onEndEditing(text) : ()=> {
                            }
                        }}
                        onBlur={()=> {
                            this.props.onBlur ? this.props.onBlur() : ()=> {
                            }
                        }}
                        onFocus={()=> {
                            this.props.onFocus ? this.props.onFocus() : ()=> {
                            }
                        }}
                        onSubmitEditing={()=> {
                            this.props.onSubmitEditing ? this.props.onSubmitEditing() : ()=> {
                            }
                        }}
                    />

                    {
                        rightImage == '' ? null :
                            <TouchableOpacity onPress={rightOnPress} style={{padding: 10}}>
                                <Image style={{
                                    width: 12,
                                    height: 12,
                                    marginRight: 5,
                                }} source={rightImage} resizeMode={'contain'}/>
                            </TouchableOpacity>
                    }
                </View>
                <View style={{height: borderBottomWidth, backgroundColor: borderBottomColor, marginHorizontal: 10}}/>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        // this._input.focus();
    }

}
