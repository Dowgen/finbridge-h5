import * as pickerList from './pickerList'; /* popup-picker所需的列表数据 */
import { ToastPlugin,LoadingPlugin } from 'vux'
import Vue from 'vue';
import axios from 'axios';
import $ from 'jquery';

Vue.use(ToastPlugin); 
Vue.use(LoadingPlugin); 


//定义一个空vue对象，以备后用
var vm = new Vue({});

//全局域名设置
var webDomain = 'https://finbridge.cn';
var apiDomain = 'https://api.moneyboom.cn';
/*var apiDomain = 'http://192.168.2.169:8060';*/

//localStorage清除
localStorage.removeItem('addAssetParams');
localStorage.removeItem('addFundParams');

// axios response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            /*vm.$vux.loading.hide();*/
            switch (error.response.status) {
                case 303:
                    // 返回 303
                    vm.$vux.toast.text('session过期，请重新登录！','middle');
                    vm.$router.push('/Login')
                    break;
                case 401:
                    // 返回 401 重新获取token并刷新当前页面
                    getToken();
                    break;
                default: vm.$vux.toast.text('服务暂不可用，请稍后再试','middle')   
            }
        }
        return Promise.reject(error)   // 返回接口返回的错误信息
    }
);   

/* 进页面的时候就判断一下设备是安卓还是ios 
(function(){
    let u = navigator.userAgent, app = navigator.appVersion;
    //android终端或者uc浏览器
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    //ios终端
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    //需要传给后端的device类型
    let device = 0;
    if(isAndroid) device=3
    else if(isiOS) device=4
    else device=5
    localStorage.deviceType = device
})()*/

/** 获取token  **/
function getToken(){
    axios({
        method: 'post',
        url: apiDomain + '/uaa/oauth/token',
        headers:  {
            Accept:'application/json',
            Authorization:'Basic anVoZV9jYXNobG9hbjpKdWhlMTIzNjc4IUAj'
        },
        params: {
            username:'juhe',
            password:'Juhe2017!@#',
            grant_type:'password',
            scope:'read write'
        },
        /*headers: {
          Accept:'application/json',
          Authorization:'Basic Y2xpZW50OnNlY3JldA=='
        },
        params:{
          username:'anil',
          password:'password',
          grant_type:'password',
          scope:'read write'
        },*/
        responseType:  'json'
    }).then(function(res){
        if(res.status == 200 ){
            localStorage.token = res.data.access_token;
        }else{
            vm.$vux.toast.text('获取token异常！请重试')
        }
        window.location.reload();
    }).catch(function (error){
        vm.$vux.toast.text('获取token异常！请重试')
    });
}

//库
var Rxports = {
	/* wb add start */

    /* 域名 */
    webDomain: webDomain,
    apiDomain: apiDomain,

    /**    列表    **/
    eduList: pickerList.eduList,
    mariList: pickerList.mariList,
    cityList: pickerList.cityList,
    AFList: pickerList.AFList,

    /* input type=number */
    clearNoNum:function(obj){
        //先把非数字的都替换掉，除了数字和.
        obj.value = obj.value.replace(/[^\d.]/g,"");
        //必须保证第一个为数字而不是.
        obj.value = obj.value.replace(/^\./g,"");
        //保证只有出现一个.而没有多个.
        obj.value = obj.value.replace(/\.{2,}/g,".");
        //保证.只出现一次，而不能出现两次以上
        obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
    },

    /** 输入起始日期和有效天数，返回剩余天数 */
    getCountDownDay:function (beginDate,efDay){
        var now = new Date();
        var beginDate = new Date(beginDate.replace(/-/g,'/'));
        var pastDays = parseInt((now - beginDate)  /  1000  /  60  /  60  /24);
        return (efDay - pastDays) ;
    },
	/* wb add end */


	/**
	  * 封装axios，减少学习成本，参数基本跟jq ajax一致
	  * @param {String} type			请求的类型，默认post
	  * @param {String} url				请求地址
	  * @param {String} time			超时时间
	  * @param {Object} data			请求参数
	  * @param {String} dataType		预期服务器返回的数据类型，xml html json ...
	  * @param {Object} headers			自定义请求headers
	  * @param {Function} success		请求成功后，这里会有两个参数,服务器返回数据，返回状态，[data, res]
	  * @param {Function} error		发送请求前
	  * @param return
	*/
	ajax:function (opt){
		/*vm.$vux.loading.show({
            text: '请稍等'
        });*/
		var opts = opt || {};

		if (!opts.url) {
			alert('请填写接口地址');
			return false;
		}

		axios({
			method: opts.type || 'post',
			url: opts.url,
            data: opts.data || {},
			params: opts.params || {},
			headers: opts.headers || {
                'Authorization':'Bearer '+ localStorage.token,
                /*'authKey':localStorage.authKey,
                'sessionId':localStorage.sessionId,
                'phone':localStorage.phoneNum*/
      },
			// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  		// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
			baseURL: apiDomain + '/finbridge-base',
			timeout: opts.timeout || 0,
			responseType: opts.dataType || 'json'
		}).then(function(res){
            /*vm.$vux.loading.hide();*/
			if(res.status == 200 ){
				if(opts.success){
					opts.success(res.data,res);
				}
			}else{
				if (opts.error) {
					opts.error(res.error);
				}else{
          console.error('then:'+res.error);
        }
      }
    }).catch(function (error){
        /*vm.$vux.loading.hide();*/
        if (opts.error) {
            opts.error(error);
        }else{
				  console.error('catch:'+error);
			  }
		});
	},
	/**
	  * 获取url传过来的参数
	  * @param name 	获取的参数
	  * @param Url 		自定义获取参数的链接
	  * @param return
	*/
    GetQueryString:function (name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    },
    /* 手机号码是否非法 */
    isPhoneWrong:function (num){
      if (!num || !num.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[36780]|18[0-9]|14[57])[0-9]{8}$/)) {
        return true;
      } else {
        return false;
      }
    },
    /* 解析 */
    //用户平台类型数字转化为文字
    getUserType:function (key){
      var f = JSON.parse(localStorage.userType);
      for(let i in f){
        if(f[i].key == key) return f[i].label
      }
    },
    //资金资产类型数字转化为文字
    getFundAmountType:function (key){
      var f = JSON.parse(localStorage.fundAmountList);
      for(let i in f){
        if(f[i].key == key) return f[i].label
      }
    },
    //微信分享设置
    setWxShareConfig:function(wxSig){
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: wxSig.appid, // 必填，公众号的唯一标识
          timestamp: wxSig.timestamp, // 必填，生成签名的时间戳
          nonceStr:  wxSig.noncestr, // 必填，生成签名的随机串
          signature: wxSig.signature,   // 必填，签名，见附录1
          jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(function(){         
          //微信分享设置
          wx.onMenuShareTimeline({
            title: '51资金资产', 
            link:  webDomain, 
            imgUrl: webDomain+'/logo.png', 
            success: function () { 
              vm.$vux.toast.show({
                  showPositionValue: false,
                  text: '分享成功',
                  type: 'success',
                  position: 'middle'
              })
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
          });

          wx.onMenuShareAppMessage({
            title: '51资金资产', 
            desc: '关注51资金资产公众号，获取更多信息', 
            link:  webDomain,
            imgUrl: webDomain+'/logo.png', 
            /*type: '', // 分享类型,music、video或link，不填默认为link*/
            /*dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空*/
            success: function () { 
              vm.$vux.toast.show({
                  showPositionValue: false,
                  text: '分享成功',
                  type: 'success',
                  position: 'middle'
              })
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
          });
        });
    }
};
//获得用户平台类型列表
Rxports.ajax({
    url:'/dict/getDict',
    data:{
      'dictName':'userType'
    },
    success:function (res) {
      localStorage.userType = JSON.stringify(res.data);
    },
    error:function(err){
      console.error(err);
    }
});
//获得资金规模类型列表
Rxports.ajax({
    url:'/dict/getDict',
    data:{
      'dictName':'fundAmount'
    },
    success:function (res) {
      localStorage.fundAmountList = JSON.stringify(res.data);
    },
    error:function(err){
      console.error(err);
    }
});

// 获得资金资产统一的失效天数
Rxports.ajax({
  url:'/config/getConfigByParameter',
  data:{
    'key':'unlistPeriod'
  },
  success:function (res) {
    localStorage.validPeriod = res.data[0].value;
    /*console.log(111111);
    console.log(self.validPeriod);*/
  },
  error:function(err){
    console.error(err);
  }
});

export default Rxports;


































