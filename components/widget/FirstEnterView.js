import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Dimensions,
    ListView,
    TouchableOpacity,
    Image,
    AsyncStorage,
    Platform,
    ActivityIndicator,
    NetInfo,
    NativeModules,//与原生通讯
} from 'react-native';


let {width, height} = Dimensions.get('window');
import CommonStyle from "../style/CommonStyle";
import Swiper from "../three/Swiper";
import CodePushAlertView from "../widget/CodePushAlertView";



export default class FirstEnterView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isShowBtn: false,
        };
    }


    render() {

        // let image1 = require('../images/loading/11.png');
        // let image2 = require('../images/loading/22.png');
        // let image3 = require('../images/loading/33.png');
        // let image4 = require('../images/loading/44.png');
        // let image5 = require('../images/loading/loadingXX.png');

        if(width>= 768){
            // image1 = require('../images/loading/pad1.png');
            // image2 = require('../images/loading/pad2.png');
            // image3 = require('../images/loading/pad3.png');
            // image4 = require('../images/loading/pad4.png');
            // image5 = require('../images/loading/pad5.png');
        }


        // let image5 = require('../images/loading/loadingXX.png');
        // let imageArray = this.props.data ? this.props.data : [image2, image3];
        let imageArray = this.props.data ? this.props.data : [];

        let onPress = this.props.onPress ? this.props.onPress : ()=> {

        };
        let backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : 'red';
        let color = this.props.color ? this.props.color : 'white';


        let cutHeight = 0;
        if (Platform.OS === 'android') {
            cutHeight = 20;
        }

        return (
            <View  style={{flex:1}}>
                <Swiper height={height-cutHeight} autoplay={false} loop={false} dotColor={'#efeff4'}
                        activeDotColor={CommonStyle.MAIN_COLOR}>
                    {
                        imageArray.map((item, index) =>
                            <View a key={index} style={{flex: 1}}
                            >
                                {
                                    index == imageArray.length - 1 ?
                                        <TouchableOpacity
                                            ctiveOpacity={1.0}
                                            onPress={onPress}
                                            style={{
                                                height: 44, width: 100, zIndex: 2,
                                                backgroundColor: backgroundColor, position: 'absolute',
                                                left: (width - 100) / 2, bottom: 50,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 20,
                                            }}>
                                            <Text style={{color: color}}>{'立即体验'}</Text>
                                        </TouchableOpacity> : null
                                }
                                <Image key={index} style={{height: height-cutHeight, width: width}} resizeMode='cover'
                                       source={item}/>


                            </View>
                        )
                    }
                </Swiper>
                <CodePushAlertView  ref={c => this.alertView2 = c}/>
            </View>
        )
    }

    componentDidMount() {
        this.alertView2.isHaveCodePushUpdate()
    }





}

