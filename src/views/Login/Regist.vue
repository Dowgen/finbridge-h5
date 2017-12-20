<template>
  <div class="hello">
    <div class="hello-head">
      <img src="./img/close.png" alt="">
    </div>
    <img class="logo" src="./img/logo.png">
    <h1 style="margin-top: 1.315rem;">&nbsp 您好！</h1>
    <h1>请注册开始使用</h1>
    <div class="input" style=" position: relative;">
      <input type="text" placeholder="手机号码" class="phone" maxlength="11" v-model="phoneNum">
      <input type="password" placeholder="请输入密码" class="psd" maxlength="16" v-model="password">
      <input type="text">
      <span class="yzm">
        <div v-show="start" >
          <countdown v-model="time1" :start="start" @on-finish="finish1"></countdown><span style="padding-left:0.15rem">s</span>
        </div>
        <div v-show="!start" @click="begin1">{{countDownText}}</div>
      </span>
    </div>
    <div class="footer">
      <Btn backgroundColor="#D7D7D7" msg="注册" v-show="phoneNum == ''"></Btn>
      <Btn backgroundColor="#4083FF" msg="注册" v-show="phoneNum !== ''"></Btn>
      <router-link to="/" style="color: #4083FF;">已有账户? 立即登录</router-link>
    </div>
  </div>
</template>

<script>
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
      phoneNum:'',
      password:'',
      /* countdown所需参数 */
      time1: 5,
      start: false,
      countDownText:'发送验证码',
    }
  },
  methods: {
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
      this.time1 = 5
      this.countDownText = '重新发送'
    },
    /* 发送验证码 */
    sendVerify(){
      var self = this;
      Lib.M.ajax({
        url : '/msg/sendVerify/'+ self.phoneNum,
        headers: {
          Authorization:'Bearer '+ localStorage.token
        },
        success:function(data){
          if(data=='success'){
            self.$vux.toast.text('发送成功！', 'middle')
          }
        }
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    width: 6.345rem;
    height: 6.345rem;
    margin: 0 auto;
    margin-top: 3.125rem;
  }
  .hello h1{
    font-size:1.065rem;
    font-family:PingFangSC-Regular;
    font-weight: 500;
    color:#4E4E4E;
    line-height:1.595rem;
    text-align: center;
  }
  .hello .input{
    width:19.53rem;
    /*height:6.25rem;*/
    margin:1.53rem auto 0;
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
  }
  .hello .input .phone{
    border-bottom: 0.06rem solid #9C9C9C;
  }
  .hello .input .psd{
    border-bottom: 0.06rem solid #9C9C9C;
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
    margin-top: 9rem;
  }
</style>
