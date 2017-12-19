<template>
  <div class="content">
    <myHead msg="昵称" backgroundColor="#fff"></myHead>
    <div class="fill_nick_name">
      <span>昵称</span>
      <input type="text" placeholder="请输入昵称名" v-model="nickName" maxlength=6 @keyup.enter="KeyDown">
      <span class="delete" @click="deleteName()" v-show="nickName!=''"><img src="./img/close.png" alt=""></span>
    </div>
    <div class="btn" >保存</div> <!--@click="ensure"-->
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Loading, XButton, Confirm, Swiper, SwiperItem, } from 'vux'


import myHead from '@/components/Header'

export default {
  name: 'Home', 
  components: {
    Loading, XButton, Confirm, Swiper, SwiperItem,myHead
  },
  data () {
    return {
      nickName:'',
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
    deleteName(){
      this.nickName = '';
    }
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
    .fill_nick_name{
      height:3.44rem;
      line-height: 3.44rem;
      text-align: left;
      background: #fff;
      margin-top: 1.565rem;
      padding:0 1rem;
      position: relative;
      font-size: 1rem;
      color: #666666;
      input{
        width: 70%;
        height: 3.44rem;
        text-align: right;
        border:none;
        outline: none;
        /* font-family: "PingFang-SC-Regular" !important; */
        color: #BFBFBF;
        font-size: 1rem;
        margin-left:2rem;
      }
    }
    .delete{
      position: absolute;
      right: 1rem;
      top: 1.4rem;
      z-index: 99;
      img{
        display: block;
        width: 0.67rem;
        height: 0.625rem;

      }
    }
    .btn{
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
      width: 21.565em;
      height: 3.125rem;
    }
  }
  
</style>
