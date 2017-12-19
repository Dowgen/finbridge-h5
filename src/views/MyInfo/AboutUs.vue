<template>
  <div class="content">
    <myHead msg="关于我们"></myHead>
    <div class="aboutUS">
      <img src="./img/img_placeholder.png" alt="">
      <h4>51资金资产对接</h4>
      <p>V 1.0.1</p>
    </div>
    <div class="contactWay">
      <div class="ways">
        <span>微信号</span>
        <span>51zzuixing_881</span>
      </div>
      <div class="ways">
        <span>QQ号</span>
        <span>2931009881</span>
      </div>
      <div class="ways">
        <span>客服热线</span>
        <span>0571-26220819</span>
      </div>
    </div>
    <div class="quit">安全退出</div>
    <div class="footer">Copyright © 杭州炬合网络科技有限公司</div>
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
    .aboutUS{
      height: 13.25rem;
      img{
        display: block;
        width:3.875rem;
        height:2.815rem;
        border: 1px solid red;
        margin:3.75rem auto 0.9rem;
      }
      h4{
        font-size: 1rem;
        color: #333333;
        font-weight:normal;
      }
      p{
        font-size: 0.875rem;
        color: #B5B5B5;
        line-height: 1.5rem;
      }
    }
    .contactWay{
      width: 100%;
      margin: 0 auto;
      background: #fff;
      .ways{
        height: 2.815rem;
        line-height: 2.815rem;
        text-align: left;
        padding: 0 1rem;
        border-bottom: 0.06rem solid #E6E6E6;
        display: flex;
        flex-direction: row;
        span:nth-of-type(1){
          flex-grow: 1;
        }
        span:nth-of-type(2){
          flex-grow: 1;
          text-align: right;
        }
      }
    }
    .quit{
      width: 100%;
      height: 2.815rem;
      background: #fff;
      text-align: center;
      line-height: 2.815rem;
      font-size: 1.065rem;
      color: #F84F60;
      margin-top: 0.625rem;
    }
    .footer{
      width: 100%;
      font-size: 0.60rem;
      color: #BABABA;
      position: absolute;
      bottom: 1.19rem;
      left: 50%;
      margin-left: -50%;
    }

  }
  
</style>
