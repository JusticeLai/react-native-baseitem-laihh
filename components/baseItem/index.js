import React, {Component} from 'react';
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


// import PropTypes from 'prop-types'

import CommonStyle from '../style/CommonStyle';
import BaseTextInput from '../baseTextInput/BaseTextInput';
import BaseBotton from '../baseBotton/BaseBotton';
import MessageButton from '../baseBotton/MessageButton';
import BaesItem15 from '../baseItem/components/BaesItem15';




let {width, height} = Dimensions.get('window');

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
        } else if (type == 6) {
            return (
                <View style={[styles.Hcontainer]}>
                    {this.renderType6()}
                </View>
            )
        } else if (type == 7) {
            return (
                this.renderType7()
            )
        } else if (type == 8) {
            return(
                <BaseTextInput
                    data={this.props.data}
                    rightOnPress={this.props.rightOnPress}
                    onPress={this.props.onPress}
                    onChangeText={this.props.onChangeText}
                    onSubmitEditing={this.props.onSubmitEditing}
                />
            )


        } else if (type == 9) {
            return (
                this.renderType9()
            )
        } else if (type == 10) {
            return (
                this.renderType10()
            )
        } else if (type == 11) {
            return (
                this.renderType11()
            )
        } else if (type == 12) {
            return (
                this.renderType12()
            )
        } else if (type == 13) {
            return (
                <BaseBotton
                    data={this.props.data}
                    onPress={this.props.onPress}
                />
            )
        } else if (type == 14) {
            return (
                <MessageButton
                    title={this.props.title}
                    time={this.props.time}
                    color={this.props.color}
                    borderColor={this.props.borderColor}
                    backgroundColor={this.props.backgroundColor}
                    borderWidth={this.props.borderWidth}
                    isClickMessageBtn={this.props.isClickMessageBtn}
                    onPress={this.props.onPress}
                    buttonOnPress={this.props.buttonOnPress}
                />
            )
        } else if (type == 15) {
            return (
                <BaesItem15
                    onPress={this.props.onPress}
                    onLongPress={this.props.onLongPress}
                    data={this.props.data}
                />
            )
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

        let text5 = data && data.text5 ? data.text5 : '';
        let text5Color = data && data.text5Color ? data.text5Color : CommonStyle.TEXT_COLOR;
        let text5fontSize = data && data.text5fontSize ? data.text5fontSize : 14;
        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };
        let lineHeight = this.props.underLine == false ? 0 : 1;
        let paddingLeftUnderLine = data && data.paddingLeftUnderLine ? data.paddingLeftUnderLine : 15;

        return (
            <TouchableOpacity
                style={{paddingTop: paddingVertical + 5, backgroundColor: 'white', flex: 1}}
                activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 5,
                    paddingHorizontal: 15,
                }}>
                    <View style={{height: 20, flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: text1Color, fontSize: text1fontSize}}>{text1}</Text>
                        {
                            text5 == '' ? <View style={{height: 15}}/> :
                                <TouchableOpacity style={{
                                    borderColor: CommonStyle.MAIN_COLOR_BLUE,
                                    borderWidth: 1,
                                    paddingHorizontal: 5,
                                    paddingVertical: 2,
                                    marginLeft: 5
                                }}>
                                    <Text style={{color: text5Color, fontSize: text5fontSize}}>{text5}</Text>
                                </TouchableOpacity>
                        }
                    </View>
                    <Text style={{color: text2Color, fontSize: text2fontSize}}>{text2}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15,}}>
                    <Text style={{color: text3Color, fontSize: text3fontSize}}>{text3}</Text>
                    <Text style={{color: text4Color, fontSize: text4fontSize}}>{text4}</Text>
                </View>
                {this.renderLine(paddingLeftUnderLine, paddingVertical, lineHeight)}
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
        let lineHeight = this.props.underLine == false ? 0 : 1;
        let paddingLeftUnderLine = data && data.paddingLeftUnderLine ? data.paddingLeftUnderLine : 15;
        return (
            <TouchableOpacity style={{flex: 1, backgroundColor: 'white'}} activeOpacity={CommonStyle.activeOpacity}
                              onPress={onPress}>
                <View
                    style={{
                        paddingHorizontal: 15,
                        paddingTop: paddingVertical,
                        flex: 1,
                        flexDirection: 'row'
                    }}
                >
                    <View style={{alignItems: 'flex-start', flex: 1}}>
                        <Text style={{color: text1Color, fontSize: text1fontSize}}>{text1}</Text>
                        <Text style={{color: text2Color, fontSize: text2fontSize, marginTop: 5}}>{text2}</Text>
                    </View>
                    <View style={{alignItems: 'flex-end', justifyContent: 'center', width: 100}}>
                        <Text style={{color: text3Color, fontSize: text3fontSize}}>{text3}</Text>
                    </View>

                </View>
                {this.renderLine(paddingLeftUnderLine, paddingVertical, lineHeight)}
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
        let paddingLeftUnderLine = data && data.paddingLeftUnderLine ? data.paddingLeftUnderLine : 15;

        return (
            <TouchableOpacity style={{flexDirection: 'column', flex: 1, backgroundColor: 'white',}}
                              activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>
                <View style={{
                    paddingHorizontal: 10,
                    paddingTop: paddingVertical,
                    flex: 1,
                    flexDirection: 'row'
                }}
                >
                    <View style={{width: 70, height: 70, marginRight: 10}}>
                        {image != ''  ? <Image style={{width: 60, height: 60, margin: 5}} source={{uri: image}}/> :null
                        }
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
                </View>
                {this.renderLine(paddingLeftUnderLine, paddingVertical, lineHeight)}
            </TouchableOpacity>
        )
    }

    renderType4() {
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
        let lineHeight = this.props.underLine == false ? 0 : 1;
        let image = data && data.image ? data.image : '';
        let paddingLeftUnderLine = data && data.paddingLeftUnderLine ? data.paddingLeftUnderLine : 15;

        let topString = data.topString ? data.topString : '';

        let topString2 = data.topString2 ? data.topString2 : '';

        return (
            <TouchableOpacity onPress={onPress} style={{backgroundColor: 'white'}}>
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
                        {image == '' ? null : <Image style={{width: 80, height: 80, margin: 5}} source={{uri: image}}/>}

                        {this.renderType8ImageView(topString, topString2)}
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
                            <Text numberOfLines={1} style={{color: text2Color}}>{text2}</Text>
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
                {this.renderLine(paddingLeftUnderLine, paddingVertical - 8, lineHeight)}
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
        let backgroundColor = data && data.backgroundColor ? data.backgroundColor : 'white';
        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };
        let onImagePress = this.props.onImagePress ? this.props.onImagePress : ()=> {
        };


        let lineHeight = this.props.underLine == false ? 0 : 1;
        let image = data && data.image ? data.image : '';
        let paddingLeftUnderLine = data && data.paddingLeftUnderLine ? data.paddingLeftUnderLine : 15;
        return (
            <TouchableOpacity
                style={{paddingTop: paddingVertical, backgroundColor: backgroundColor, justifyContent: 'center',}}
                activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>
                <View style={{flexDirection: 'row', paddingHorizontal: 15,}}>
                    <TouchableOpacity onPress={onImagePress}
                                      style={{justifyContent: 'center', alignItems: 'center', width: 70, height: 70}}>
                        <Image style={{width: 60, height: 60, margin: 5, borderRadius: 10}} source={image}/>
                    </TouchableOpacity>
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
                {this.renderLine(paddingLeftUnderLine, paddingVertical, lineHeight)}
            </TouchableOpacity>
        )
    }


    renderType6() {
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
        let paddingLeftUnderLine = data && data.paddingLeftUnderLine ? data.paddingLeftUnderLine : 15;

        return (
            <TouchableOpacity style={{flexDirection: 'column', flex: 1, backgroundColor: 'white',}}
                              activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>
                <View style={{
                    paddingHorizontal: 10,
                    paddingTop: paddingVertical,
                    flex: 1,
                    flexDirection: 'row'
                }}
                >
                    <View style={{width: 70, height: 70, marginRight: 10}}>
                        <Image style={{width: 60, height: 60, margin: 5}} source={image}/>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={{color: text1Color, fontSize: text1fontSize}} numberOfLines={2}>{text1}</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text style={{color: text2Color, fontSize: text2fontSize}} numberOfLines={1}>{text2}</Text>
                        </View>
                    </View>
                </View>
                {this.renderLine(paddingLeftUnderLine, paddingVertical, lineHeight)}
            </TouchableOpacity>
        )
    }


    renderType7() {
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
        let lineHeight = this.props.underLine == false ? 0 : 1;
        let paddingLeftUnderLine = data && data.paddingLeftUnderLine ? data.paddingLeftUnderLine : 15;
        return (
            <TouchableOpacity style={{flex: 1, backgroundColor: 'white'}} activeOpacity={CommonStyle.activeOpacity}
                              onPress={onPress}>
                <View
                    style={{
                        paddingHorizontal: 15,
                        paddingTop: paddingVertical,
                        flex: 1,
                        flexDirection: 'row'
                    }}
                >
                    <View style={{alignItems: 'flex-start', flex: 1}}>
                        <Text numberOfLines={1} style={{color: text1Color, fontSize: text1fontSize}}>{text1}</Text>
                        <Text numberOfLines={2}
                              style={{color: text2Color, fontSize: text2fontSize, marginTop: 5}}>{text2}</Text>
                    </View>
                </View>
                {this.renderLine(paddingLeftUnderLine, paddingVertical, lineHeight)}
            </TouchableOpacity>
        )
    }


    renderType7() {
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
        let lineHeight = this.props.underLine == false ? 0 : 1;
        let paddingLeftUnderLine = data && data.paddingLeftUnderLine ? data.paddingLeftUnderLine : 15;
        return (
            <TouchableOpacity style={{flex: 1, backgroundColor: 'white'}} activeOpacity={CommonStyle.activeOpacity}
                              onPress={onPress}>
                <View
                    style={{
                        paddingHorizontal: 15,
                        paddingTop: paddingVertical,
                        flex: 1,
                        flexDirection: 'row'
                    }}
                >
                    <View style={{alignItems: 'flex-start', flex: 1}}>
                        <Text numberOfLines={1} style={{color: text1Color, fontSize: text1fontSize}}>{text1}</Text>
                        <Text numberOfLines={2}
                              style={{color: text2Color, fontSize: text2fontSize, marginTop: 5}}>{text2}</Text>
                    </View>
                </View>
                {this.renderLine(paddingLeftUnderLine, paddingVertical, lineHeight)}
            </TouchableOpacity>
        )
    }

    renderType9() {
        let data = this.props.data ? this.props.data : {};
        let paddingVertical = data && data.paddingVertical ? data.paddingVertical : 10;
        let text1 = data && data.text1 ? data.text1 : '';
        let text1Color = data && data.text1Color ? data.text1Color : CommonStyle.TEXT_COLOR;
        let text1fontSize = data && data.text1fontSize ? data.text1fontSize : 14;
        let text2 = data && data.text2 ? data.text2 : '';
        let text2Color = data && data.text2Color ? data.text2Color : 'gray';
        let text2fontSize = data && data.text2fontSize ? data.text2fontSize : 12;
        let text3 = data && data.text3 ? data.text3 : '';
        let text3Color = data && data.text3Color ? data.text3Color : 'gray';
        let text3fontSize = data && data.text3fontSize ? data.text3fontSize : 12;
        let text4 = data && data.text4 ? data.text4 : '';
        let text4Color = data && data.text4Color ? data.text4Color : 'black';
        let text4fontSize = data && data.text4fontSize ? data.text4fontSize : 14;
        let text5 = data && data.text5 ? data.text5 : '';
        let text5Color = data && data.text5Color ? data.text5Color : 'gray';
        let text5fontSize = data && data.text5fontSize ? data.text5fontSize : 12;

        let text6 = data && data.text6 ? data.text6 : '';
        let text6Color = data && data.text6Color ? data.text6Color : 'gray';
        let text6fontSize = data && data.text6fontSize ? data.text6fontSize : 12;

        let text7 = data && data.text7 ? data.text7 : '';
        let text7Color = data && data.text7Color ? data.text7Color : CommonStyle.MAIN_COLOR_BLUE;
        let text7fontSize = data && data.text7fontSize ? data.text7fontSize : 12;

        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };
        let onBtnPress = this.props.onBtnPress ? this.props.onBtnPress : ()=> {
        };
        let lineHeight = this.props.underLine == false ? 0 : 1;
        let image = data && data.image ? data.image : '';
        let paddingLeftUnderLine = data && data.paddingLeftUnderLine ? data.paddingLeftUnderLine : 15;
        return (
            <TouchableOpacity
                style={{flex: 1, paddingTop: paddingVertical, backgroundColor: 'white', justifyContent: 'center',}}
                activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 70,
                        height: 70,
                    }}>
                        <Image style={{width: 60, height: 60, margin: 5, borderRadius: 10}} source={{uri: image}}/>
                    </View>

                    <View style={{flex: 1, marginLeft: 5, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: text1fontSize, color: text1Color}} numberOfLines={2}>{text1}</Text>
                            <Text style={{fontSize: text2fontSize, color: text2Color, marginTop: 10}}
                                  numberOfLines={1}>{text2}</Text>
                            <Text style={{fontSize: text3fontSize, color: text3Color, marginTop: 2}}
                                  numberOfLines={1}>{text3}</Text>
                        </View>
                        <View style={{
                            justifyContent: 'flex-start',
                            alignItems: 'flex-end',
                            marginHorizontal: paddingVertical
                        }}>
                            <Text style={{fontSize: text4fontSize, color: text4Color}} numberOfLines={1}>{text4}</Text>
                            <View style={{flexDirection: 'row', flex: 1, marginTop: 2}}>
                                <Text style={{fontSize: text5fontSize, color: text5Color}}
                                      numberOfLines={1}>{this.SubStr(text5, 0, text5.length - 3)}</Text>
                                <Text style={{
                                    fontSize: text5fontSize,
                                    color: text5Color,
                                    textDecorationLine: 'line-through'
                                }} numberOfLines={1}>{this.SubStr(text5, 3, 0)}</Text>
                            </View>
                            <Text style={{fontSize: text6fontSize, color: text6Color}} numberOfLines={1}>{text6}</Text>
                            {
                                text7 == '' ? <View style={{height: 15}}/> :
                                    <TouchableOpacity onPress={onBtnPress} style={{
                                        borderColor: text7Color,
                                        borderWidth: 1,
                                        paddingHorizontal: 5,
                                        paddingVertical: 2,
                                        marginTop: 2
                                    }}>
                                        <Text style={{color: text7Color, fontSize: text7fontSize}}>{text7}</Text>
                                    </TouchableOpacity>

                            }

                        </View>
                    </View>
                </View>
                {this.renderLine(paddingLeftUnderLine, paddingVertical, lineHeight)}
            </TouchableOpacity>
        )
    }


    renderType10() {
        let data = this.props.data ? this.props.data : {};

        let paddingVertical = data && data.paddingVertical ? data.paddingVertical : 10;

        let text1 = data && data.text1 ? data.text1 : '';
        let text1Color = data && data.text1Color ? data.text1Color : CommonStyle.TEXT_COLOR;
        let text1fontSize = data && data.text1fontSize ? data.text1fontSize : 14;
        let text2 = data && data.text2 ? data.text2 : '';
        let text2Color = data && data.text2Color ? data.text2Color : 'gray';
        let text2fontSize = data && data.text2fontSize ? data.text2fontSize : 14;


        let image = data && data.image ? data.image : '';
        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };
        let lineHeight = this.props.underLine == false ? 0 : 1;
        let paddingLeftUnderLine = data && data.paddingLeftUnderLine ? data.paddingLeftUnderLine : 15;
        let backgroundColor = data && data.backgroundColor ? data.backgroundColor : 'white';


        return (
            <TouchableOpacity
                style={{paddingTop: paddingVertical + 5, backgroundColor: backgroundColor, flex: 1}}
                activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 5,
                    paddingHorizontal: 15,
                }}>
                    <Text style={{color: text1Color, fontSize: text1fontSize, width: width * 0.25}}>{text1}</Text>
                    <Text style={{color: text2Color, fontSize: text2fontSize, width: width * 0.55}}>{text2}</Text>
                    <Image style={{width: 15, height: 15, marginRight: 5}} source={image} resizeMode={'contain'}/>
                </View>
                {this.renderLine(paddingLeftUnderLine, paddingVertical, lineHeight)}
            </TouchableOpacity>
        )
    }


    renderType11() {
        let data = this.props.data ? this.props.data : {};

        let paddingVertical = data && data.paddingVertical ? data.paddingVertical : 10;

        let text1 = data && data.text1 ? data.text1 : '';
        let text1Color = data && data.text1Color ? data.text1Color : CommonStyle.TEXT_COLOR;
        let text1fontSize = data && data.text1fontSize ? data.text1fontSize : 14;
        let text2 = data && data.text2 ? data.text2 : '';
        let text2Color = data && data.text2Color ? data.text2Color : 'gray';
        let text2fontSize = data && data.text2fontSize ? data.text2fontSize : 14;

        let image = data && data.image ? data.image : '';
        let imageWidth = data && data.imageWidth ? data.imageWidth : 20;
        let imageHeight = data && data.imageHeight ? data.imageHeight : 20;
        let backgroundColor = data && data.backgroundColor ? data.backgroundColor : 'white';

        let image2 = data && data.image2 ? data.image2 : '';
        let onPress = this.props.onPress ? this.props.onPress : ()=> {
        };
        let lineHeight = this.props.underLine == false ? 0 : 1;
        let type = this.props.viewType ? this.props.viewType : 0;
        let paddingLeftUnderLine = data && data.paddingLeftUnderLine ? data.paddingLeftUnderLine : 15;


        return (
            <TouchableOpacity
                style={{paddingTop: paddingVertical + 5, backgroundColor: backgroundColor, flex: 1}}
                activeOpacity={CommonStyle.activeOpacity} onPress={onPress}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        {this.renderImage(image, {marginHorizontal: 15, width: imageWidth, height: imageHeight})}
                        <Text style={{color: 'black', fontSize: text1fontSize}}>{text1}</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        {this.renderType11View(type, text2, text2fontSize)}
                        {this.renderImage(image2, {marginHorizontal: 15, width: 13, height: 13})}
                    </View>
                </View>
                {this.renderLine(paddingLeftUnderLine, paddingVertical, lineHeight)}
            </TouchableOpacity>
        )

    }

    renderImage(image2, style) {
        if (image2 == '') {
            return null
        } else {
            return (
                <Image source={image2} style={style}
                       resizeMode={'contain'}/>
            )
        }
    }


    renderType11View(type, text2, fontSize) {
        if (type == 2) {

            if (text2 == '0' || text2 == 0) {

            } else {
                return (
                    <View style={{
                        backgroundColor: 'red',
                        paddingHorizontal: 8,
                        height: 20,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text numberOfLines={1} style={{color: 'white', fontSize: fontSize}}>{text2}</Text>
                    </View>
                )
            }
        } else {
            return (
                <Text style={{color: 'gray'}}>{text2}</Text>
            )

        }
    }


    SubStr(str, index, length) {
        return str.substr(index, str.length - length).replace('T', ' ');
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


    renderType8ImageView(topString, topString2) {
        if (topString != '' && topString2 == '') {
            //显示第一个
            return this.renderTopImageString(0, 0, topString)
        } else if (topString == '' && topString2 != '') {
            //显示第二个--位置第一个
            return this.renderTopImageString(0, 0, topString2)
        } else if (topString != '' && topString2 != '') {
            //显示第两个
            return (
                <View style={{position: 'absolute', left: 0, top: 0}}>
                    {this.renderTopImageString(0, 0, topString)}
                    {this.renderTopImageString(23, 0, topString2)}
                </View>
            )
        }
    }

    renderTopImageString(left, top, topString) {
        let topImage = require('../../images/buygive2.png');
        return (
            <View style={{
                width: 20,
                height: 23,
                position: 'absolute',
                left: left,
                top: top,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {topString != undefined && topString != '' ? <Image style={{
                    width: 20,
                    height: 23,
                    position: 'absolute',
                    left: 0,
                    top: 0,

                }} source={topImage}/> : null}
                {topString != undefined ? <Text style={{
                    color: 'white',
                    fontSize: 7,
                    backgroundColor: 'transparent'
                }}>{topString}</Text> : null}
            </View>

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