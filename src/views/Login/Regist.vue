<template>
  <div class="hello">
    <!--<div class="hello-head">
      <img src="./img/close.png" alt="">
    </div>-->
    <img class="logo" src="./img/logo.png">
    <h1 style="margin-top: 0.655rem;">&nbsp 您好！</h1>
    <h1>请注册开始使用</h1>
    <div class="input" style=" position: relative;">
      <input type="text" placeholder="手机号码" class="phone" maxlength="11" v-model="phoneNum">
      <input type="password" placeholder="请输入密码" class="psd" maxlength="14" v-model="password">
      <input type="number" v-model="verifyCode">
      <span class="yzm">
        <div v-show="start" >
          <countdown v-model="time1" :start="start" @on-finish="finish1"></countdown><span style="padding-left:0.15rem">s</span>
        </div>
        <div v-show="!start" @click="begin1">{{countDownText}}</div>
      </span>
    </div>
    <div class="footer">
      <Btn backgroundColor="#D7D7D7" msg="注册" v-show="phoneNum==''"
      @click.native="clickBtn" style="margin: 0 auto 1.595rem"></Btn>
      <Btn backgroundColor="#4083FF" msg="注册" v-show="phoneNum!==''"
      @click.native="clickBtn" style="margin: 0 auto 1.595rem"></Btn>
      <router-link to="/Login" style="color: #4083FF;">已有账户? 立即登录</router-link>
    </div>
  </div>
</template>

<script>
import Sha1 from './sha1'
import Lib from '@/assets/js/Lib'
import Btn from '@/components/btn'
import { Countdown } from 'vux'

export default {
  name: 'Regist',
  components: {
    Btn,Countdown
  },
  data () {
    return {
      code:null, //微信会在url里带code
      phoneNum:'',
      password:'',
      verifyCode:'',
      /* countdown所需参数 */
      time1: 60,
      start: false,
      countDownText:'发送验证码',
    }
  },
  mounted(){
    this.code = Lib.M.GetQueryString('code')
    this.getOpenId();
  },
  methods: {
    //拿到code传给后台获取用户的微信openId
    getOpenId(){
      var self = this;
      if(this.code!=null){
        Lib.M.ajax({
          url:'/wechat/getOpenId',
          data:{
            'code':self.code
          },
          success:function (res) {
            if(res.code==200){
              localStorage.openId = res.data.openId;
            }else{
              self.$vux.toast.text(res.error, 'middle');
            }
          },
          error:function(err){
            console.error(err);
          }
        });
      }
    },
    /* 开始倒计时 */
    begin1(){
      if(Lib.M.isPhoneWrong(this.phoneNum)){
        this.$vux.toast.text('手机号码不合法！','middle');
      }else{
        this.start = true;
        this.sendVerify();
      }
    },
    /* 倒计时结束时触发 */
    finish1 (index) {
      this.start = false
      this.time1 = 60
      this.countDownText = '重新发送'
    },
    /* 用户点击注册按钮 */
    clickBtn(){
      if(this.phoneNum==='' 
        || this.verifyCode==='' 
        || this.password === ''){
        this.$vux.toast.text('参数请填写完整！', 'middle')
      }else{
        if(!this.checkPassword(this.password)){

        }else{
          /* 先验证短信，然后根据登录方式决定是注册还是更改密码 */
          if(localStorage.openId!=null && localStorage.openId!='undefined'){
            if(this.code!=null){
              this.regist();
            }else{
              this.$vux.toast.text("请关注51资金资产公众号注册使用本系统", 'middle')
            }
          }else{
            this.$vux.toast.text("请关注'51资金资产'公众号,通过公众号注册", 'middle')
          }
        }
      }
    },
    /* 发送验证码 */
    sendVerify(){
      var self = this;
      Lib.M.ajax({
        url : '/msg/sendVerify',
        data:{
          phone: self.phoneNum
        },
        success:function(res){
          if(res.code==200){
            self.$vux.toast.text('发送成功！', 'middle')
          }else{
            self.$vux.toast.text(res.error, 'middle')
          }
        }
      });
    },
     /* 注册 */
    regist(){
      var self = this;
      Lib.M.ajax({
        url : '/user/regist',
        data:{
          phone: self.phoneNum,
          password: sha1(self.password).toUpperCase(),
          cerifyCode: self.verifyCode,
          openId: localStorage.openId
        },
        success:function(res){
          if(res.code==200){
            localStorage.userId = res.data.userId;
            localStorage.phoneNum = self.phoneNum;
            self.$vux.toast.text('注册成功！', 'middle');
            self.$router.replace('/');
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },
    /* 校验密码 */
    checkPassword(num){
      let reg = /^(?![^a-zA-Z]+$)(?!\D+$)/;
      let pass1 = reg.test(num);
      let pass2 = num.length>=6 && num.length<=16;
      if(!pass2){
        this.$vux.toast.text('密码长度必须大于6位且小于16位','middle')
        return false
      }else if(!pass1){
        this.$vux.toast.text('密码必须同时包含字母和数字','middle')
        return false
      }else{
        return true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ::-webkit-input-placeholder { /* WebKit browsers */
    font-size: 0.94rem;
    letter-spacing: 1px;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-size: 0.94rem;
    letter-spacing: 1px;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-size: 0.94rem;
    letter-spacing: 1px;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    font-size: 0.94rem;
    letter-spacing: 1px;
  }
  .hello{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .hello .hello-head{
    position: absolute;
    width: 100%;
    text-align: right;
  }
  .hello .hello-head img{
    width: 1.19rem;
    height: 1.19rem;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
  }
  .logo{
    width: 4.25rem;
    height: 4.25rem;
    margin-top:1.97rem;
  }
  .hello h1{
    font-size:1.065rem;
    font-family:PingFangSC-Regular;
    color:#4E4E4E;
    line-height:1.595rem;
    text-align: center;
    font-weight: normal;
  }
  .hello .input{
    width:19.53rem;
    /*height:6.25rem;*/
    margin:1.565rem auto 0;
    border: 0.06rem solid #9C9C9C;
    border-radius: 0.31rem ;
  }
  .hello .input input{
    width: 100%;
    height: 3.125rem;
    border: none;
    font-size:0.94rem;
    font-family:PingFangSC-Regular;
    color:#4E4E4E;
    text-indent: 1rem;
    outline: none;
    border-radius: 0px;
  }
  .hello .input .phone{
    border-bottom: 0.06rem solid #9C9C9C;
    letter-spacing: 2px;
  }
  .hello .input .psd{
    border-bottom: 0.06rem solid #9C9C9C;
    font-size: 0.9rem;
    letter-spacing: 2px;
  }
  .hello .input .yzm{
    width:9.69rem;
    height:3.125rem;
    font-size:0.94rem;
    color:#fff;
    position: absolute;
    bottom: 0;
    right: 0;
    background: #4083FF ;
    line-height: 3.125rem;
  }
  .hello .footer{
    width: 100%;
    font-size:0.815rem;
    text-align: center;
    position: absolute;
    bottom: 5rem;
  }
</style>
