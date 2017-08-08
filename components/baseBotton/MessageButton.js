//引入原生组件
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS,
    TextInput,
    Platform,
    Navigator,
    Dimensions,

} from 'react-native';


let {width, height} = Dimensions.get('window');

export default class MessageButton extends Component {
    //构造函数,初始化
    constructor(props) {
        super(props);
        this.state = {
            timerCount: props.time ? props.time : 60,
            timerTitle: props.title ? props.title : '获取验证码',
            start: this.props.time ? this.props.time : 60,
            isClickMessageBtn: props.isClickMessageBtn,
            isFirstEnter:'第一次',
        };

    }


    componentWillReceiveProps(nextProps) {


            if(nextProps.isClickMessageBtn == true){

                if(this.state.isFirstEnter =='第一次'){
                    this.setState({isFirstEnter:'OK'});
                }

            }

    }




    xxx() {

        let time = this.props.time ? this.props.time : 60;

        if (this.state.timerCount == time && this.state.start == time) {
            if (this.props.isClickMessageBtn == true) {

                this.props.buttonOnPress(time)

                this.state.start = 0;
                this.interval = setInterval(() => {
                    var timer = this.state.timerCount - 1
                    if (timer === -1) {

                        this.interval && clearInterval(this.interval);

                        this.setState({
                            timerCount: time,
                            timerTitle: '重新获取',
                            start: time
                        })


                    } else {
                        this.setState({
                            timerCount: timer,
                            timerTitle: this.state.timerCount + ' s'
                            // timerTitle: '重新发送' + '(' + this.state.timerCount + 's)'
                        })

                    }
                    //回调
                }, 1000)

            } else {
                this.props.buttonOnPress(time)
            }
        } else {
            this.props.buttonOnPress(time)
        }

    }

    //回调
    messageButtonCallBack() {
        if (this.props.buttonOnPress == null) {
            return;
        } else {
            this.xxx();
        }

    }

    render() {
        let width = this.props.width ? this.props.width : 85;
        let height = this.props.height ? this.props.height : 34;
        let borderRadius = this.props.borderRadius ? this.props.borderRadius : 5;
        let fontSize = this.props.fontSize ? this.props.fontSize : 14;
        let color = this.props.color ? this.props.color : 'white';
        let backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : 'rgb(139,157,173)';
        let borderColor = this.props.borderColor ? this.props.borderColor : 'white';
        let borderWidth = this.props.borderWidth ? this.props.borderWidth : 0.5;


        let isShowTime = this.props.isShowTime ? this.props.isShowTime : false;
        let isClickMessageBtn = this.props.isClickMessageBtn ? this.props.isClickMessageBtn : false;
        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };


        if (isClickMessageBtn == true) {

            if(this.state.isFirstEnter == 'OK')
            {
                this.setState({isFirstEnter:'不要进来了'});
                return (
                    <TouchableOpacity onPress={this.messageButtonCallBack()}
                                      style={{
                                          backgroundColor: backgroundColor,
                                          width: width,
                                          height: height,
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          borderRadius: borderRadius,
                                          borderColor: borderColor,
                                          borderWidth: borderWidth,
                                      }}>
                        <Text style={{color: color, fontSize: fontSize}}>{this.state.timerTitle}</Text>
                    </TouchableOpacity>

                );
            }else{
                return (
                    <TouchableOpacity onPress={()=>this.messageButtonCallBack()}
                                      style={{
                                          backgroundColor: backgroundColor,
                                          width: width,
                                          height: height,
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          borderRadius: borderRadius,
                                          borderColor: borderColor,
                                          borderWidth: borderWidth,
                                      }}>
                        <Text style={{color: color, fontSize: fontSize}}>{this.state.timerTitle}</Text>
                    </TouchableOpacity>

                );
            }


        } else {
            return (
                <TouchableOpacity onPress={onPress}
                                  style={{
                                      backgroundColor: backgroundColor,
                                      width: width,
                                      height: height,
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      borderRadius: borderRadius,
                                      borderColor: borderColor,
                                      borderWidth: borderWidth,
                                  }}>
                    <Text style={{color: color, fontSize: fontSize}}>{'获取验证码'}</Text>
                </TouchableOpacity>

            );
        }


    }

    //关闭定时器
    componentWillUnmount() {
        this.interval && clearTimeout(this.interval);
    }
}


const styles = StyleSheet.create({
    superViewStyle: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column',//默认垂直布局
        alignItems: 'center',//垂直居住
        // flexDirection: 'row', ///横向
        // justifyContent: 'center',横向居住
        backgroundColor: '#EEEEEE',
    },
});


//输入类
module.exports = MessageButton