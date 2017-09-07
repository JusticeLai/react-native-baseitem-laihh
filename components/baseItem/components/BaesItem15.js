import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';


export default class BaesItem15 extends Component {


    render() {

        let data = this.props.data ? this.props.data : {};
        let image = data && data.image ? data.image : '';
        let text1 = data && data.text1 ? data.text1 : '';
        let text2 = data && data.text2 ? data.text2 : '';
        let text3 = data && data.text3 ? data.text3 : '';
        let text4 = data && data.text4 ? data.text4 : '';
        let text5 = data && data.text5 ? data.text5 : '';

        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };

        let onLongPress = this.props.onLongPress ? this.props.onLongPress : ()=> {
        };

        return (
            <TouchableOpacity onPress={onPress} onLongPress={onLongPress} activeOpacity={0.8}
                              style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>
                {this.renderImage(text5,image)}
                <View style={{flex: 1,justifyContent: 'space-around'}}>
                    <Text numberOfLines={2}>{text1}</Text>
                    <Text style={{color: 'gray'}} numberOfLines={1}>{text2}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                        <Text style={{color: 'black'}} numberOfLines={1}>{text3}</Text>
                        <Text style={{color: 'red', fontSize: 18}} numberOfLines={1}>{text4}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderImage(text5,image) {

        if (text5 == '') {
            return (
                <View style={{margin: 10,width:100,height:100}}>
                    <Image style={{width: 90, height: 90}} source={image}/>
                </View>
            )
        }else{
            return (
                <View style={{margin: 10,width:100,height:100,justifyContent:'center',alignItems:'center',backgroundColor:'gray'}}>
                    <Image style={{width: 100, height: 100,position:'absolute'}} source={image}/>
                    <View style={{width:100,height:100,justifyContent:'center',alignItems:'center',backgroundColor:'gray',opacity:0.6,position:'absolute'}}/>
                    <Text style={{color: 'white',backgroundColor:'transparent',zIndex:100,fontWeight:'bold'}} numberOfLines={1}>{text5}</Text>
                </View>
            )
        }

    }

}
