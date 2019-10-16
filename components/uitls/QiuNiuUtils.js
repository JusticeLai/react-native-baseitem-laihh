


function uploadFile(uri, token, callBackSuccess, callbackFailure, callbackUpDate) {
    let oloaded;
    return new Promise((resolve, reject) => {
        // if (typeof uri != 'string' || uri == '' || typeof formInput.key == 'undefined') {
        //     reject && reject(null);
        //     return;
        // }
        if (typeof uri != 'string' || uri == '') {
                reject && reject(null);
                return;
            }
        let formInput = {key:"yt-dev"+new Date().getTime()}

        if (uri[0] == '/') {
            uri = "file://" + uri;
        }
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            // console.log( xhr.toString()+"qiniu================neeed")
            switch (xhr.readyState) {
                case 0:
                    //alert("请求未初始化");
                    callbackFailure(0)
                    break;
                case 1:
                    // callBackSuccess(1)
                    break;
                case 2:
                    //上传完成
                    // var data = xhr.responseText;
                    // var message = xhr.response;
                    callBackSuccess(2,formInput.key)
                    break;
                case 3:

                    break;
                case 4:

                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                        // var data = xhr.responseText;
                        // var message = xhr.response;
                        if (xhr.status == 200) {
                            callBackSuccess(200)

                        }

                    } else {
                        if (xhr.status == 401) {

                            callbackFailure(401)
                        } else if (xhr.status == 614) {

                            callbackFailure(614)
                        } else if (xhr.status == 631) {
                            callbackFailure(631)
                        }
                    }

                    break;
            }
        };
        // xhr.open('POST', 'http://upload.qiniu.com');
        xhr.open('POST', 'http://up-z2.qiniu.com'); //华南地址地址


        xhr.onload = () => {
            if (xhr.status !== 200) {
                reject && reject(xhr);
                return;
            }
            resolve && resolve(xhr);
        };
        xhr.onload = uploadComplete; //请求完成
        xhr.onerror = uploadFailed; //请求失败
        xhr.upload.onprogress = (evt) => {
            oloaded = evt.loaded;//重新赋值已上传文件大小，用以下次计算
            console.log("qinniu+==================================" + Math.round(oloaded / evt.total * 100))
            callbackUpDate(Math.round(oloaded / evt.total * 100))
        };

        var formdata = new FormData();
        formdata.append("key", formInput.key);
        formdata.append("token", token);
        if (typeof formInput.type == 'undefined')
            formInput.type = 'application/octet-stream';
        if (typeof formInput.name == 'undefined') {
            var filePath = uri.split("/");
            if (filePath.length > 0)
                formInput.name = filePath[filePath.length - 1];
            else
                formInput.name = "";
        }
        formdata.append("file", { uri: uri, type: formInput.type, name: formInput.name });
        // xhr.upload.onprogress = (event) => {
        //   onprogress && onprogress(event, xhr);
        // };
        xhr.upload.onloadstart = () => {//上传开始执行方法
            oloaded = 0;//设置上传开始时，以上传的文件大小为0
            console.log("qinniu+==================================oloaded" + oloaded)
        };
        xhr.send(formdata);
    });
}
//上传成功响应
function uploadComplete(evt) {
    //服务断接收完文件返回的结果
    //    alert(evt.target.responseText);
}
//上传失败
function uploadFailed(evt) {

}
export default  uploadFile