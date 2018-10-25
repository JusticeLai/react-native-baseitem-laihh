import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    Text,
    Image,
    TouchableHighlight,
    View,
    TextInput,
    TouchableOpacity,
    InteractionManager,
    Keyboard,
    ScrollView,
    Dimensions
} from 'react-native';
let {width, height} = Dimensions.get('window');
import Modal from 'react-native-modalbox';

import Password from './PWD';
import TextInputAlert from './TextInputAlert';
import DailogAlert from './DailogAlert';
import ImageAlert from './ImageAlert';
import CodePushAlert from './CodePushAlertView';


export default class BaseAlert extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            text: ''
        };


    }


    componentDidMount() {
        if (this.props.autoFocus) {
            InteractionManager.runAfterInteractions(() => {
                this._onPress();
            });
        }
    }

    showAlert(options) {

        let AlertType = this.props.AlertType ? this.props.AlertType : ""; //TextInputAlert  //ImageAlert // PassWordAlert //DailLogAlert

        if (AlertType == 'PassWordAlert') {
            this.alertView.show();
        }else if(AlertType == 'TextInputAlert'){
            this.alertView2.show();
        } else if(AlertType == 'DailLogAlert'){
            this.alertView3.show();
        }  else if(AlertType == 'ImageAlert'){
            this.alertView4.show();
        } else {
            this.setState({
                modalVisible: true,
            })
        }
    }

    hiddenAlert() {

        let AlertType = this.props.AlertType ? this.props.AlertType : ""; //TextInputAlert  //ImageAlert // PassWordAlert //DailLogAlert

        if (AlertType == 'PassWordAlert') {
            this.alertView.hide();
        }else if(AlertType == 'TextInputAlert'){
            this.alertView2.hide();
        } else if(AlertType == 'DailLogAlert'){
            this.alertView3.hide();
        } else if(AlertType == 'ImageAlert'){
            this.alertView4.hide();
        } else {
            this.setState({
                modalVisible: false
            })
        }
    }


    render() {
        let getwidth = Dimensions.get('window').width;
        let getheight = Dimensions.get('window').height;
        let data = this.props.data ? this.props.data : {};
        let height = data.height ? data.height : 220;


        let marginBottom = data.marginBottom ? data.marginBottom : getheight / 2;
        let width = getwidth * 0.85;

        let onBtnPress = this.props.onBtnPress ? this.props.onBtnPress : ()=> {
        };
        let onCLosePress = this.props.onCLosePress ? this.props.onCLosePress : ()=> {
        };
        let onBGPress = this.props.onBGPress ? this.props.onBGPress : ()=> {
        };

        let onChangeText = this.props.onChangeText ? this.props.onChangeText : ()=> {
        };


        let showRightBtn = data.showRightBtn ? data.showRightBtn : false;

        let TextInputNum = data.TextInputNum ? data.TextInputNum : 2;
        let BtnNum = data.BtnNum ? data.BtnNum : 2;

        let Title = data.Title ? data.Title : '请设置新的支付密码';
        let Title2 = data.Title2 ? data.Title2 : '小标题';
        let LeftTitle1 = data.LeftTitle1 || data.LeftTitle1 == '' ? data.LeftTitle1 : '新密码:';
        let RightPlaceholder1 = data.RightPlaceholder1 ? data.RightPlaceholder1 : '请输入新的支付密码';

        let LeftTitle2 = data.LeftTitle2 ? data.LeftTitle2 : '确认密码:';
        let RightPlaceholder2 = data.RightPlaceholder2 ? data.RightPlaceholder2 : '请输入确认支付密码';


        let CancleTitle = data.CancleTitle ? data.CancleTitle : '取消';
        let ComfireTitle = data.ComfireTitle ? data.ComfireTitle : '确定';

        let renderChildView = this.props.renderChildView ? this.props.renderChildView : null;

        let AlertType = this.props.AlertType ? this.props.AlertType : ""; //TextInputAlert  //ImageAlert // PassWordAlert //DailLogAlert

        let imageURL = this.props.imageURL ? this.props.imageURL : "";


        if (AlertType == 'PassWordAlert') {
            return <Password ref={c => this.alertView = c} maxLength={6}/>
        }else if (AlertType == 'TextInputAlert') {
            return <TextInputAlert   ref={c => this.alertView2 = c} data={data} />
        }else if (AlertType == 'DailLogAlert') {
            return <DailogAlert   ref={c => this.alertView3 = c} data={data} />
        }else if (AlertType == 'ImageAlert') {
            return <ImageAlert imageURL ={imageURL}  ref={c => this.alertView4 = c} data={data} />
        }




        return (
            <Modal
                key={0}
                style={{backgroundColor: "transparent", height: getheight}}
                ref='modal'
                isOpen={this.state.modalVisible}
                animationDuration={600}
                swipeArea={20}
                backdropOpacity={0.7}
                position={"center"}
                swipetoclose={true}
                backButtonClose={false}
                backdropPressToClose={true}
            >

                <TouchableOpacity activeOpacity={1} onPress={()=> {
                    Keyboard.dismiss()
                    onBGPress()
                }} style={{
                    width: getwidth,
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
                                  onStartShouldSetResponder={ (evt) => true}
                                  onResponderTerminationRequest={(evt) => false}>


                    <View style={{
                        width: width,
                        height: height,
                        borderRadius: 12,
                        backgroundColor: "rgb(255,255,255)",
                        justifyContent: 'center',
                        marginBottom: marginBottom
                    }}>

                        {this.init(
                            data,
                            AlertType,
                            renderChildView,
                            onBtnPress,
                            onCLosePress,
                            onChangeText,
                            showRightBtn,
                            TextInputNum,
                            Title,
                            Title2,
                            LeftTitle1,
                            RightPlaceholder1,
                            LeftTitle2,
                            RightPlaceholder2,
                            BtnNum,
                            CancleTitle,
                            ComfireTitle,
                            imageURL)}

                    </View>
                </TouchableOpacity>

            </Modal>
        );
    }


    init(data,
         AlertType,
         renderChildView,
         onBtnPress,
         onCLosePress,
         onChangeText,
         showRightBtn,
         TextInputNum,
         Title,
         Title2,
         LeftTitle1,
         RightPlaceholder1,
         LeftTitle2,
         RightPlaceholder2,
         BtnNum,
         CancleTitle,
         ComfireTitle,
         imageURL) {
        if (AlertType == '') {
            return this.renderChildView2(
                data,
                onBtnPress,
                onCLosePress,
                onChangeText,
                showRightBtn,
                TextInputNum,
                Title,
                Title2,
                LeftTitle1,
                RightPlaceholder1,
                LeftTitle2,
                RightPlaceholder2,
                BtnNum,
                CancleTitle,
                ComfireTitle
            )
        } else if (AlertType == 'TextInput') {
            return this.initTextAlert(data, renderChildView, onBtnPress,
                onCLosePress,
                onChangeText,
                showRightBtn,
                TextInputNum,
                Title,
                LeftTitle1,
                RightPlaceholder1,
                LeftTitle2,
                RightPlaceholder2,
                BtnNum,
                CancleTitle,
                ComfireTitle);

        } else if (AlertType == 'ImageAlert') {
            return this.renderChildView3(
                data,
                renderChildView,
                onBtnPress,
                onCLosePress,
                onChangeText,
                showRightBtn,
                TextInputNum,
                Title,
                LeftTitle1,
                RightPlaceholder1,
                LeftTitle2,
                RightPlaceholder2,
                BtnNum,
                CancleTitle,
                ComfireTitle,
                imageURL,
            );
        } else if (AlertType == 'PassWordAlert') {
            return (
                <TouchableHighlight
                    onPress={this._onPress.bind(this)}
                    activeOpacity={1}
                    underlayColor='transparent'>
                    <View style={[styles.container, this.props.style]}>
                        <TextInput
                            style={{height: 45, zIndex: 99, position: 'absolute', width: 45 * 6, opacity: 0}}
                            ref='textInput'
                            maxLength={this.props.maxLength}
                            autoFocus={false}
                            keyboardType="number-pad"
                            onChangeText={
                                (text) => {
                                    this.setState({text});
                                    this.props.onChange(text);
                                    if (text.length === this.props.maxLength) {
                                        this.props.onEnd(text);
                                    }
                                }
                            }
                        />
                        {
                            this._getInputItem()
                        }
                    </View>
                </TouchableHighlight>
            )
        }


    }


    initTextAlert(data, renderChildView,
                  onBtnPress,
                  onCLosePress,
                  onChangeText,
                  showRightBtn,
                  TextInputNum,
                  Title,
                  LeftTitle1,
                  RightPlaceholder1,
                  LeftTitle2,
                  RightPlaceholder2,
                  BtnNum,
                  CancleTitle,
                  ComfireTitle) {
        return renderChildView != null ? renderChildView : this.renderChildView(
            data,
            onBtnPress,
            onCLosePress,
            onChangeText,
            showRightBtn,
            TextInputNum,
            Title,
            LeftTitle1,
            RightPlaceholder1,
            LeftTitle2,
            RightPlaceholder2,
            BtnNum,
            CancleTitle,
            ComfireTitle
        )
    }


    renderChildView(data, onBtnPress, onCLosePress, onChangeText, showRightBtn, TextInputNum, Title,
                    LeftTitle1, RightPlaceholder1, LeftTitle2, RightPlaceholder2, BtnNum, CancleTitle, ComfireTitle) {

        let secureTextEntry = data.secureTextEntry ? data.secureTextEntry : true;

        return (
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'}}>
                {this.renderRightBtn(showRightBtn, onCLosePress)}
                {this.renderTitle(Title)}
                {this.renderPDW1(onChangeText, 0, LeftTitle1, RightPlaceholder1, secureTextEntry)}

                {
                    TextInputNum == 2 ? this.renderPDW2(onChangeText, 1, LeftTitle2, RightPlaceholder2, secureTextEntry) : null
                }

                {
                    BtnNum == 2 ? this.renderBtn(onBtnPress, CancleTitle, ComfireTitle) : this.renderBtn(onBtnPress, '', ComfireTitle)
                }
            </View>
        )
    }

    renderChildView2(data, onBtnPress, onCLosePress, onChangeText, showRightBtn, TextInputNum, Title,
                     Title2, LeftTitle1, RightPlaceholder1, LeftTitle2, RightPlaceholder2, BtnNum, CancleTitle,
                     ComfireTitle) {
        return (
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'}}>
                {this.renderRightBtn(showRightBtn, onCLosePress)}
                {this.renderTitle(Title)}
                {this.renderTitle2(Title2)}
                {
                    BtnNum == 2 ? this.renderBtn(onBtnPress, CancleTitle, ComfireTitle) : this.renderBtn(onBtnPress, '', ComfireTitle)
                }
            </View>
        )
    }


    renderChildView3(data, renderChildView, onBtnPress, onCLosePress, onChangeText, showRightBtn,
                     TextInputNum, Title, LeftTitle1, RightPlaceholder1, LeftTitle2, RightPlaceholder2, BtnNum, CancleTitle,
                     ComfireTitle, imageURL) {

        let AlertType = this.props.AlertType ? this.props.AlertType : ""; //TextInput  //ImageAlert
        let secureTextEntry = data.secureTextEntry ? data.secureTextEntry : true;

        if (AlertType = 'ImageAlert') {
            secureTextEntry = false;
        }

        return (
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'}}>
                {this.renderRightBtn(showRightBtn, onCLosePress)}
                <TouchableOpacity style={{
                    height: 44,
                    width: 320,
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }} activeOpacity={1} onPress={()=> {
                    onBtnPress(2)
                }}>
                    <Image style={{width: 130, height: 44}}
                           source={{uri: imageURL}}/>

                </TouchableOpacity>

                {this.renderPDW1(onChangeText, 0, LeftTitle1, RightPlaceholder1, secureTextEntry)}

                {
                    BtnNum == 2 ? this.renderBtn(onBtnPress, CancleTitle, ComfireTitle) : this.renderBtn(onBtnPress, '', ComfireTitle)
                }
            </View>
        )
    }


    renderRightBtn(showRightBtn, onCLosePress) {
        return (
            showRightBtn == true ? <TouchableOpacity style={{
                height: 30,
                width: 30,
                position: 'absolute',
                right: 5,
                top: 5,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                borderRadius: 20,
                borderColor: 'rgb(200,200,200)',
                borderWidth: 1,
                alignItems: 'center'
            }} onPress={()=> {
                this.hiddenAlert();
                onCLosePress()
            }}>
                <Text>{'X'}</Text>
            </TouchableOpacity> : null
        )
    }

    renderTitle (title) {
        return (
            <View style={{
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
            </View>
        )
    }

    renderTitle2 (title) {
        return (
            <View style={{
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginHorizontal: 10,
            }}>
                <Text style={{fontSize: 14}}>{title}</Text>
            </View>
        )
    }


    renderBtn (onBtnPress, leftTitle, rightTitle) {
        return (
            <View style={{
                height: 50,
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopColor: 'rgb(222,222,222)',
                borderTopWidth: 0.5,
                flexDirection: 'row'
            }} activeOpacity={1}>

                {
                    leftTitle != '' ? <TouchableOpacity style={{
                        height: 50,
                        width: width / 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRightColor: 'rgb(222,222,222)',
                        borderRightWidth: 0.5,
                    }} activeOpacity={1} onPress={()=> {
                        onBtnPress(0)
                    }}>
                        <Text style={{color: 'gray', fontSize: 16}}>{leftTitle}</Text>
                    </TouchableOpacity> : null
                }


                <TouchableOpacity style={{
                    height: 50,
                    width: width / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }} activeOpacity={1} onPress={()=> {
                    onBtnPress(1)
                }}>
                    <Text style={{color: 'rgb(77,145,255)', fontSize: 16}}>{rightTitle}</Text>
                </TouchableOpacity>
            </View>
        )
    }


    renderPDW1 (onChangeText, index, leftTitle, placeholder, secureTextEntry) {

        return (
            <View style={{
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                {
                    leftTitle.length > 0
                        ?
                        <View style={{width: 70}}>
                            <Text>{leftTitle}</Text>
                        </View>
                        : null
                }

                <View style={{
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgb(234,234,234)',
                    borderRadius: 5,
                    flexDirection: 'row'
                }}>
                    <TextInput ref={c => this.pwd1 = c} style={{
                        height: 35,
                        width: 180,
                        textAlign: 'left',
                        fontSize: 14,
                        paddingLeft: 15,
                        paddingVertical: 0,
                        paddingRight: 5
                    }}
                               maxLength={6}
                               secureTextEntry={secureTextEntry}
                               clearButtonMode={'while-editing'}
                               underlineColorAndroid='transparent'
                               placeholderTextColor={'gray'}
                               placeholder={placeholder}
                               onChangeText={(text)=> {
                                   onChangeText(text, index)
                               }}
                    />
                    {
                        Platform.OS == 'android' ? <TouchableOpacity style={{
                            height: 16,
                            width: 16,
                            backgroundColor: 'gray',
                            justifyContent: 'center',
                            borderRadius: 20,
                            borderColor: 'rgb(200,200,200)',
                            borderWidth: 1,
                            alignItems: 'center',
                            marginRight: 5
                        }} onPress={()=> {
                            this.pwd1.clear();
                        }}>
                            <Text style={{color: 'white', fontSize: 10, padding: 0, paddingBottom: 2}}>{'x'}</Text>

                        </TouchableOpacity>
                            : null
                    }

                </View>
            </View>
        )
    }


    renderPDW2(onChangeText, index, leftTitle, placeholder) {
        return (
            <View style={{
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <View style={{width: 70}}>
                    <Text>{leftTitle}</Text>
                </View>
                <View style={{
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgb(234,234,234)',
                    borderRadius: 5,
                    flexDirection: 'row'
                }}>
                    <TextInput ref={c => this.pwd2 = c} style={{
                        height: 35,
                        width: 180,
                        textAlign: 'left',
                        fontSize: 14,
                        paddingLeft: 15,
                        paddingVertical: 0,
                        paddingRight: 5
                    }}
                               maxLength={6}
                               secureTextEntry={true}
                               clearButtonMode={'while-editing'}
                               underlineColorAndroid='transparent'
                               placeholderTextColor={'gray'}
                               placeholder={placeholder}
                               onChangeText={(text)=> {
                                   onChangeText(text, index)
                               }}
                    />
                    {
                        Platform.OS == 'android' ? <TouchableOpacity style={{
                            height: 16,
                            width: 16,
                            backgroundColor: 'gray',
                            justifyContent: 'center',
                            borderRadius: 20,
                            borderColor: 'rgb(200,200,200)',
                            borderWidth: 1,
                            alignItems: 'center',
                            marginRight: 5
                        }} onPress={()=> {
                            this.pwd2.clear();
                        }}>
                            <Text style={{color: 'white', fontSize: 10, padding: 0, paddingBottom: 2}}>{'x'}</Text>

                        </TouchableOpacity>
                            : null
                    }

                </View>
            </View>
        )
    }

    _getInputItem() {
        let inputItem = [];
        let {text}=this.state;
        for (let i = 0; i < parseInt(this.props.maxLength); i++) {
            if (i == 0) {
                inputItem.push(
                    <View key={i} style={[styles.inputItem, this.props.inputItemStyle]}>
                        {i < text.length ? <View style={[styles.iconStyle, this.props.iconStyle]}/> : null}
                    </View>)
            }
            else {
                inputItem.push(
                    <View key={i}
                          style={[styles.inputItem, styles.inputItemBorderLeftWidth, this.props.inputItemStyle]}>
                        {i < text.length ?
                            <View style={[styles.iconStyle, this.props.iconStyle]}>
                            </View> : null}
                    </View>)
            }
        }
        return inputItem;
    }

    _onPress() {
        this.refs.textInput.focus();
    }

}

const styles = StyleSheet.create({
    borderLeft: {
        borderLeftWidth: 1,
        borderLeftColor: "#e1e1e1"
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff'
    },
    inputItem: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputItemBorderLeftWidth: {
        borderLeftWidth: 1,
        borderColor: '#ccc',
    },
    iconStyle: {
        width: 16,
        height: 16,
        backgroundColor: '#222',
        borderRadius: 8,
    },
});
