import React, {Component, PropTypes} from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    Image,
    FlatList,
    RefreshControl,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'

let {width, height} = Dimensions.get('window');

let Refreshing = 'Refreshing';
let RefreshHaveData = 'RefreshHaveData';
let RefreshEmpty = 'RefreshEmpty';
let RefreshError = 'RefreshError';


let LoreMoreing = 'LoreMoreing';
let LoreMorehaveData = 'LoreMorehaveData';
let LoreMoreEmpty = 'LoreMoreEmpty';
let LoreMoreError = 'LoreMoreError';


export default class MyListView extends Component {


    static Refreshing = 'Refreshing';
    static RefreshHaveData = 'RefreshHaveData';
    static RefreshEmpty = 'RefreshEmpty';
    static RefreshError = 'RefreshError';

    static LoreMoreing = 'LoreMoreing';
    static LoreMorehaveData = 'LoreMorehaveData';
    static LoreMoreEmpty = 'LoreMoreEmpty';
    static LoreMoreError = 'LoreMoreError';


    constructor(props) {
        super(props)
        this.state = {
            refreshing: true,
            isHideListView: 'Refreshing',
            isLoreMoreing: 'LoreMoreing',
            refreshingTip: 'loading'//下拉刷新提示语
        };
    }


    ReFresh(isReFresh) {
        if (isReFresh == 'Refreshing') {
            this.setState({
                refreshing: true,
            })
            // console.warn('加载中');
        } else if (isReFresh == 'RefreshHaveData') {
            this.setState({
                isHideListView: 'RefreshHaveData',
                refreshing: false,
            })
            // console.warn('有数据');
        } else if (isReFresh == 'RefreshEmpty') {
            this.setState({
                isHideListView: 'RefreshEmpty',
                refreshing: false,
            })
            // console.warn('没数据');
        } else if (isReFresh == 'RefreshError') {
            this.setState({
                isHideListView: 'RefreshError',
                refreshing: false,
            })
            // console.warn('刷新异常');
        }
    }


    LoreMore(isLoreMore) {
        if (isLoreMore == 'LoreMoreing') {
            this.setState({
                isLoreMoreing: LoreMoreing,
            })
            // console.warn('加载中');
        } else if (isLoreMore == 'LoreMorehaveData') {
            // console.warn('有数据');
            setTimeout(() => {
                this.setState({
                    isLoreMoreing: LoreMorehaveData,
                })
            }, 1500);
            // console.warn('有数据');
        } else if (isLoreMore == 'LoreMoreEmpty') {
            // console.warn('没数据');
            setTimeout(() => {
                this.setState({
                    isLoreMoreing: LoreMoreEmpty,
                })
            }, 1500);
            // console.warn('没数据');
        } else if (isLoreMore == 'LoreMoreError') {
            setTimeout(() => {
                this.setState({
                    isLoreMoreing: LoreMoreError,
                })
            }, 1500);
            // console.warn('刷新异常');
        }
    }


    render() {
        return (
            this.renderBodyView(this.state.isHideListView)
        )
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

        } else if (isHideListView == 'RefreshHaveData') {
            return (
                <FlatList
                    {...this.props}
                    contentContainerStyle={[{backgroundColor:'rgb(250,250,250)'},this.props.style]}
                    removeClippedSubviews={this.props.removeClippedSubviews ? this.props.removeClippedSubviews : false}
                    enableEmptySections={true}
                    //ref={(flatList)=>this.flatList = flatList}
                    ListHeaderComponent={this.props.renderHeader ? this.props.renderHeader : null}
                    ListFooterComponent={this.renderFooter}
                    renderItem={this.props.renderRow}
                    numColumns={this.props.numColumns ? this.props.numColumns : 1}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.props.Refresh}
                            title={this.state.refreshingTip}/>
                    }
                    keyExtractor={(item, index)=>item.key = index}
                    onEndReachedThreshold={1}
                    onEndReached={this.props.LoreMore}
                    onScrollEndDrag={this.handleEndDrag}

                    data={this.props.dataSource}/>
            )
        } else if (isHideListView == 'RefreshEmpty') {
            let backgroundColorX = this.props.backgroundColor ? this.props.backgroundColor : 'rgb(222,222,222)'
            let imageURL =require('../../images/withOut.png')
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


    renderFooter = ()=> {

        if (this.state.isLoreMoreing == 'LoreMoreing') {
            // let isEmptyFootStr = this.props.isEmptyFoot == true ? '上拉加载更多' : '没有更多数据了';//数据是否加载完成
            return (
                <View style={styles.emptyFoot}>
                    <ActivityIndicator color='gray' size='small'/>
                    <Text style={styles.emptyFootTxt}>{'正在加载.....'}</Text>
                </View>
            )
        } else if (this.state.isLoreMoreing == 'LoreMorehaveData') {
            return (
                <View style={styles.emptyFoot}>
                    <ActivityIndicator color='gray' size='small'/>
                    <Text style={styles.emptyFootTxt}>{'正在加载.....'}</Text>
                </View>
            )
        } else if (this.state.isLoreMoreing == 'LoreMoreEmpty') {
            return (
                <View style={styles.emptyFoot}>
                    <Text style={styles.emptyFootTxt}>{'暂无更多数据'}</Text>
                </View>
            )
        } else if (this.state.isLoreMoreing == 'LoreMoreError') {
            return (
                <TouchableOpacity onPress={()=> {
                    this.props.onPress ? this.props.onPress(2) : ()=> {
                    }
                }}>
                    }> style={styles.emptyFoot}>
                    <Text style={styles.emptyFootTxt}>{'加载异常,请重新加载'}</Text>
                </TouchableOpacity>
            )
        } else {

        }


    }


}

const styles = StyleSheet.create({
    emptyFoot: {
        width: width,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center'

    },
    emptyFootTxt: {
        color: '#999',
        textAlign: 'center',
        marginLeft: 10,
    }
});


export {
    Refreshing,
    RefreshHaveData,
    RefreshEmpty,
    RefreshError,

    LoreMoreing,
    LoreMorehaveData,
    LoreMoreEmpty,
    LoreMoreError

}


