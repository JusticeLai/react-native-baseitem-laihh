import React, {Component,PureComponent} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    View,
    TouchableOpacity,
    InteractionManager,
    Keyboard,
    ActivityIndicator
} from 'react-native';
// import Dimensions from 'Dimensions'
// import Modal from 'react-native-modalbox';

export default class LoadingView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };

    }

    show() {
        this.setState({
            modalVisible: true,
        })


    }

    hide() {
        this.setState({
            modalVisible: false
        })
    }


    render() {
        // console.warn(this.state.modalVisible)

        // return <Text>2121212112121</Text>
        if (this.state.modalVisible == true) {
            return (
                <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.7)',position:'absolute',left:0,top:0,bottom:0,right:0,justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:150,height:140,backgroundColor:'white',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity style={{marginTop: -30, marginRight: -120}} onPress={()=> {
                            this.hide()
                        }}>
                            <Image style={{width: 25, height: 25}}
                                   source={require('../../images/common/delete_sku.png')}/>
                        </TouchableOpacity>

                        <ActivityIndicator style={{marginTop:10}} size='large'/>
                        <Text style={{marginTop: 15, fontSize: 16, color: '#444444'}}>Loading...</Text>
                    </View>
                </View>
            );
        } else {
           return null
        }
    }


// <Modal key={0} backdropOpacity={0.8} ref='modal' isOpen={this.state.modalStatus}
// animationDuration={0} position={"center"} backdropPressToClose={false}
// style={{
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 130,
//     height: 105,
//     borderRadius: 10,
// }}>
// {/*是否可以下滑清楚*/}
// {
//     this.state.isShowBtn == false
//         ?

//
//
// {/*转的菊花*/}
//
// </Modal>
}

const styles = StyleSheet.create({
    borderLeft: {
        borderLeftWidth: 1,
        borderLeftColor: "#e1e1e1"
    },

});
