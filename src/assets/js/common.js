import * as pickerList from './pickerList'; /* popup-picker所需的列表数据 */
import { ToastPlugin,LoadingPlugin } from 'vux'
import Vue from 'vue';
import axios from 'axios';
Vue.use(ToastPlugin); 
Vue.use(LoadingPlugin); 


//定义一个空vue对象，以备后用
var vm = new Vue({});

// axios response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            vm.$vux.loading.hide();
            switch (error.response.status) {
                case 303:
                    // 返回 303
                    vm.$vux.toast.text('session过期，请重新登录！','middle');
                    vm.$router.push('/Login')
                    break;
                case 401:
                    // 返回 401 重新获取token并刷新当前页面
                    getToken();
                    vm.$router.go(0);
                    break;
                default: vm.$vux.toast.text('请求异常！请重试','middle')   
            }
        }
        return Promise.reject(error)   // 返回接口返回的错误信息
    }
);
        

/* 进页面的时候就判断一下设备是安卓还是ios */
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
})()

/** 获取token  **/
function getToken(){
    vm.$vux.loading.show({
        text: '请稍等'
    });
    axios({
        method: 'post',
        url: 'http://118.31.189.23:8060/uaa/oauth/token',
        params: {
            username:'juhe',
            password:'Juhe2017!@#',
            grant_type:'password',
            scope:'read write'
        },
        headers:  {
            Accept:'application/json',
            Authorization:'Basic anVoZV9jYXNobG9hbjpKdWhlMTIzNjc4IUAj'
        },
        responseType:  'json'
    }).then(function(res){
        vm.$vux.loading.hide();
        if(res.status == 200 ){
            localStorage.token = res.data.access_token;
        }else{
            vm.$vux.toast.text('获取token异常！请重试')
        }
    }).catch(function (error){
        vm.$vux.loading.hide();
        vm.$vux.toast.text('获取token异常！请重试')
    });
}
getToken();

var Rxports = {
	/* wb add start */
    /**    列表    **/
    eduList: pickerList.eduList,
    mariList: pickerList.mariList,
    cityList: pickerList.cityList,
    /*workTypeList: pickerList.workTypeList,*/
    /*adviceList: pickerList.adviceList,*/

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
		vm.$vux.loading.show({
            text: '请稍等'
        });
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
			baseURL:'http://118.31.189.23:8060/finbridge-base',
			timeout: opts.timeout || 0,
			responseType: opts.dataType || 'json'
		}).then(function(res){
            vm.$vux.loading.hide();
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
            vm.$vux.loading.hide();
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
      if (!num || !num.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[6780]|18[0-9]|14[57])[0-9]{8}$/)) {
        return true;
      } else {
        return false;
      }
    }
};


export default Rxports;


































