<template>
  <div class="content">
    <myHead msg="编辑简介" backgroundColor="#fff"></myHead>
    <div class="advices">
      <textarea maxlength="200" placeholder="介绍一下自己吧"  autofocus v-model="words">
      </textarea>
      <div class="wordsLimit">0/60</div>
    </div>
    <div class="btn" >确定</div> <!--@click="ensure"-->
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Loading, XButton, Confirm,  } from 'vux'

import myHead from '@/components/myHead'

export default {
  name: 'Home', 
  components: {
    Loading, XButton, Confirm,myHead,
  },
  data () {
    return {
      words:'',
    }
  },
  computed:{
    
  },
  mounted(){
    
  },
  methods: {
    /*ensure(){
      var self = this;

      Lib.M.ajax({
        type:'get',
        url: "cash-account/user/account/userInfo/name/"+self.localUserInfo.userInfo.phone+'/'+self.nickName,
        success:function (res) {
          console.log(res);
          /!*返回上一页*!/
          self.$router.go(-1);
        }
      })
    },*/
  }
}
</script>

<style lang="less" scoped>
  .content{
    width: 100%;
    height: 100%;
    background: #EFEFF4;
    position: absolute;
    left: 0;
    top: 0;
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: #B5B5B5;
      font-size: 0.94rem;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: #B5B5B5;
      font-size: 0.94rem;
    }
    input:-ms-input-placeholder{
      color: #B5B5B5;
      font-size: 0.94rem;
    }
    input::-webkit-input-placeholder{
      color: #B5B5B5;
      font-size: 0.94rem;
    }
    .btn{
      width: 92%;
      position: relative;
      display: block;
      box-sizing: border-box;
      font-size: 1.125rem;
      text-align: center;
      text-decoration: none;
      color: #FFFFFF;
      line-height: 3.125rem;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      overflow: hidden;
      background-color: #4083FF;
      margin:0 auto;
      margin-top:1.28rem;
      height: 3.125rem;
      border-radius: 0.25rem;
    }
    .advices{
      height:12.5rem;
      background:rgba(255,255,255,1);
      margin: 0.675rem auto 0;
      position: relative;
      overflow: hidden;
      padding: 0 1.375rem;
      textarea{
        width: 100%;
        height: 12.25rem;
        resize: none;
        border:0;
        outline: none;
        font-size: 0.94rem;
        line-height: 2rem;
        /*  font-family:PingFangSC-Light; */

      }
      .wordsLimit{
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        font-size: 1rem;
        color: rgba(181,181,181,1);
      }
    }

  }
  
</style>
