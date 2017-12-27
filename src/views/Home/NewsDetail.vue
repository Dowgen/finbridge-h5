<template>
  <div>
    <div class="content">
      <div class="header">
        <span @click="$router.go(-1)" class="back"><img style=" width:0.66rem;height: 1.175rem;display: inline-block;" src="./img/back.png" alt=""></span>
        <p>新闻资讯</p>
      </div>
      <div class="news-con">
        <div v-for="(news,index) in newsList" v-if="index >= 2">
          <hotsItem2 :news="news" @click.native="lookNews(news.link)"></hotsItem2>
        </div>

      </div>
    </div>
    <main-nav which="home"></main-nav>
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Swiper, SwiperItem, } from 'vux'

import MainNav from '@/components/mainNav'

import hotsItem1 from '@/components/hotsItem1'
import hotsItem2 from '@/components/hotsItem2'
import hotsItem3 from '@/components/hotsItem3'

import myHead from '@/components/myHead'

export default {
  name: 'Home',	
  components: {
    MainNav, Swiper, SwiperItem,hotsItem1,hotsItem2,hotsItem3,myHead
  },
  data () {
    return {
      newsList:[],
      link:''
    }
  },
  computed:{
    
  },
  mounted(){
    this.getArticle();
  },
  methods: {
    getArticle(){
      var self = this;
      Lib.M.ajax({
        url:'/info/getArticle',
        success:function (res) {
          self.newsList = res.data;
        },
        error:function(err){
          console.error(err);
        }
      });
    },
    lookNews(link){
      window.location.href = link;
    }
  }
}
</script>

<style lang="less" scoped>
  .content{
    width: 100%;
   /* background: #EFEFF4;*/
    padding-bottom:3.8rem;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    .header{
      width:100%;
      height:4rem;
      background:linear-gradient(to right, #4083FF, #38BCFD);
      margin: 0 auto;
      font-size: 1.065rem;
      color: #fff;
      text-align: center;
      position: relative;
      line-height: 4rem;
      font-weight: 600;
      span{
        position: absolute;
        height: 100%;
        left: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .news-con{
      padding: 0 1rem 1rem;
    }
  }

</style>
