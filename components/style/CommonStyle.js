/**
 * Created by lipeiwei on 17/1/6.
 */

import {
    StyleSheet
} from 'react-native';



const colors = {
    //婴桶
    //婴桶
    MAIN_COLOR_DG: '#fe5050',//背景主色调,红色
    MAIN_COLOR_SY: 'rgb(65,130,248)',//背景主色调,蓝色
    MAIN_COLOR_SHOP: 'black',//背景主色调,橙色
    MAIN_COLOR: 'rgb(250,50,64)',//背景主色调,红色
    TEXT_GRAY_COLOR:'#c7c7cc',  //如:导航默认显示颜色
    TEXT_COLOR: '#333333', //大众字段颜色
    DEC_COLOR: '#666',//描述
    TIPS_COLOR: '#999',//提示语
    UNDER_LINE_COLOR:'#efeff4',   //下划线,超浅色
    BLACK_COLOR:'black',  //黑色
    WHITE_COLOR:'#FFF',  //白色
    PAGE_BG_COLOR:'rgb(235,235,241)',  //页面背景色
    RED_COLOR:'#ff3c00',  //红色
    MAIN_COLOR_BLUE:'rgb(65,130,248)',  //主颜色---蓝色
    MAIN_COLOR_YELLOW:'rgb(247,180,15)',  //主颜色---黄色
    MAIN_COLOR_ORANGE:'rgb(247,180,15)',  //主颜色---黄色
    MAIN_COLOR_RED:'#fe5050',  //主颜色---黄色



    //婴桶
    //
    // TEXT_GRAY_COLOR:'#c7c7cc',  //如:导航默认显示颜色
    // TEXT_COLOR: '#333333', //大众字段颜色
    // DEC_COLOR: '#666',//描述
    // TIPS_COLOR: '#999',//提示语
    // UNDER_LINE_COLOR:'#efeff4',   //下划线,超浅色
    // BLACK_COLOR:'#101010',  //黑色
    // WHITE_COLOR:'#FFF',  //白色
    // PAGE_BG_COLOR:'#f7fcff',  //页面背景色
    // RED_COLOR:'#ff3c00'  //红色



};


const textSize = {
    BigTitle : 18,//大标题
    NormalTitle : 16,//小标题
    DecTitle : 14,//内容展示
    TipTitle : 11,//提示语
};



export default {
    ...colors,
    ...textSize,
    VERTICAL_SPACE: 15,
    HORIZONTAL_SPACE: 15,
    activeOpacity: 0.7,
    TEXT_SIZE:16,
};
