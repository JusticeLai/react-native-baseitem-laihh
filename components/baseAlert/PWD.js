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


export default class Password extends Component {
    // static propTypes = {
    //     style: View.propTypes.style,
    //     inputItemStyle: View.propTypes.style,
    //     iconStyle: View.propTypes.style,
    //     maxLength: TextInput.propTypes.maxLength.isRequired,
    //     onChange: PropTypes.func,
    //     onEnd: PropTypes.func,
    //     autoFocus: PropTypes.bool,
    // };

    static defaultProps = {
        autoFocus: true,
        onChange: () => {
        },
        onEnd: () => {
        },
    };


    constructor(props) {
        super(props);

        this.state = {
            isShowShop: props.isShowShop,
            text: '',
            fadeInOpacity: new Animated.Value(0),
            rotation: new Animated.Value(0),
            fontSize: new Animated.Value(0)
        };
    }

    componentDidMount() {
        if (this.props.autoFocus) {
            InteractionManager.runAfterInteractions(() => {
                this._onPress();
            });
        }
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
        InteractionManager.runAfterInteractions(() => {
            this._onPress();
        });
    }

    hide () {
        this.setState({text:'',isShowShop: false});
        Keyboard.dismiss();
    }


    render() {
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;

        let onClosePress = this.props.onClosePress ? this.props.onClosePress : ()=> {
            this.setState({text:'',isShowShop: false});
            Keyboard.dismiss();
        }

        let onChangeText = this.props.onChangeText ? this.props.onChangeText : ()=> {
        };


        if (this.state.isShowShop == true) {
            return (
                // <Animated.View style={[ {
                //     opacity: this.state.fadeInOpacity,
                // }]}>

                <View style={{
                    flex: 1,
                    height: height,
                    width: width,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    zIndex: 100
                }}>


                    <View
                        style={{zIndex: 101, backgroundColor: 'white', marginTop: 150,}}>
                        <View style={{
                            width: width,
                            marginBottom: 50,
                            height: 50,
                            alignItems: 'center',
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: 'rgb(222,222,222)'
                        }}>

                            <TouchableOpacity onPress={onClosePress} style={{width: 100, paddingLeft: 10}}>
                                <Text>X</Text>
                            </TouchableOpacity>
                            <View style={{flex: 1, alignItems: 'center',}}>
                                <Text>确认付款</Text>
                            </View>
                            <View style={{width: 100, paddingRight: 10, alignItems: 'flex-end'}}>
                                <Text></Text>
                            </View>

                        </View>
                        <View style={{zIndex: 101, width: width, height: height - 150, alignItems: 'center'}}>
                            <TouchableHighlight
                                onPress={this._onPress.bind(this)}
                                activeOpacity={1}
                                underlayColor='transparent'>
                                <View style={[styles.container, this.props.style]}>
                                    <TextInput
                                        style={{
                                            height: 45,
                                            zIndex: 99,
                                            position: 'absolute',
                                            width: 45 * 6,
                                            opacity: 0
                                        }}
                                        ref='textInput'
                                        value={this.state.text}
                                        //ref={c => this.textInput = c}
                                        maxLength={this.props.maxLength}
                                        autoFocus={true}
                                        keyboardType= {Platform.OS == 'ios' ? "number-pad" : "numeric"}
                                        onChangeText={
                                            (text) => {
                                                this.setState({text});
                                                this.props.onChangeText(text);
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
                        </View>
                    </View>

                </View>
                // </Animated.View >
            )
        } else {
            return null;
        }


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
        if (this.refs.textInput) {
            this.refs.textInput.focus();
        }
    }
}

const styles = StyleSheet.create({
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