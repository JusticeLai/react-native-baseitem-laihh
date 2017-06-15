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
let {width, height} = Dimensions.get('window');
;

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
        } else if (type == 4) {
            return this.renderType4()
        } else if (type == 5) {
            return this.renderType5()
        }
    }

    renderType1() {
        let data = this.props.data ? this.props.data : {};

        let paddingVertical = data && data.paddingVertical ? data.paddingVertical : 10;

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
        let lineHeight = this.props.underLine == false ? 0 : 1;

        return (
            <TouchableOpacity
                style={{paddingTop: paddingVertical+5, backgroundColor: 'white', flex: 1}}
                activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5,paddingHorizontal: 15, }}>
                    <Text style={{color: text1Color, fontSize: text1fontSize}}>{text1}</Text>
                    <Text style={{color: text2Color, fontSize: text2fontSize}}>{text2}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal: 15, }}>
                    <Text style={{color: text3Color, fontSize: text3fontSize}}>{text3}</Text>
                    <Text style={{color: text4Color, fontSize: text4fontSize}}>{text4}</Text>
                </View>
                {this.renderLine(15, paddingVertical, lineHeight)}
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
        return (
            <TouchableOpacity
                style={{
                    paddingHorizontal: 15,
                    paddingVertical: paddingVertical,
                    backgroundColor: 'white',
                    flex: 1,
                    flexDirection: 'row'
                }}
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

        let paddingVertical = data && data.paddingVertical ? data.paddingVertical : 10;

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
        let lineHeight = this.props.underLine == false ? 0 : 1;

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


    renderType4() {
        let data = this.props.data ? this.props.data : {};
        let paddingVertical = data && data.paddingVertical ? data.paddingVertical : 10;
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
        let lineHeight = this.props.underLine == false ? 0 : 1;
        let image = data && data.image ? data.image : '';

        return (
            <TouchableOpacity onPress={onPress}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: 100
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 90,
                        height: 100,
                    }}>
                        <Image style={{width: 80, height: 80, margin: 5}} source={{uri: image}}/>
                    </View>
                    <View style={{
                        flex: 1,
                        height: 100,
                        flexDirection: 'column',
                    }}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text numberOfLines={2} style={{paddingRight: 5}}>{text1}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 44
                        }}>
                            <Text numberOfLines={1}>{'￥' + text2}</Text>
                            <View style={{
                                borderColor: CommonStyle.MAIN_COLOR_BLUE,
                                borderWidth: 1,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                marginRight: 10
                            }}>
                                <Text style={{color: CommonStyle.MAIN_COLOR_BLUE}}>{text3}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {this.renderLine(15, paddingVertical, lineHeight)}
            </TouchableOpacity>
        )
    }


    renderType5() {
        let data = this.props.data ? this.props.data : {};
        let paddingVertical = data && data.paddingVertical ? data.paddingVertical : 10;
        let text1 = data && data.text1 ? data.text1 : '';
        let text1Color = data && data.text1Color ? data.text1Color : CommonStyle.TEXT_COLOR;
        let text1fontSize = data && data.text1fontSize ? data.text1fontSize : 14;
        let text2 = data && data.text2 ? data.text2 : '';
        let text2Color = data && data.text2Color ? data.text2Color : 'rgb(66,130,250)';
        let text2fontSize = data && data.text2fontSize ? data.text2fontSize : 12;
        let text3 = data && data.text3 ? data.text3 : '';
        let text3Color = data && data.text3Color ? data.text3Color : 'gray';
        let text3fontSize = data && data.text3fontSize ? data.text3fontSize : 14;
        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };
        let lineHeight = this.props.underLine == false ? 0 : 1;
        let image = data && data.image ? data.image : '';
        return (
            <TouchableOpacity style={{paddingTop: paddingVertical, backgroundColor: 'white', justifyContent: 'center',}}
                              activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>
                <View style={{flexDirection: 'row', paddingHorizontal: 15,}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 70, height: 70}}>
                        <Image style={{width: 60, height: 60, margin: 5, borderRadius: 10}} source={{uri: image}}/>
                    </View>
                    <View style={{flex: 1, marginLeft: 5}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                            <Text style={{lineHeight: 22, fontSize: text1fontSize, color: text1Color}}>{text1}</Text>
                            <Text style={{lineHeight: 22, fontSize: text2fontSize, color: text2Color}}>{text2}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
                            <Text numberOfLines={2}
                                  style={{color: text3Color, fontSize: text3fontSize, color: text3Color}}>{text3}</Text>
                        </View>
                    </View>
                </View>
                {this.renderLine(15, paddingVertical, lineHeight)}
            </TouchableOpacity>
        )
    }

    renderLine = (paddingLeft, TopBottomPadding, lineHeight)=> {
        return (
            <View style={{
                marginLeft: paddingLeft,
                marginTop: TopBottomPadding,
                height: lineHeight,
                flex: 1,
                backgroundColor: CommonStyle.UNDER_LINE_COLOR
            }}/>
        );
    }


}

const styles = StyleSheet.create({
    Hcontainer: {flexDirection: 'row', overflow: 'hidden',},
    HcontainerCenter: {flexDirection: 'row', alignItems: 'center',},
    Vcontainer: {flexDirection: 'column'},
    VcontainerCenter: {flexDirection: 'column', justifyContent: 'center'},
    HVcontainerCenter: {flexDirection: 'column', justifyContent: 'center', alignItems: 'center'},
});

