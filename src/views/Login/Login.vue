<template>
  <div class="hello">
   <!-- <div class="hello-head">
      <img src="./img/close.png" alt="">
    </div>-->
    <img class="logo" src="./img/logo.png">
    <h1>{{msg}}</h1>
    <div class="input" style=" position: relative;">
      <input v-model="phoneNum" type="text" placeholder="手机号" class="phone" maxlength="11">
      <input v-model="password" type="password" placeholder="密码" class="psd" maxlength="14">
      <span class="miss-psd" @click="resetPsd">忘记密码？</span>
    </div>
    <Btn msg="登录" backgroundColor="#4083FF" @click.native="clickBtn"></Btn>
    <div class="footer">
      <p @click="jumpTo" style="color: #4083FF;">亲，还没注册? 立即前往注册</p>
      <!-- <router-link to="/Regist" style="color: #4083FF;">亲，还没注册? 立即前往注册</router-link>> -->
    </div>



  </div>
</template>

<script>
import Sha1 from './sha1'
import Lib from '@/assets/js/Lib'
import Btn from '@/components/btn'

export default {
  name: 'Login',
  components: {
    Btn
  },
  data () {
    return {
      msg: '欢迎再次回来',
      phoneNum:'',
      password:'',
      wechatShareReturnLink:''
    }
  },
  mounted(){
     
  },
  methods:{
    resetPsd(){
      this.$router.push('/resetPsd');
    },
    /* 用户点击登录按钮 */
    clickBtn(){
      if(this.phoneNum==='' || this.password === ''){
        this.$vux.toast.text('参数请填写完整！', 'middle')
      }else{
        if(!this.checkPassword(this.password)){

        }else{
          /* 先验证短信，然后根据登录方式决定是注册还是更改密码 */
          this.login();
        }
      }
    },
    /* 修改密码 */
    login(){
      var self = this;
      Lib.M.ajax({
        url : '/user/login',
        data:{
          phone: self.phoneNum,
          password: sha1(self.password).toUpperCase()
        },
        success:function(res){
          if(res.code==200){
            localStorage.phoneNum = self.phoneNum;
            localStorage.userId = res.data.userId;
            self.$vux.toast.text('登录成功！', 'middle');
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
    },
    jumpTo(){
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx31dde80f95ebb3c8&redirect_uri=https%3A%2F%2Ffinbridge.cn%2F%23%2FRegist&response_type=code&scope=snsapi_base&state=JuheFinbridge#wechat_redirect'
    },
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
  .logo{
    width: 4.25rem;
    height: 4.25rem;
    margin-top:2rem;
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
    margin-top: 0.69rem;
    font-weight: normal;
  }
  .hello .input{
    width:19.53rem;
    height:6.25rem;
    margin:3rem auto 0.655rem;
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
    font-size: 0.9rem;
    letter-spacing: 2px;
  }
  .hello .input .miss-psd{
    font-size:0.815rem;
    color:rgba(64,131,255,1);
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
  .hello .footer{
    width: 100%;
    font-size:0.815rem;
    position: absolute;
    left: 0;
    bottom: 5rem;
    text-align: center;
  }
</style>
