import React, {Component, PropTypes} from 'react'
import {
    Text,
    View,
    Platform,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    Image,
    ScrollView,
    ListView,
    FlatList,
    RefreshControl,
    TouchableOpacity,
    ActivityIndicator,
    NativeModules,//与原生通讯
} from 'react-native'

import CommonStyle from '../style/CommonStyle';

// let dismissKeyboard = require('dismissKeyboard');//隐藏键盘调用 dismissKeyboard();
let {width, height} = Dimensions.get('window');

//第三方侧滑删除组件
import SwipeListView from '../three/Swipe-ListView/SwipeListView';

export default class EasyListView extends Component {


    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            top: '',
            page: '1',
            list: [],
        }
    }

    static propTypes = {
        // Refresh: React.PropTypes.func.isRequired, // 跳转到对应tab的方法
        // LoreMore: React.PropTypes.func.isRequired, // 跳转到对应tab的方法
        // renderRow: React.PropTypes.func.isRequired, // 跳转到对应tab的方法
        // dataSource: React.PropTypes.object.isRequired, // 跳转到对应tab的方法
        // loading:React.PropTypes.bool.isRequired,
    }


    componentWillMount() {

    }

    //

    _flatList;

    render() {

        let renderFooter = this.props.renderFooter ? this.props.renderFooter : this.renderFooter
        let type = this.props.type ? this.props.type : 1;
        //编辑模式的
        if (type == 2) {
            return (
                <View style={{flex: 1, backgroundColor: CommonStyle.PAGE_BG_COLOR}}>
                    {this.props.isHideListView == false ?
                        <SwipeListView
                            enableEmptySections={true}
                            dataSource={this.props.dataSource}
                            renderRow={this.props.renderRow}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.props.isHideListView}
                                    onRefresh={this.props.Refresh}
                                    title="Loading..."/>
                            }
                            onEndReachedThreshold={height / 2}
                            showsVerticalScrollIndicator={false}
                            removeClippedSubviews={this.props.removeClippedSubviews ? this.props.removeClippedSubviews : false}
                            onEndReached={this.props.LoreMore}
                            renderFooter={this.props.renderFooter ? this.props.renderFooter :this.renderFooter}
                            onScroll={this.onScroll}
                        />
                        : this.ActivityIndicator()
                    }
                </View>
            )
        } else if (type == 3) {
            let array = this.props.dataSource;
            // console.log(array);
            // for (let i = 0; i < array.length; i++) {
            //     let dict = array[i];
            //     dict.key = i;
            // }

            return (
                <View style={{flex: 1, backgroundColor: CommonStyle.PAGE_BG_COLOR}}>
                    {this.props.isHideListView == false ?
                        <FlatList
                            {...this.props}
                            contentContainerStyle={[{backgroundColor: CommonStyle.PAGE_BG_COLOR}, this.props.style]}
                            removeClippedSubviews={this.props.removeClippedSubviews ? this.props.removeClippedSubviews : false}
                            enableEmptySections={true}
                            ref={(flatList)=>this._flatList = flatList}
                            ListHeaderComponent={this.props.renderHeader ? this.props.renderHeader : null}
                            ListFooterComponent={this.renderFooter}
                            renderItem={this.props.renderRow}
                            numColumns={this.props.numColumns ? this.props.numColumns : 1}
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.props.isHideListView}
                                    onRefresh={this.props.Refresh}
                                    title="Loading..."/>
                            }
                            //columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}

                            //horizontal={true}

                            //getItemLayout={(data,index)=>(
                            //{length: ITEM_HEIGHT, offset: (ITEM_HEIGHT+2) * index, index}
                            //)}
                            keyExtractor={(item, index)=>item.key = index}
                            onEndReachedThreshold={0.1}
                            onEndReached={this.props.LoreMore}
                            onScrollEndDrag={this.handleEndDrag}
                            //onViewableItemsChanged={(info)=>{
                            //console.warn(info);
                            //}}
                            data={array}/>
                        : this.ActivityIndicator()
                    }
                    {this.state.top != '' ?
                        <TouchableOpacity onPress={()=> {
                            this._flatList.scrollToOffset({animated: true, offset: 0});
                            this.setState({page: '1', top: ''});
                        }} style={{
                            backgroundColor: 'gray',
                            position: 'absolute',
                            width: 36,
                            height: 36,
                            right: width * 0.05,
                            bottom: 10,
                            borderRadius: 18,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{color: 'white', fontSize: 12}}>{'Top'}</Text>
                        </TouchableOpacity> : null
                    }
                </View>
            )
        }
        else if (type == 4) {
            return (
                <View style={{flex: 1, backgroundColor: CommonStyle.PAGE_BG_COLOR}}>
                    {this.props.status == 'RefreshHaveData' ?
                        <FlatList
                            {...this.props}
                            contentContainerStyle={[{backgroundColor: CommonStyle.PAGE_BG_COLOR}, this.props.style]}
                            removeClippedSubviews={this.props.removeClippedSubviews ? this.props.removeClippedSubviews : false}
                            enableEmptySections={true}
                            ref={(flatList)=>this._flatList = flatList}
                            ListHeaderComponent={this.props.renderHeader ? this.props.renderHeader : null}
                            ListFooterComponent={this.renderFooter2}
                            renderItem={this.props.renderRow}
                            numColumns={this.props.numColumns ? this.props.numColumns : 1}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={this.props.renderSeparator ? this.props.renderSeparator :this.renderSeparator}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.props.refreshing}
                                    onRefresh={this.props.Refresh}
                                    title="Loading..."/>
                            }
                            keyExtractor={(item, index)=>item.key = index}
                            onEndReachedThreshold={0.1}
                            onEndReached={this.props.LoreMore}
                            onScrollEndDrag={this.handleEndDrag}
                            data={this.props.dataSource}/>
                        : this.renderBodyView(this.props.status)
                    }
                    {this.state.top != '' ?
                        <TouchableOpacity onPress={()=> {
                            this._flatList.scrollToOffset({animated: true, offset: 0});
                            this.setState({page: '1', top: ''});
                        }} style={{
                            backgroundColor: 'gray',
                            position: 'absolute',
                            width: 36,
                            height: 36,
                            right: width * 0.05,
                            bottom: 10,
                            borderRadius: 18,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{color: 'white', fontSize: 12}}>{'Top'}</Text>
                        </TouchableOpacity> : null
                    }
                </View>)
        }
        else {
            return (
                <View style={[{flex: 1, backgroundColor: CommonStyle.PAGE_BG_COLOR}]}>
                    {this.props.isHideListView == false ?
                        <ListView
                            {...this.props}
                            style={[this.props.style]}
                            dataSource={this.props.dataSource}
                            renderFooter={renderFooter}
                            contentContainerStyle={this.props.contentContainerStyle}
                            onEndReachedThreshold={height / 2}
                            removeClippedSubviews={this.props.removeClippedSubviews ? this.props.removeClippedSubviews : false}
                            enableEmptySections={true}

                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.props.isHideListView}
                                    onRefresh={this.props.Refresh}
                                    title="Loading..."/>
                            }
                            onScroll={this.onScroll}
                            onEndReached={this.props.LoreMore}
                            renderRow={this.props.renderRow}/>
                        : this.ActivityIndicator()
                    }
                </View>
            )
        }

    }


    renderSeparator =()=>{
        return null
    }

    isEnter = false;
    handleEndDrag = (event, _scrollView)=> {
        var endposition = event.nativeEvent.contentOffset.y;//取得拖拉后的位置
        // var stepheight=this.state.dimensionsY;
        //  alert(endposition+","+this.state.positionY);
        // var flag=endposition-this.state.positionY;
        // if(flag>0){
        //     var newpositionY=this.state.positionY+stepheight;
        //     if(newpositionY>=(2*stepheight)){
        //         newpositionY=2*stepheight;
        //     }
        //     _scrollView.scrollTo({y:newpositionY});
        //     this.setState({positionY:newpositionY});
        // }else if(flag<0){
        //     let newpositionY=this.state.positionY-stepheight;
        //     _scrollView.scrollTo({y:newpositionY});
        //     this.setState({positionY:newpositionY});
        // }
        let page = parseInt(endposition / height);
        if (page >= 1) {
            if (this.isEnter == false) {
                this.isEnter = true;
                this.setState({page: page + 1, top: 'top'});
                setTimeout(() => {
                    this.setState({page: '1'});
                    this.isEnter = false;
                }, 5000);
            }
        }
        if (page == 0) {
            this.setState({page: '1', top: ''});
        }
        console.log(page);
        console.log(height);
    }


    onScroll = ()=> {
        // if (Platform.OS === 'ios') {
        //     dismissKeyboard();
        // }
    }


    // contentContainerStyle={styles.listStyle}
    // renderSeparator=(sectionID, rowID, adjacentRowHighlighted)=> {
    //     return (
    //         <View key={rowID} style={styles.separatorLine}/>
    //     );
    // }

    renderFooter = ()=> {
        let isEmptyFootStr = this.props.isEmptyFoot == true ? '上拉加载更多' : '没有更多数据了';//数据是否加载完成
        return (
            <View style={styles.emptyFoot}>
                <Text style={styles.emptyFootTxt}>{isEmptyFootStr}</Text>
            </View>
        )
    }

    ActivityIndicator() {

        let tip = 'loading...'
        let imageURL = ''
        if (this.props.isError == true) {
            tip = this.props.ErrorStr ? this.props.ErrorStr : '网络异常,轻触重新请求'
            // tip ='网络异常,轻触重新请求'
            imageURL = require('../../images/errorTip.png')
        }
        if (this.props.isEmpty == true) {
            tip = this.props.EmptyStr ? this.props.EmptyStr : '暂无更多,轻触重新请求'
            // tip = '暂无更多,轻触重新请求'
            imageURL = require('../../images/withOut.png')
        }

        let backgroundColorX = this.props.backgroundColor ? this.props.backgroundColor : CommonStyle.PAGE_BG_COLOR

        if (this.props.isHideListView == true && tip == 'loading...') {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{
                        width: 110,
                        height: 110,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#AAAAAA',
                        borderRadius: 5
                    }}>
                        <ActivityIndicator color='white' size='large'/>
                        <Text style={{marginTop: 15, color: 'white'}}>{tip}</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: backgroundColorX,
                    }}
                    onPress={
                        this.props.Refresh
                    }>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Image source={imageURL} style={{width: 100, height: 100}}/>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', marginTop: 10}}><Text
                        style={{color: '#999'}}>{tip}</Text></View>
                </TouchableOpacity>
            )
        }

    }



    renderBodyView(isHideListView) {

        if (isHideListView == 'Refreshing') {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{
                        width: 110,
                        height: 110,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'gray',
                        borderRadius: 5
                    }}>
                        <ActivityIndicator color='white' size='large'/>
                        <Text style={{marginTop: 15, color: 'white'}}>{'正在加载中....'}</Text>
                    </View>
                </View>
            );

        } else if (isHideListView == 'RefreshEmpty') {
            let backgroundColorX = this.props.backgroundColor ? this.props.backgroundColor : 'rgb(222,222,222)'
            let imageURL = require('../../images/withOut.png')
            let tip = this.props.EmptyStr ? this.props.EmptyStr : '暂无更多,轻触重新请求';
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: backgroundColorX,
                    }}
                    onPress={()=> {
                        this.props.onPress ? this.props.onPress(0) : ()=> {
                        }
                    }}>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Image source={imageURL} style={{width: 100, height: 100}}/>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', marginTop: 10}}><Text
                        style={{color: '#999'}}>{tip}</Text></View>
                </TouchableOpacity>
            )
        } else if (isHideListView == 'RefreshError') {
            let backgroundColorX = this.props.backgroundColor ? this.props.backgroundColor : 'rgb(222,222,222)'
            let imageURL = require('../../images/errorTip.png')
            let tip = this.props.ErrorStr ? this.props.ErrorStr : '加载异常,轻触重新请求';
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: backgroundColorX,
                    }}
                    onPress={()=> {
                        this.props.onPress ? this.props.onPress(1) : ()=> {
                        }
                    }}>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Image source={imageURL} style={{width: 100, height: 100}}/>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', marginTop: 10}}><Text
                        style={{color: '#999'}}>{tip}</Text></View>
                </TouchableOpacity>
            )
        } else {

        }
    }

    renderFooter2 = ()=> {

        if (this.props.isLoreMoreing == 'LoreMoreing') {
            // let isEmptyFootStr = this.props.isEmptyFoot == true ? '上拉加载更多' : '没有更多数据了';//数据是否加载完成
            return (
                <View style={styles.emptyFoot}>
                    <ActivityIndicator color='gray' size='small'/>
                    <Text style={styles.emptyFootTxt}>{'正在加载.....'}</Text>
                </View>
            )
        } else if (this.props.isLoreMoreing == 'LoreMorehaveData') {
            return (
                <View style={styles.emptyFoot}>
                    <ActivityIndicator color='gray' size='small'/>
                    <Text style={styles.emptyFootTxt}>{'正在加载.....'}</Text>
                </View>
            )
        } else if (this.props.isLoreMoreing == 'LoreMoreEmpty') {
            return (
                <View style={styles.emptyFoot}>
                    <Text style={styles.emptyFootTxt}>{'暂无更多数据'}</Text>
                </View>
            )
        } else if (this.props.isLoreMoreing == 'LoreMoreError') {
            return (
                <TouchableOpacity onPress={()=> {this.props.onPress ? this.props.onPress(2) : ()=> {}}} style={styles.emptyFoot}>
                    <Text style={styles.emptyFootTxt}>{'加载异常,请重新加载'}</Text>
                </TouchableOpacity>
            )
        } else {

        }


    }




}

const
    styles = StyleSheet.create({
        superViewStyle: {
            backgroundColor: 'white',
            flexDirection: 'row',
            padding: 10,
            flex: 1,
        },
        emptyFoot: {
            width: width,
            // flex:1,
            padding: 10,


        },
        emptyFootTxt: {
            color: '#999',
            textAlign: 'center'
        }
    });




