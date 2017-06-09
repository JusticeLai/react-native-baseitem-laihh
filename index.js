import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ListView,
    TextInput,
    Switch,
    Dimensions,
    Platform
} from 'react-native';

import CommonStyle from './style/CommonStyle';
let {width, height} = Dimensions.get('window');;

export default class SCBaseItemView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.renderType(this.props.type)
        );
    }

    renderType(type) {
        if (type == 1) {
            return (
                <View style={[styles.Hcontainer]}>
                    {this.renderType1()}
                </View>
            )
        } else if (type == 2) {
            return (
                <View style={[styles.Hcontainer]}>
                    {this.renderType2()}
                </View>
            )
        } else if (type == 3) {
            return (
                <View style={[styles.Hcontainer]}>
                    {this.renderType3()}
                </View>
            )
        }
    }

    renderType1() {
        let data = this.props.data ? this.props.data : {};

        let paddingVertical = data && data.paddingVertical ? data.paddingVertical : 15;

        let text1 = data && data.text1 ? data.text1 : '';
        let text1Color = data && data.text1Color ? data.text1Color : CommonStyle.TEXT_COLOR;
        let text1fontSize = data && data.text1fontSize ? data.text1fontSize : 14;
        let text2 = data && data.text2 ? data.text2 : '';
        let text2Color = data && data.text2Color ? data.text2Color : CommonStyle.TEXT_COLOR;
        let text2fontSize = data && data.text2fontSize ? data.text2fontSize : 14;
        let text3 = data && data.text3 ? data.text3 : '';
        let text3Color = data && data.text3Color ? data.text3Color : CommonStyle.TEXT_COLOR;
        let text3fontSize = data && data.text3fontSize ? data.text3fontSize : 14;
        let text4 = data && data.text4 ? data.text4 : '';
        let text4Color = data && data.text4Color ? data.text4Color : CommonStyle.TEXT_COLOR;
        let text4fontSize = data && data.text4fontSize ? data.text4fontSize : 14;
        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };
        return (
            <TouchableOpacity
                style={{paddingHorizontal: 15, paddingVertical: paddingVertical, backgroundColor: 'white', flex: 1}}
                activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
                    <Text style={{color: text1Color, fontSize: text1fontSize}}>{text1}</Text>
                    <Text style={{color: text2Color, fontSize: text2fontSize}}>{text2}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                    <Text style={{color: text3Color, fontSize: text3fontSize}}>{text3}</Text>
                    <Text style={{color: text4Color, fontSize: text4fontSize}}>{text4}</Text>
                </View>
            </TouchableOpacity>
        )
    }



    renderType2() {
        let data = this.props.data ? this.props.data : {};

        let paddingVertical = data && data.paddingVertical ? data.paddingVertical : 15;

        let text1 = data && data.text1 ? data.text1 : '';
        let text1Color = data && data.text1Color ? data.text1Color : CommonStyle.TEXT_COLOR;
        let text1fontSize = data && data.text1fontSize ? data.text1fontSize : 14;
        let text2 = data && data.text2 ? data.text2 : '';
        let text2Color = data && data.text2Color ? data.text2Color : CommonStyle.TEXT_COLOR;
        let text2fontSize = data && data.text2fontSize ? data.text2fontSize : 14;
        let text3 = data && data.text3 ? data.text3 : '';
        let text3Color = data && data.text3Color ? data.text3Color : CommonStyle.TEXT_COLOR;
        let text3fontSize = data && data.text3fontSize ? data.text3fontSize : 14;
        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };
        // return (
        //     <TouchableOpacity
        //         style={{paddingHorizontal: 15, paddingVertical: paddingVertical, backgroundColor: 'white', flex: 1}}
        //         activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>
        //         <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
        //             <Text style={{color: text1Color, fontSize: text1fontSize}}>{text1}</Text>
        //             <Text style={{color: text2Color, fontSize: text2fontSize}}>{text2}</Text>
        //         </View>
        //         <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
        //             <Text style={{color: text3Color, fontSize: text3fontSize}}>{text3}</Text>
        //             <Text style={{color: text4Color, fontSize: text4fontSize}}>{text4}</Text>
        //         </View>
        //     </TouchableOpacity>
        // )

        return(
            <TouchableOpacity
                style={{paddingHorizontal: 15, paddingVertical: paddingVertical, backgroundColor: 'white', flex: 1,flexDirection:'row'}}
                activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>
                <View style={{alignItems: 'flex-start', flex: 1}}>
                    <Text style={{color: text1Color, fontSize: text1fontSize}}>{text1}</Text>
                    <Text style={{color: text2Color, fontSize: text2fontSize}}>{text2}</Text>
                </View>
                <View style={{justifyContent: 'center', width: 100}}>
                    <Text style={{color: text3Color, fontSize: text3fontSize}}>{text3}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    renderType3() {
        let data = this.props.data ? this.props.data : {};

        let paddingVertical = data && data.paddingVertical ? data.paddingVertical : 15;

        let text1 = data && data.text1 ? data.text1 : '';
        let text1Color = data && data.text1Color ? data.text1Color : CommonStyle.TEXT_COLOR;
        let text1fontSize = data && data.text1fontSize ? data.text1fontSize : 14;
        let text2 = data && data.text2 ? data.text2 : '';
        let text2Color = data && data.text2Color ? data.text2Color : CommonStyle.TEXT_COLOR;
        let text2fontSize = data && data.text2fontSize ? data.text2fontSize : 14;
        let text3 = data && data.text3 ? data.text3 : '';
        let text3Color = data && data.text3Color ? data.text3Color : CommonStyle.TEXT_COLOR;
        let text3fontSize = data && data.text3fontSize ? data.text3fontSize : 14;
        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };


        let image = data && data.image ? data.image : '';


        return (
            <TouchableOpacity
                style={{
                    paddingHorizontal: 10,
                    paddingVertical: paddingVertical,
                    backgroundColor: 'white',
                    flex: 1,
                    flexDirection: 'row'
                }}
                activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>
                <View style={{width: 70, height: 70, marginRight: 10}}>
                    <Image style={{width: 60, height: 60, margin: 5}} source={{uri: image}}/>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={{color: text1Color}} numberOfLines={2}>{text1}</Text>
                    </View>

                    <View style={{
                        height: 30,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end'
                    }}>
                        <View style={{flex: 1}}>
                            <Text style={{color: text2Color}} numberOfLines={1}>{text2}</Text>
                        </View>
                        <View style={{width: 70, alignItems: 'flex-end'}}>
                            <Text style={{color: text3Color}} numberOfLines={1}>{text3}</Text>
                        </View>
                    </View>

                </View>

            </TouchableOpacity>
        )
    }


}

const styles = StyleSheet.create({
    Hcontainer: {flexDirection: 'row', overflow: 'hidden',},
    HcontainerCenter: {flexDirection: 'row', alignItems: 'center',},
    Vcontainer: {flexDirection: 'column'},
    VcontainerCenter: {flexDirection: 'column', justifyContent: 'center'},
    HVcontainerCenter: {flexDirection: 'column', justifyContent: 'center', alignItems: 'center'},
});

