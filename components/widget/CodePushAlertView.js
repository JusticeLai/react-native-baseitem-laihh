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

export default class CodePushAlertView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            options: {}
        };

    }

    showAlert(options) {
        this.setState({
            modalVisible: true,
            options: options
        })
    }

    hiddenAlert() {
        this.setState({
            modalVisible: false
        })
    }


    render() {
        let options = this.state.options;
        let getwidth = Dimensions.get('window').width;
        let getheight = Dimensions.get('window').height;
        let data = this.props.data ? this.props.data : {};
        let height = data.height ? data.height : 120;
        let width = getwidth * 0.85;
        let onBGPress = this.props.onBGPress ? this.props.onBGPress : ()=> {
        };


        let title = this.props.title ? this.props.title : '';
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
                            <View style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 20}}>{title}</Text>
                            </View>
                            {

                                totalBytes == '' || receivedBytes == '' ? null :
                                    <Text>{totalBytes+'/'+ receivedBytes}</Text>
                            }
                        </View>

                    </View>
                </TouchableOpacity>
            </Modal>
        );
    }

}
