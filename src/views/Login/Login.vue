<template>
  <div class="hello">
    <div class="hello-head">
      <img src="./img/close.png" alt="">
    </div>
    <img class="logo" src="./img/logo.png">
    <h1>{{msg}}</h1>
    <div class="input" style=" position: relative;">
      <input type="text" placeholder="手机号" class="phone" maxlength="11">
      <input type="password" placeholder="密码" class="psd" maxlength="16">
      <span class="miss-psd" @click="resetPsd">忘记密码？</span>
    </div>
    <Btn msg="登录" backgroundColor="#4083FF"></Btn>
    <div class="footer">
      <router-link to="/Regist" style="color: #4083FF;">亲，还没注册? 立即前往注册</router-link>
    </div>



  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'
import Btn from '@/components/btn'
/*import resetPsd from '@/views/Login/resetPsd'*/

export default {
  name: 'Login',
  components: {
    Btn
  },
  data () {
    return {
      msg: '欢迎再次回来'
    }
  },
  methods:{
    resetPsd(){
      this.$router.push('/resetPsd');
    }
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
    height:6.25rem;
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
    margin-top: 12rem;
    text-align: center;
  }
</style>
