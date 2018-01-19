// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Lib from './assets/js/Lib'

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

let u = navigator.userAgent, app = navigator.appVersion;
localStorage.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
localStorage.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

//微信分享设置
router.beforeEach((to, from, next) => {
  console.log(to);
  //判断ios还是安卓
  if(localStorage.isAndroid){
    let _url = window.location.origin + to.fullPath;
  }else{
    let _url = window.location.href.split('#')[0];
  }
  if (to.path !='/sqProjectDetail' && to.path !='/ProjectDetail') {
    Lib.M.ajax({
      url : '/wechat/wxSig',
      data:{url: encodeURIComponent(_url)},
      success:function(res){
        if(res.code==200){
          let wxSig = res.data;
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
              link:  Lib.M.webDomain, 
              imgUrl: Lib.M.webDomain+'/logo.png', 
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
              link:  Lib.M.webDomain,
              imgUrl: Lib.M.webDomain+'/logo.png', 
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
        }else{
          vm.$vux.toast.text(res.error, 'middle');
        }
      }
    });
  }
  next()
})
