<template>
  <div class="content">
    <myHead msg="个人信息" backgroundColor="#fff"></myHead>
    <div class="my-item">
      <span class="left">头像</span>
      <span class="right">
        <input type="text">
        <img class="avatar" src="./img/avatar.png" alt="">
        <img class="entra" src="./img/ic_entra.png" alt="">
      </span>
    </div>
    <div class="my-item" @click="addNick" style="height: 3.44rem;line-height: 3.44rem;margin-top: 0;">
      <span class="left">昵称</span>
      <span class="right">
        <img class="entra" src="./img/ic_entra.png" alt="" style="top: 1.3rem;">
      </span>
    </div>
    <div class="my-item" style="height: 3.44rem;line-height: 3.44rem;margin-top: 1.375rem;">
      <span class="left">手机号码</span>
      <span class="right" style="color: #BFBFBF;">188****2560</span>
    </div>
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
      
    }
  },
  computed:{
    
  },
  mounted(){
    
  },
  methods: {
    addNick(){
      this.$router.push('./AddNick')
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
    .my-item{
      height: 5.845rem;
      background: #FFF;
      margin-top: 0.625rem;
      border-bottom: 0.06rem solid #EAEAEA;
      display: flex;
      flex-direction: row;
      padding: 0 1rem;
      line-height: 5.845rem;
      .left{
        flex-grow: 1;
        text-align: left;
        font-size: 1rem;
        color: #666666 ;
      }
      .right{
        flex-grow: 1;
        text-align: right;
        position: relative;
        input{
          width: 3.065rem;
          height: 3.065rem;
          position: absolute;
          right: 1.55rem;
          top: 1.5rem;
          outline: none;
          border:none;
        }
        img.avatar{
          width: 3.065rem;
          height: 3.065rem;
          position: absolute;
          right: 1.55rem;
          top: 1.5rem;
        }
        img.entra{
          display: inline-block;
          width: 0.44rem;
          height: 0.75rem;
          position: absolute;
          right: 0.2rem;
          top: 2.7rem;
        }
      }
    }
  }
  
</style>
