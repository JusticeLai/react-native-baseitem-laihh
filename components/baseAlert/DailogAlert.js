import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    InteractionManager,
    Platform,
    Text,
    Animated,
    Keyboard,
    Easing,
    Dimensions
} from 'react-native';
import Modal from 'react-native-modalbox';


export default class DailogAlert extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isShowShop: props.isShowShop,

        };
    }

    componentDidMount() {
        // var timing = Animated.timing;
        // Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map(property => {
        //     return timing(this.state[property], {
        //         toValue: 1,
        //         duration: 1000,
        //         easing: Easing.linear
        //     });
        // })).start();
    }


    show () {
        this.setState({isShowShop: true})
    }

    hide () {
        this.setState({isShowShop: false});
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
        let onCLosePress = this.props.onClosePress ? this.props.onClosePress : ()=> {
            this.setState({text:'',isShowShop: false});
            Keyboard.dismiss();
        }

        let onBGPress = this.props.onBGPress ? this.props.onBGPress : ()=> {
        };

        let onChangeText = this.props.onChangeText ? this.props.onChangeText : ()=> {
        };


        let showRightBtn = data.showRightBtn ? data.showRightBtn : true;

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

        let AlertType = this.props.AlertType ? this.props.AlertType : ""; //TextInput  //ImageAlert // PassWordAlert

        let imageURL = this.props.imageURL ? this.props.imageURL : "";



        return (
            <Modal
                key={0}
                style={{backgroundColor: "transparent", height: getheight}}
                ref='modal'
                isOpen={this.state.isShowShop}
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
                        {
                            this.renderChildView(
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
                        }

                    </View>
                </TouchableOpacity>

            </Modal>
        );
    }


    renderChildView(data, onBtnPress, onCLosePress, onChangeText, showRightBtn, TextInputNum, Title,Title2,
                    LeftTitle1, RightPlaceholder1, LeftTitle2, RightPlaceholder2, BtnNum, CancleTitle, ComfireTitle) {

        let secureTextEntry = data.secureTextEntry ? data.secureTextEntry : true;

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

    renderRightBtn (showRightBtn, onCLosePress) {
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
                this.hide();
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
                width:  Dimensions.get('window').width,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopColor: 'rgb(222,222,222)',
                borderTopWidth: 0.5,
                flexDirection: 'row'
            }} activeOpacity={1}>

                {
                    leftTitle != '' ? <TouchableOpacity style={{
                        height: 50,
                        width:  Dimensions.get('window').width / 2,
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
                    width:  Dimensions.get('window').width / 2,
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




}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff'
    }
});