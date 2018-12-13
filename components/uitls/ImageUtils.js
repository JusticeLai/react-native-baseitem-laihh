import React, {Component} from 'react';


export default class ImageUtils extends Component {

    //吐司
    static Path = (imageNmae, flileNmae) => {
        if (imageNmae == 'right_icon') {
            return require('../../images/common/right_icon.png')
        } else if (imageNmae == 'shouyin') {
            return require('../../images/common/shouyin.png')
        } else if (imageNmae == 'kucunpandian') {
            return require('../../images/common/kucunpandian.png')
        } else if (imageNmae == 'shouji') {
            return require('../../images/common/shouji.png')
        } else if (imageNmae == 'shouyingtongji') {
            return require('../../images/common/shouyingtongji.png')
        } else if (imageNmae == 'saoyisao') {
            return require('../../images/common/saoyisao.png')
        } else if (imageNmae == 'chat') {
            return require('../../images/common/chat.png')
        } else if (imageNmae == 'chat2') {
            return require('../../images/common/chat2.png')
        } else if (imageNmae == 'search_blue') {
            return require('../../images/common/search_blue.png')
        }else if (imageNmae == 'printBtn') {
            return require('../../images/common/printBtn.png')
        }else if (imageNmae == 'searchBtn') {
            return require('../../images/common/icon_search.png')
        }else if (imageNmae == 'bluesearch') {
            return require('../../images/common/bluesearch.png')
        }else if (imageNmae == 'choosetype') {
            return require('../../images/common/choosetype.png')
        }else if (imageNmae == 'greenSuccess') {
            return require('../../images/common/greenSuccess.png')
        } else if (imageNmae == 'shop_car') {
            return require('../../images/common/shop_car.png')
        } else if (imageNmae == 'delete_sku') {
            return require('../../images/common/delete_sku.png')
        } else if (imageNmae == 'zhekou') {
            return require('../../images/common/zhekou.png')
        } else if (imageNmae == 'buygive') {
            return require('../../images/common/buygive.png')
        }else if (imageNmae == 'withOut') {
            return require('../../images/withOut.png')
        }else if (imageNmae == 'errorTip') {
            return require('../../images/errorTip.png')
        }





    };

}


