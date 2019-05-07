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


export default class WalletAlert extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isShowShop: props.isShowShop,
            AlertType: '0' //0红包展示界面  1红包详情
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
        this.setState({isShowShop: true,AlertType:'0'})
    }

    hide() {
        this.setState({isShowShop: false,AlertType:'0'});
    }


    render() {

        let getwidth = Dimensions.get('window').width;
        let getheight = Dimensions.get('window').height;

        let data = this.props.data ? this.props.data : {};
        let height = data.height ? data.height : 350;


        let marginBottom = data.marginBottom ? data.marginBottom : getheight / 3;
        let width = getwidth * 0.7;

        let onBtnPress = this.props.onBtnPress ? this.props.onBtnPress : ()=> {
        };

        let onClosePress = this.props.onClosePress ? this.props.onClosePress : ()=> {}

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
                        backgroundColor:'transparent',
                        justifyContent: 'center',
                        marginBottom: marginBottom
                    }}>
                        {this.state.AlertType == '0' ?
                            this.renderChildView(
                                data,
                                type,
                                ()=>{  this.setState({AlertType:'1'});onBtnPress(0)},
                                ()=>{  this.hide();onClosePress(0)},
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
                            ) :
                            this.renderChildView2(
                                data,
                                type,
                                ()=>{ onBtnPress(1)},
                                ()=>{  this.hide();onClosePress(1)},
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
        let getwidth = Dimensions.get('window').width;

        return (
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'}}>
                {/*<View style={{width:getwidth*0.9,height:100,backgroundColor:rgb(144,49,40),position:'absolute',left:-getwidth*0.1,bottom:0,borderRadius:100}}/>*/}
                {/*<View style={{width:getwidth*0.9,height:330,backgroundColor:rgb(250,57,49),position:'absolute',left:-getwidth*0.1,top:-50,borderRadius:100}}/>*/}
                <Image source={data.image} resizeMode={'contain'} style={{width:getwidth,position:'absolute',top:0,left:-63,height:350,zIndex:10}}/>
                {this.renderRightBtn(showRightBtn, onCLosePress)}
                {this.renderImage(data.userInfo.logoUrl)}
                {this.renderTitle(data.userInfo.storeName, 20,'bold',0)}
                {this.renderTitle('恭喜您获得一个现金红包',14,'normal',70)}
                {this.renderBtn(onBtnPress)}
            </View>
        )
    }


    renderChildView2(data, type, onBtnPress, onCLosePress, onChangeText, showRightBtn, TextInputNum, Title, Title2,
                     LeftTitle1, RightPlaceholder1, LeftTitle2, RightPlaceholder2, BtnNum, CancleTitle, ComfireTitle) {

        let userInfo = data.userInfo
        let getwidth = Dimensions.get('window').width;
        return (
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'}}>
                <Image source={data.image2} resizeMode={'contain'} style={{width:getwidth,position:'absolute',top:0,left:-63,height:350,zIndex:10}}/>
                {this.renderRightBtn(showRightBtn, onCLosePress)}
                {this.renderBtn2(onBtnPress,userInfo.storeName,userInfo.money)}
            </View>
        )
    }


    renderRightBtn(showRightBtn, onCLosePress) {
        return (
            showRightBtn == true ? <TouchableOpacity style={{
                height: 25,
                width: 25,
                position: 'absolute',
                right: 5,
                top: 0,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                borderRadius: 20,
                borderColor: 'rgb(200,200,200)',
                borderWidth: 1,
                alignItems: 'center',
                zIndex:11,
            }} onPress={onCLosePress}>
                <Text style={{color:'rgb(200,200,200)'}}>{'X'}</Text>
            </TouchableOpacity> : null
        )
    }

    renderTitle(title, fontSize, fontWeight,marginBottom) {
        return (
            <View style={{
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor:'transparent',
                marginBottom:marginBottom,
                zIndex:11,
            }}>
                <Text style={{fontSize: fontSize, fontWeight: fontWeight, zIndex:11,  color:'white',}}>{title}</Text>
            </View>
        )
    }

    renderImage(type) {

        // let url = 'green'
        // if (type == 'success') {
        //     url = 'green'
        // } else if (type == 'fail') {
        //     url = 'red'
        // }
        return (
            <View style={{flex: 1,zIndex:100, }}>
                <Image style={{width: 76, height: 76, borderRadius:38,zIndex:100,marginRight:Platform.OS == 'ios' ? 16 :13,borderWidth:3, borderColor:'rgb(248,164,168)'}} source={{uri:type}}/>
            </View>

        )
    }


    renderBtn(onBtnPress, leftTitle, rightTitle) {

        return (
            <TouchableOpacity onPress={onBtnPress} style={{
                width: 80,
                height: 80,
                borderRadius: 80,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom:50,
                marginRight:10,
                backgroundColor:'transparent',
                zIndex:100,
            }}>
                <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>{}</Text>
            </TouchableOpacity>
        )
    }



    renderBtn2(onBtnPress,storeName, money) {

        return (
            <View style={{justifyContent:'flex-end',alignItems:'center',flex:1,flexDirection:'column',zIndex:100, }}>

                <View>
                    <Text style={{marginTop:20,fontSize:20,color:'white'}}>{storeName}</Text>
                </View>
                <View>
                    <Text style={{color:'gray',marginTop:5,fontSize:12,color:'white'}}>感谢你的惠顾</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row',marginTop:70,marginRight:20}}>
                    <Text style={{color:'rgb(176,37,48)',fontSize:30}}>{'￥'}</Text>
                    <Text style={{color:'rgb(176,37,48)',fontSize:50,fontWeight:'bold'}}>{money}</Text>
                </View>
                <View>
                    <Text style={{color:'gray',fontSize:12,marginBottom:35}}>{'红包可全店畅买无限制'}</Text>
                </View>
                <View style={{height:20,marginTop:5,marginBottom:13}}>
                    <Text style={{color:'white',fontSize:12}}>{'可以前往我的钱包查看'}</Text>
                </View>
                <TouchableOpacity onPress={onBtnPress} style={{
                    width: 200,
                    height: 36,
                    marginBottom: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 36,
                    backgroundColor:'#FF0532'

                }}>
                    <Text style={{ color:'white',fontSize:16}}>{'立即前往'}</Text>
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