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

//微信分享设置
let u = navigator.userAgent, app = navigator.appVersion;
localStorage.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
localStorage.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

router.beforeEach((to, from, next) => {
  console.log(to);
  //判断ios还是安卓
  if(localStorage.isAndroid == 'true'){
    var _url = window.location.origin + to.fullPath;
  }else{
    var _url = window.location.href.split('#')[0];
  }
  if (to.path !='/sqProjectDetail' && to.path !='/ProjectDetail') {
    Lib.M.ajax({
      url : '/wechat/wxSig',
      data:{url: _url},
      success:function(res){
        if(res.code==200){
          let wxSig = res.data;
          Lib.M.setWxShareConfig(wxSig);
        }else{
          vm.$vux.toast.text(res.error, 'middle');
        }
      }
    });
  }
  next()
})
