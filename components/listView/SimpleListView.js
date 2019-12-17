import React, {Component} from 'react'
import PropTypes from 'prop-types'
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
    ActivityIndicator,
    Platform
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


export default class SimpleListView extends Component {


    static Refreshing = 'Refreshing';
    static RefreshHaveData = 'RefreshHaveData';
    static RefreshEmpty = 'RefreshEmpty';
    static RefreshError = 'RefreshError';

    static LoreMoreing = 'LoreMoreing';
    static LoreMorehaveData = 'LoreMorehaveData';
    static LoreMoreEmpty = 'LoreMoreEmpty';
    static LoreMoreError = 'LoreMoreError';


    _flatList;

    constructor(props) {
        super(props)

        this.state = {
            dataSource: this.props.dataSource ? this.props.dataSource : [],
            refreshing: true,
            top: '',
            isHideListView: 'Refreshing',
            isLoreMoreing: 'LoreMoreing',
            refreshingTip: 'loading'//下拉刷新提示语
        };
    }

    responseData = [];//请求数据


    ReFresh(isReFresh, dataArray) {
        if (isReFresh == 'Refreshing') {
            this.setState({
                refreshing: true,
            })

            // console.warn('加载中');
        } else if (isReFresh == 'RefreshHaveData') {
            this.responseData = dataArray
            if (this.responseData.length > 0) {
                if (this.responseData.length <= 10) {
                    setTimeout(() => {
                        this.setState({
                            isLoreMoreing: LoreMoreEmpty,
                        })
                    }, 1000);
                }
                this.setState({
                    // refreshing: true,
                    // dataSource: [],
                    isLoreMoreing: 'LoreMoreing',
                })


                if(Platform.OS == 'ios'){
                    setTimeout(() => {
                        this.setState({
                            dataSource: dataArray,
                            isHideListView: 'RefreshHaveData',
                            refreshing: false,
                        })
                    }, 300);
                }else{
                    setTimeout(() => {
                        this.setState({
                            dataSource: dataArray,
                            isHideListView: 'RefreshHaveData',
                            refreshing: false,
                        })
                    }, 1000);
                }
                // console.warn('有数据');
            } else {

                this.setState({
                    isHideListView: 'RefreshEmpty',
                    refreshing: false,
                })

                // console.warn('没数据');
            }

        } else if (isReFresh == 'RefreshError') {
            this.setState({
                isHideListView: 'RefreshError',
                refreshing: false,
            })
            // console.warn('刷新异常');
        }else if (isReFresh == 'RefreshEmpty') {

            this.setState({
                isHideListView: 'RefreshEmpty',
                refreshing: false,
            })
            // console.warn('刷新异常');
        }

    }


    LoreMore(isLoreMore, dataArray) {

        if (this.responseData.length < 10) {
            this.setState({
                isLoreMoreing: LoreMoreEmpty,
            })
            return;
        }

        if (isLoreMore == 'LoreMoreing') {
            this.setState({
                isLoreMoreing: LoreMoreing,
            })
            // console.warn('加载中');
        } else if (isLoreMore == 'LoreMorehaveData') {
            // console.warn('有数据');


            this.responseData = this.responseData.concat(dataArray);
            setTimeout(() => {
                this.setState({
                    dataSource: this.responseData,
                    isLoreMoreing: LoreMorehaveData,
                })
            }, 300);

            setTimeout(() => {
                this.setState({
                    isLoreMoreing: LoreMoreEmpty,
                })
            }, 1000);

            // console.warn('有数据');
        } else if (isLoreMore == 'LoreMoreEmpty') {
            // console.warn('没数据');
            setTimeout(() => {
                this.setState({
                    isLoreMoreing: LoreMoreEmpty,
                })
            }, 300);
            // console.warn('没数据');
        } else if (isLoreMore == 'LoreMoreError') {
            setTimeout(() => {
                this.setState({
                    isLoreMoreing: LoreMoreError,
                })
            }, 300);
            // console.warn('刷新异常');
        }
    }

    goToTop (){
        if (this._flatList) {
            this._flatList.scrollToIndex({ viewPosition: 0, index: 0 });
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
                <View style={{flex: 1}}>
                    <FlatList
                        {...this.props}
                        contentContainerStyle={[{backgroundColor: 'rgb(245,251,255)'}, this.props.style]}
                        removeClippedSubviews={this.props.removeClippedSubviews ? this.props.removeClippedSubviews : false}
                        enableEmptySections={true}
                        ref={(flatList)=>this._flatList = flatList}
                        ItemSeparatorComponent={this.props.renderSeparator ? this.props.renderSeparator : this.renderSeparator}
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
                        keyExtractor={(item, index) => item.key = index.toString()}
                        onEndReachedThreshold={0.1}
                        onEndReached={this.props.LoreMore}
                        onScrollEndDrag={this.handleEndDrag}

                        data={this.state.dataSource}/>
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
        } else if (isHideListView == 'RefreshEmpty') {
            let backgroundColorX = this.props.backgroundColor ? this.props.backgroundColor : 'rgb(245,251,255)'
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
            let backgroundColorX = this.props.backgroundColor ? this.props.backgroundColor :'rgb(245,251,255)'
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

    renderSeparator = ()=>{
        return <View style={{marginLeft:5,height:1,backgroundColor:'rgb(235,235,241)'}}/>;
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
                }} style={styles.emptyFoot}>
                    <Text style={styles.emptyFootTxt}>{'加载异常,请重新加载'}</Text>
                </TouchableOpacity>
            )
        } else {

        }


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
        this.props.handleEndDrag ? this.props.handleEndDrag(event, _scrollView) :()=>{}
        console.log(page);
        console.log(height);
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


