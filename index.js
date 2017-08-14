import SCBaseItemView from './components/baseItem/index';
import EasyListView from './components/listView/EasyListView';


import BackGroundImageView from './components/baseImage/BackGroundImageView';
import ImageTextView from './components/baseImage/ImageTextView';



import CommonStyle from './components/style/CommonStyle';
import Utils from './components/uitls/Utils';
import DBUtils from './components/uitls/DBUtils';


let height = Utils.getWindow().height;
let width = Utils.getWindow().width;


export {
    SCBaseItemView,
    EasyListView,
    BackGroundImageView,
    ImageTextView,
    CommonStyle,
    Utils,
    DBUtils,
    height,
    width
}

