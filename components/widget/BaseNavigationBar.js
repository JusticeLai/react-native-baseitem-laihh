import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Button,
    BackAndroid,
    Platform,
    AsyncStorage,
    Dimensions,
    NativeModules,//与原生通讯
    AppState,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';


export default class BaseNavigationBar extends Component {


    render() {

        let type = this.props.type ? this.props.type : '';
        let SearchImage = this.props.SearchImage ? this.props.SearchImage : '';
        let placeholder = this.props.placeholder ? this.props.placeholder : '请输入关键字';
        let ErrorImage = this.props.ErrorImage ? this.props.ErrorImage : '';
        let backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : 'red';
        let titleColor = this.props.titleColor ? this.props.titleColor : 'white';
        let titleFontSize = this.props.titleFontSize ? this.props.titleFontSize : Platform.OS == 'ios' ? 18 : 18;
        let onLeftPress = this.props.onLeftPress ? this.props.onLeftPress : ()=> {
        };
        let onRightPress = this.props.onRightPress ? this.props.onRightPress : ()=> {
        };
        let onChangeText = this.props.onChangeText ? this.props.onChangeText : ()=> {
        };



        let height = this.props.height ? this.props.height : Platform.OS == 'ios' ? 68 : 50;

        let editable = true;

        if(this.props.editable != undefined){
            editable = this.props.editable;
        }




        return (
            <View style={{height:height, backgroundColor: backgroundColor}}>
                <View style={{height: Platform.OS == 'ios' ? 20 : 0, backgroundColor: backgroundColor}}/>

                {this.renderContainView(type, backgroundColor, titleColor, titleFontSize, onLeftPress,onRightPress, SearchImage,ErrorImage, onChangeText,placeholder,editable)}

            </View>
        )
    }


    renderContainView(type, backgroundColor, titleColor, titleFontSize, onLeftPress,onRightPress, SearchImage,ErrorImage, onChangeText,placeholder,editable) {
        if (type == '') {
            return (
                <View style={{flex: 1}}>
                    <StatusBar  hidden={Platform.OS == 'ios' ? false :true} translucent={Platform.OS == 'ios' ? false :true} backgroundColor={backgroundColor} barStyle="light-content"/>
                    <View style={{
                        flexDirection: 'row',
                        height: 43+5,
                        backgroundColor: backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{flexDirection: 'row', width: 100}}>
                            {this.renderLeftView(this.props.leftArray, onLeftPress)}
                        </View>

                        <View style={{alignItems: 'center', justifyContent: 'center',flex:1}}>
                            <Text numberOfLines={1} style={{color: titleColor, fontSize: titleFontSize}} onPress={()=> {
                            }}>{this.props.title}</Text>
                        </View>

                        <View style={{flexDirection: 'row', width: 100, justifyContent: 'flex-end'}}>
                            {this.renderRightView(this.props.rightArray)}
                        </View>
                    </View>

                </View>
            )
        } else {

            let leftWidth = this.props.leftArray.length *45 ;
            let rightWidth = this.props.rightArray.length *45 ;

            this.props.rightArray.length == 2 ? rightWidth = 70 :null;

            return (
                <View style={{flex: 1}}>
                    <StatusBar backgroundColor={backgroundColor} barStyle="light-content"/>
                    <View style={{
                        flexDirection: 'row',
                        height: 43+5,
                        backgroundColor: backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{flexDirection: 'row', width: leftWidth}}>
                            {this.renderLeftView(this.props.leftArray, onLeftPress)}
                        </View>

                        <TouchableOpacity activeOpacity={1} onPress={onChangeText}
                                          style={{
                                              flex: 1,
                                              height: 43,
                                              alignItems: 'center',
                                              justifyContent: 'flex-start',
                                              backgroundColor: 'transparent',
                                              paddingHorizontal: 10,
                                              flexDirection: 'row',
                                          }}>
                            <View
                                style={{
                                    height: 32,
                                    backgroundColor: 'white',
                                    borderRadius: 20,
                                    left: 5,
                                    right: 5,
                                    top: 5,
                                    bottom: 5,
                                    position: 'absolute'
                                }}/>
                            <Image style={{width: 18, height: 18, marginHorizontal: 5}}  resizeMode={'contain'} source={SearchImage}/>
                            <TextInput
                                style={{fontSize: 14, flex: 1, backgroundColor: 'transparent', paddingVertical: 5,}}
                                returnKeyType="search"
                                ref={'TextInput'}
                                clearButtonMode={'while-editing'}
                                underlineColorAndroid={'transparent'}
                                onChangeText={onChangeText}
                                editable={editable}
                                placeholder={placeholder}/>
                            {
                                Platform.OS === 'android' ?
                                    <TouchableOpacity activeOpacity={1} onPress={()=> {
                                        this.refs.TextInput.clear()
                                    }}>
                                        <Image style={{width: 13, height: 13, marginHorizontal: 5}}
                                               source={ErrorImage}/>
                                    </TouchableOpacity>
                                    : null
                            }

                        </TouchableOpacity>

                        <View style={{flexDirection: 'row', width: rightWidth, justifyContent: 'flex-end'}}>
                            {this.renderRightView(this.props.rightArray)}
                        </View>
                    </View>

                </View>
            )
        }
    }


    renderLeftView = (leftArray, onLeftPress) => {
        // let leftImage1 = require('../images/left_icon.png');
        let leftArrayX = leftArray;
        if (leftArray == null) {
            leftArrayX = [];
            // leftArrayX = [{image: leftImage1}]
        }
        return (
            <View style={{
                height: 44,
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                {
                    leftArrayX.map((item, index) =>
                        <TouchableOpacity
                            style={{height: 44, justifyContent: 'center', alignItems: 'flex-start',}}
                            key={index}
                            onPress={()=> {
                                onLeftPress(index)
                            }}>
                            {
                                item.title ?
                                    <Text style={{color: 'white', marginLeft: 12}}>{item.title}</Text>
                                    : null
                            }
                            {
                                item.image ?
                                    <Image source={item.image} style={{marginLeft: 12, width: 20, height: 20}}
                                           resizeMode={'contain'}/>
                                    : null
                            }
                        </TouchableOpacity>
                    )
                }
            </View>
        );
    }


    onLeftPress = ()=> {
        console.warn('测试')

    }

    renderRightView = (rightArray) => {
        let rightArrayX = rightArray;

        if (rightArray == null) {
            rightArrayX = [];
        }

        return (
            <View style={{
                height: 44,
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                {
                    rightArrayX.map((item, index) =>
                        <TouchableOpacity
                            style={{height: 44, justifyContent: 'center', alignItems: 'flex-start',}}
                            key={index}
                            onPress={()=> {
                                this.props.rightOnPress(index)
                            }}>
                            {
                                item.title ?
                                    <Text style={{
                                        color: 'white',
                                        marginRight: 12,
                                        fontSize: item.fontSize ? item.fontSize : 14
                                    }}>{item.title}</Text>
                                    : null
                            }
                            {
                                item.image ?
                                    <Image source={item.image} style={{marginRight: 12, width: 20, height: 20}}
                                           resizeMode={'contain'}/>
                                    : null
                            }
                        </TouchableOpacity>
                    )
                }
            </View>
        );
    }


}

