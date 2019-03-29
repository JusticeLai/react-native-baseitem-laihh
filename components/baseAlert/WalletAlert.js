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
    Image,
    Text,
    Animated,
    Keyboard,
    Easing,
    Dimensions
} from 'react-native';
import Modal from 'react-native-modalbox';


export default class  WalletAlert extends Component {


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


    show() {
        this.setState({isShowShop: true})
    }

    hide() {
        this.setState({isShowShop: false});
    }


    render() {

        let getwidth = Dimensions.get('window').width;
        let getheight = Dimensions.get('window').height;

        let data = this.props.data ? this.props.data : {};
        let height = data.height ? data.height : 350;


        let marginBottom = data.marginBottom ? data.marginBottom : getheight /3;
        let width = getwidth * 0.7;

        let onBtnPress = this.props.onBtnPress ? this.props.onBtnPress : ()=> {
        };
        let onCLosePress = this.props.onClosePress ? this.props.onClosePress : ()=> {
            this.setState({text: '', isShowShop: false});
            Keyboard.dismiss();
        }

        let onBGPress = this.props.onBGPress ? this.props.onBGPress : ()=> {
        };

        let onChangeText = this.props.onChangeText ? this.props.onChangeText : ()=> {
        };


        let showRightBtn = data.showRightBtn ? data.showRightBtn : true;

        let TextInputNum = data.TextInputNum ? data.TextInputNum : 2;
        let type = data.type ? data.type : '';
        let BtnNum = data.BtnNum ? data.BtnNum : 2;

        let Title = data.Title ? data.Title : '请设置新的支付密码';
        let Title2 = data.Title2 ? data.Title2 : '钱包';
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
                                type,
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


    renderChildView(data, type, onBtnPress, onCLosePress, onChangeText, showRightBtn, TextInputNum, Title, Title2,
                    LeftTitle1, RightPlaceholder1, LeftTitle2, RightPlaceholder2, BtnNum, CancleTitle, ComfireTitle) {

        let secureTextEntry = data.secureTextEntry ? data.secureTextEntry : true;

        return (
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'}}>
                {this.renderRightBtn(showRightBtn, onCLosePress)}
                {this.renderImage()}
                {this.renderTitle(data.title,14)}
                {this.renderTitle(data.title2,14)}
                {this.renderTitle(data.title3,16,'bold')}
                {this.renderBtn(onBtnPress)}
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
                this.hide();
                onCLosePress()
            }}>
                <Text>{'X'}</Text>
            </TouchableOpacity> : null
        )
    }

    renderTitle(title,fontSize,fontWeight) {
        return (
            <View style={{
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <Text style={{fontSize: fontSize, fontWeight: fontWeight}}>{title}</Text>
            </View>
        )
    }

    renderImage(type) {

        let url = 'green'
        if(type == 'success'){
            url = 'green'
        }else if(type == 'fail'){
            url = 'red'
        }
        return (
            <View style={{flex: 1}}>
                <Image
                    style={{width: 60, height: 60, backgroundColor: url,marginVertical:20}}
                />
            </View>

        )
    }


    renderBtn(onBtnPress, leftTitle, rightTitle) {

        return (
            <TouchableOpacity onPress={onBtnPress} style={{borderColor:'lightgray',borderWidth:2,width:80,height:80,borderRadius:80,marginVertical:30,justifyContent:'center',alignItems:'center'}}>
                <Text>{'开'}</Text>
            </TouchableOpacity>
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