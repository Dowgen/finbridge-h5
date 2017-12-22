<template>
  <div>
    <div class="content">
      <myHead msg="新闻资讯" style="background:linear-gradient(to right, #4083FF, #38BCFD);color: #fff;"></myHead>
      <div class="news-con">
        <hotsItem2></hotsItem2>
        <hotsItem2></hotsItem2>
        <hotsItem1></hotsItem1>
        <hotsItem3></hotsItem3>
        <hotsItem2></hotsItem2>
      </div>
    </div>
    <main-nav which="home"></main-nav>
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Loading, XButton, Confirm, Swiper, SwiperItem, } from 'vux'

import MainNav from '@/components/mainNav'

import hotsItem1 from '@/components/hotsItem1'
import hotsItem2 from '@/components/hotsItem2'
import hotsItem3 from '@/components/hotsItem3'

import myHead from '@/components/Header'

export default {
  name: 'Home',	
  components: {
    MainNav, Loading, XButton, Confirm, Swiper, SwiperItem,hotsItem1,hotsItem2,hotsItem3,myHead
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
   /* background: #EFEFF4;*/
    padding-bottom:3.8rem;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    .news-con{
      padding: 0 1rem 1rem;
    }
  }

</style>
