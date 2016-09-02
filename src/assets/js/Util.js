/***
 *desc: 数据请求模块
 *date: 2016-09-02
 *author: maicon
 ***/

import $ from 'jquery'
import {
    STATIC_RUL
} from './ConfigDev'
const md5 = require('md5');

const ajax = function(url, data, beforeSend, success, error, complete) {
    var initPar = {
        timestamp: parseInt(new Date().getTime() / 1000)
    };
    initPar = $.extend(initPar, data);
    var parameter = {
        sign: sigin(initPar),
        data: JSON.stringify(initPar)
    };
    console.log(parameter);

    $.ajax({
        type: 'post',
        url: STATIC_RUL + url,
        data: parameter,
        timeout: 6000,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: 'json',
        beforeSend: function() {
            beforeSend();
        },
        success: function(d) {
            success(d);
        },
        error: function(d) {
            error(d);
        },
        complete: function(d) {
            complete(d);
        }
    })
}

function sortBy(Obj) {
    var _ObjKey = getKey(Obj);
    var _return = [];
    _ObjKey.sort(function(a, b) {
        return a > b ? 1 : -1;
    });
    for (var i in _ObjKey) {
        _return.push(Obj[_ObjKey[i]]);
    }
    return _return;
}

function sigin(Obj) {
    var _separator = 'hhb';
    var _signPre = '';
    var count = getCount(Obj);
    var j = 0;
    var _returnObj = sortBy(Obj);
    for (var i in _returnObj) {
        if (j != count - 1) {
            _signPre += _returnObj[i] + _separator;
        } else {
            _signPre += _returnObj[i];
        }
        j++;
    }
    return md5(_signPre);
}

function getCount(obj) {
    var num = 0;
    for (var key in obj) {
        num++;
    }
    return num;
}

function getKey(obj) {
    var str = [];
    for (var key in obj) {
        str.push(key);
    }
    return str;
}

// function aes(t) {
//     var key = CryptoJS.enc.Utf8.parse(AES_128_TRANSFER_KEY);
//     var iv = CryptoJS.enc.Utf8.parse(AES_128_TRANSFER_IV);
//     var encrypted = CryptoJS.AES.encrypt(t, key, {iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding});
//     return encrypted.toString();
// }

export {
    ajax
};