import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Modal,
    Text,
    Image,
    TouchableHighlight,
    View,
    TextInput,
    TouchableOpacity,
    InteractionManager,
    Keyboard,
    Dimensions
} from 'react-native';
let {width, height} = Dimensions.get('window');

import CodePush from "react-native-code-push";

export default class CodePushAlertView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            totalBytes: '',
            receivedBytes: '',
            text: '',
            title: '',
            isShowDownLoading: false,
            options: {}
        };

    }


    isHaveCodePushUpdate() {
        // this.showAlert()

        this.get('http://devgomanage.g2l-service.com/getVersions?osType=0', response=> {
            if (response.status == 0) {
                // console.warn(response.data.title)
                if (response.data.title == '上线') {
                    console.warn('上线可以热更新')
                    this.checkForUpdateStr()
                }else{
                    console.warn('下线不可以热更新')
                }
            } else {
                console.warn('服务器异常......')

            }
        }, error=> {
            this.checkForUpdateStr()
            console.warn('网络异常......')
            console.log(JSON.stringify(error))
        })
        // console.warn('执行热更新检查')
        // CodePush.checkForUpdate()
        //     .then((update) => {
        //         if (!update) {
        //             console.warn('热更新已是最新新版了!')
        //             // this.Toast('app是最新版了');
        //         } else {
        //             console.warn('有热更新!')
        //             this.codePush();
        //             // return;
        //             // this.Toast('有更新哦');
        //             //后台强制更新---或者选择更新----需要对话框提示---显示进度条
        //         }
        //     }).catch((error)=>{
        //     console.warn('热更新服务器异常!')
        //     console.warn(error)
        // })

    }

    checkForUpdateStr() {
        // console.warn('执行热更新检查')
        CodePush.checkForUpdate()
            .then((update) => {
                if (!update) {
                    console.warn('热更新已是最新新版了!')
                    // this.Toast('app是最新版了');
                } else {
                    console.warn('有热更新!')
                    this.codePush();
                    // return;
                    // this.Toast('有更新哦');
                    //后台强制更新---或者选择更新----需要对话框提示---显示进度条
                }
            }).catch((error)=>{
            console.warn('热更新服务器异常!')
            console.warn(error)
        })
    }


    codePush() {
        CodePush.sync({
                updateDialog: {

                    appendReleaseDescription: true,//是否显示更新description，默认为false

                    descriptionPrefix: "更新内容：",//更新说明的前缀。 默认是” Description:

                    mandatoryContinueButtonLabel: "立即更新",//强制更新的按钮文字，默认为continue

                    mandatoryUpdateMessage: "",//- 强制更新时，更新通知. Defaults to “An update is available that must be installed.”.

                    optionalIgnoreButtonLabel: '稍后',//非强制更新时，取消按钮文字,默认是ignore

                    optionalInstallButtonLabel: '立即更新',//非强制更新时，确认文字. Defaults to “Install”

                    optionalUpdateMessage: '有新版本了，是否更新？',//非强制更新时，更新通知. Defaults to “An update is available. Would you like to install it?”.

                    title: '更新提示'//要显示的更新通知的标题. Defaults to “Update available”.
                },
                installMode: CodePush.InstallMode.IMMEDIATE,
                checkFrequency: CodePush.CheckFrequency.MANUAL
            },
            (status) => {
                switch (status) {
                    case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                        console.warn('codePush.SyncStatus.CHECKING_FOR_UPDATE');
                        break;
                    case CodePush.SyncStatus.AWAITING_USER_ACTION:
                        console.warn('codePush.SyncStatus.AWAITING_USER_ACTION');
                        break;
                    case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                        this.showAlert()
                        console.warn('codePush.SyncStatus.DOWNLOADING_PACKAGE');
                        break;
                    case CodePush.SyncStatus.INSTALLING_UPDATE:
                        console.warn('codePush.SyncStatus.INSTALLING_UPDATE');
                        break;
                    case CodePush.SyncStatus.UP_TO_DATE:
                        console.warn('codeP ush.SyncStatus.UP_TO_DATE');
                        break;
                    case CodePush.SyncStatus.UPDATE_IGNORED:
                        console.warn('codePush.SyncStatus.UPDATE_IGNORED');
                        break;
                    case CodePush.SyncStatus.UPDATE_INSTALLED:
                        this.hiddenAlert();
                        console.warn('codePush.SyncStatus.UPDATE_INSTALLED');
                        break;
                    case CodePush.SyncStatus.SYNC_IN_PROGRESS:
                        console.warn('codePush.SyncStatus.SYNC_IN_PROGRESS');
                        break;
                    case CodePush.SyncStatus.UNKNOWN_ERROR:
                        this.hiddenAlert('错误');
                        console.warn('codePush.SyncStatus.UNKNOWN_ERROR');
                        break;
                }
            },
            ({receivedBytes, totalBytes}) => {
                let text = (receivedBytes / totalBytes * 100).toFixed(2)
                this.setState({title: totalBytes, text: text + '%'});
            }
        );
    }


    showAlert(options) {
        // this.props.onPress(0)
        this.setState({
            modalVisible: true,
            options: options,
            isShowDownLoading: false
        })
    }

    hiddenAlert(message) {
        // this.props.onPress(1)
        if(message == '错误'){
            this.setState({
                modalVisible: false,
                isShowDownLoading: false
            })
        }else{
            this.setState({
                modalVisible: false,
                isShowDownLoading: true
            })
        }

    }


    renderCodePushView() {
        let options = this.state.options;
        let getwidth = Dimensions.get('window').width;
        let getheight = Dimensions.get('window').height;
        let data = this.props.data ? this.props.data : {};
        let height = data.height ? data.height : 120;
        let width = getwidth * 0.85;
        let onBGPress = this.props.onBGPress ? this.props.onBGPress : ()=> {
        };

        let title = this.state.title ? this.state.title : '';
        let totalBytes = this.props.totalBytes ? this.props.totalBytes : '';
        let receivedBytes = this.props.receivedBytes ? this.props.receivedBytes : '';

        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={this.hiddenAlert.bind()}
            >
                <TouchableOpacity activeOpacity={1} onPress={()=> {
                    Keyboard.dismiss()
                    onBGPress()
                }} style={{
                    width: getwidth,
                    height: getheight,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    top: 0,
                    left: 0,
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
                    }}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={()=> {
                                this.hiddenAlert()
                            }} style={{position: 'absolute', right: 20, top: 10}}>
                                <Text>X</Text>
                            </TouchableOpacity>
                            <View style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
                                <Text
                                    style={{fontSize: 20}}>{title == '' || title == NaN || title == undefined ? '正在更新中.....' : '更新大小' + parseFloat(title / 1024 / 1024).toFixed(2) + 'Mb'}</Text>
                            </View>

                            <Text> {this.state.text}</Text>
                            {/*{*/}

                            {/*totalBytes == '' || receivedBytes == '' ? null :*/}
                            {/*<Text>{totalBytes+'/'+ receivedBytes}</Text>*/}
                            {/*}*/}
                        </View>

                    </View>
                </TouchableOpacity>
            </Modal>
        );
    }

    render() {

        if (this.state.isShowDownLoading == true) {
            return (
                <TouchableOpacity onPress={()=> {
                    this.showAlert()
                }} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    right: 20,
                    bottom: 100,
                    backgroundColor: 'red',
                    width: 50,
                    height: 50,
                    borderRadius: 50
                }}>
                    <Text style={{backgroundColor: 'transparent'}}>下载中</Text>
                </TouchableOpacity>
            )
        } else {
            return this.renderCodePushView()
        }

    }

    get(url, success, fail) {
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                "Connection": "close",
                "type": "getUserData"
            },
        }).then(response=>response.json())//把response转为json
            .then(responseJson=> { // 拿到上面的转好的json
                console.log(responseJson) // 打印返回结果
                success && success(responseJson)
            })
            .catch(e=> {
                console.log(e)
                fail && fail(e)
            })
    }

}
