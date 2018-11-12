// 'use strict';//编译模式,最高等级
//1.RN组件
import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
    AsyncStorage,
    PixelRatio,
    NetInfo,
    AppState,
    NavigatorBar,
    ActivityIndicator,
    BackAndroid,
    ToastAndroid,
    ScrollView,
    Dimensions
} from 'react-native';


let {width, height} = Dimensions.get('window');
import CommonStyle from '../style/CommonStyle';


export default class AddCutCoutView extends Component {
    //构造
    constructor(props) {
        super(props);
        this.state = {
            countX: props.count ? props.count : 1,
            buyMax: props.buyMax ? props.buyMax : 1,
            alreadySelectCount: props.alreadySelectCount ? props.alreadySelectCount : 0,
        }
    }


    componentWillReceiveProps(nextProps) {
        // this.setState({
        //     isShowShop: nextProps.isShowShop,
        //     countX: nextProps.count
        // })
    }


    //每行Row头部
    render() {
        return (
            this.renderCount()
        );
    }


    //购买数量----当购物车的时候不显示
    renderCount() {
        return (
            <View style={{
                height: 50, flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View style={{flexDirection: 'row', width: 100, justifyContent: 'center',}}>
                    <Text onPress={()=> {
                        this.cut()
                    }} style={{
                        color: '#FE5050',
                        fontSize: 28,
                        backgroundColor: 'white',
                        paddingHorizontal: 8,
                        borderColor: CommonStyle.UNDER_LINE_COLOR,
                        borderWidth: 1,
                        width: 35,
                        textAlign: 'center',
                        paddingVertical:0,
                    }}>{'-'}</Text>
                    <Text style={{
                        fontSize: 18,
                        backgroundColor: 'white',
                        color: CommonStyle.TEXT_COLOR,
                        padding: 3,
                        paddingHorizontal: 10,
                        width: 45,
                        textAlign: 'center',
                        borderColor: CommonStyle.UNDER_LINE_COLOR,
                        borderWidth: 1,
                        borderLeftWidth: 1,
                        paddingTop:6

                    }}>{this.state.countX + ''}</Text>
                    <Text onPress={()=> {
                        this.add()
                    }} style={{
                        color: 'white',
                        fontSize: 28,
                        backgroundColor: '#FE5050',
                        paddingHorizontal: 8,
                        borderColor: CommonStyle.TIPS_COLOR,
                        borderWidth: 0,
                        width: 35,
                        textAlign: 'center',
                        paddingVertical:0,
                    }}>{'+'}</Text>
                </View>
            </View>
        )

    }


    add() {
        let count = this.state.countX;
        let buyMax = this.state.buyMax
        // if (this.props.isGroup == 'shopCar') {
        //     buyMax = this.state.buyMax - this.props.alreadySelectCount;
        // }
        if (count < buyMax) {
            this.setState({
                countX: count + 1,
            })
            this.onGetShopCount(count+1);
        } else if (count == buyMax) {
            //this.Toast('库存不足');
        }

        // setTimeout(() => {
        //
        // }, 500);

    }

    cut() {
        let count = this.state.countX;
        if (count > 1) {
            this.setState({
                countX: count - 1,
            })
            this.onGetShopCount(count-1);
        }
    }

    onGetShopCount(newCount) {
        // setTimeout(() => {
            this.props.onCountPress(newCount);
        // }, 50);

    }

    //
    // buyAtOnce(isGroup, index) {
    //     // this.addToShopCarPress = addToShopCarPress(this.state.countX);
    //     this.buyAtOncePress = buyAtOncePress(this.state.countX, isGroup, index, this.state.buyMax);
    // }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height * 2 / 3,
        borderRadius: 0,
    },
});