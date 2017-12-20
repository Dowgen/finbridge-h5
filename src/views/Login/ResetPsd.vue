<template>
  <div class="hello">
    <div class="hello-head">
      <img src="./img/close.png" alt="">
    </div>
    <img class="logo" src="./img/logo.png">
    <h1>{{msg}}</h1>
    <div class="input" style=" position: relative;">
      <input type="text" placeholder="手机号码" class="phone" maxlength="11" v-model="phonenum">
      <input type="password" placeholder="请重置密码" class="psd" maxlength="16">
      <input type="text">
      <span class="yzm">
        <div v-show="start" >
          <countdown v-model="time1" :start="start" @on-finish="finish1"></countdown><span style="padding-left:0.15rem">s</span>
        </div>
        <div v-show="!start" @click="begin1">{{countDownText}}</div>
      </span>
    </div>
    <div class="footer">
      <Btn backgroundColor="#D7D7D7" msg="注册" v-show="phonenum == ''"></Btn>
      <Btn backgroundColor="#4083FF" msg="注册" v-show="phonenum !== ''"></Btn>
      <router-link to="/ZcLoginProjectDetail" style="color: #4083FF;">已有账户? 立即登录</router-link>
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
      msg: '欢迎再次回来',
      phonenum:'',
      /* countdown所需参数 */
      time1: 5,
      start: false,
      countDownText:'发送验证码',
    }
  },
  methods: {
    /* 开始倒计时 */
    begin1(){
      this.start = true;
      /*this.sendVerify();*/
    },
    /* 倒计时结束时触发 */
    finish1 (index) {
      this.start = false
      this.time1 = 5
      this.countDownText = '重新发送'
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
  .logo{
    width: 4.25rem;
    height: 4.25rem;
    margin-top: 5rem;
  }
  .hello .hello-head{
    text-align: right;
    position: absolute;
    width: 100%;
  }
  .hello .hello-head img{
    width: 1.19rem;
    height: 1.19rem;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
  }
  .hello h1{
    font-size:1.095rem;
    font-family:PingFangSC-Regular;
    color:rgba(78,78,78,1);
    line-height:1.815rem;
    margin-top: 1.625rem;
  }
  .hello .input{
    width:19.53rem;
    /*height:6.25rem;*/
    margin:3rem auto 0;
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
    margin-top: 9rem;
    text-align: center;
  }
</style>
