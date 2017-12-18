<template>
  <div>
    <div class="content">
      <swiper loop auto height="12.44rem" dots-position="center">
        <swiper-item><img src="./img/banner1.png"></swiper-item>
        <swiper-item><img src="./img/banner2.png"></swiper-item>
        <swiper-item><img src="./img/banner3.png"></swiper-item>
        <swiper-item><img src="./img/banner4.png"></swiper-item>
        <swiper-item><img src="./img/banner5.png"></swiper-item>
      </swiper>
      <div class="recommend">
        <p>
          <span>倾力推荐</span>
          <span>查看更多<img src="./img/icon_more.png"/></span>
        </p>

      </div>
    </div>
    <main-nav which="home"></main-nav>
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Loading, XButton, Confirm, Swiper, SwiperItem, } from 'vux'

import MainNav from '@/components/mainNav'

export default {
  name: 'Home',	
  components: {
    MainNav, Loading, XButton, Confirm, Swiper, SwiperItem,
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
  .vux-swiper img{
    width: 100%;
    height: 100%;
  }
  .recommend{
    width:100%;
    height:12rem;
    box-sizing: border-box;
    border-top: solid 0.375rem #f2f2f2;
    padding: 0.815rem 0.94rem 1.065rem;
    &>p{
      display:flex;
      justify-content:space-between;
      align-items:center;
      color: #1c3a53;
      &>span:nth-child(1){
        font-size:0.875rem;
      }
      &>span:nth-child(2){
        font-size:0.815rem;
        &>img{
          width:0.22rem;
          height:0.345rem;
        }
      }
    }
  }
</style>
