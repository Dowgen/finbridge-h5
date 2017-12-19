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
       <div class="recommend-con">
         <div class="con-item">
           <h4>爱信资产</h4>
           <p>倒计时3天</p>
           <p>
             <span>现金分期</span>
             <span>网络小贷</span>
           </p>
           <p>
             <span>15-18%</span>
             <span>三千万</span>
           </p>
           <p>
             <span>资金成本区间</span>
             <span>总房款量</span>
           </p>
         </div>
         <div class="con-item">
           <h4>爱信资产</h4>
           <p>倒计时3天</p>
           <p>
             <span>现金分期</span>
             <span>网络小贷</span>
           </p>
           <p>
             <span>15-18%</span>
             <span>三千万</span>
           </p>
           <p>
             <span>资金成本区间</span>
             <span>总房款量</span>
           </p>
         </div>
       </div>
      </div>
      <div class="hots">
        <div class="hots-head">
          热门资讯
          <span class="label"><img src="./img/label_maintital.png" alt=""></span>
        </div>
        <div class="hots-con">
          <h4 class="hots-con-title">机器人大会来临，强势一触即发！</h4>
          <p class="hots-con-instr">
            <span>未来金融</span>
            <span>新手推荐</span>
            <span>趋势发展</span>
          </p>
          <img class="hots-con-img" src="./img/img3_news.png" alt="">
          <p class="about-read">
            <span class="read-date">2017-12-09</span>
            <span class="read-num">782阅读量</span>
          </p>
        </div>
        <hotsItem2></hotsItem2>
        <hotsItem2></hotsItem2>
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

import hotsItem2 from '@/components/hotsItem2'

export default {
  name: 'Home',	
  components: {
    MainNav, Loading, XButton, Confirm, Swiper, SwiperItem,hotsItem2
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
    background: #EFEFF4;
    padding-bottom:3.8rem;
    position: absolute;
    left: 0;
    top: 0;
    .vux-swiper img{
      width: 100%;
      height: 100%;
    }
    .recommend{
      width:100%;
      background: #fff;
      /*height:12rem;*/
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
            margin-left: 0.3rem;
          }
        }
      }
      .recommend-con{
        display: flex;
        flex-direction: row;
        .con-item{
          flex-grow: 1;
          border: 0.06rem solid #F2F2F2;
          text-align: left;
          padding:1rem 0 1rem 1rem;
          margin: 1rem 1rem 0 0;
          h4{
            font-size: 0.94rem;
            color: #1C3A53;
            margin-bottom: 0.6rem;
          }
          p:nth-of-type(1){
            font-size: 0.625rem;
            color: #98A0AF;
          }
          p:nth-of-type(2){
            margin:0.4rem 0 0.9rem 0;
            span{
              width:2.94rem;
              height:0.875rem;
              padding:0.2rem;
              border: 0.06rem solid #699EFF;
              font-size:0.625rem;
              color:#699EFF;
            }
          }
          p:nth-of-type(3){
            position: relative;
            margin-bottom: 0.44rem;
            span{
              font-size:0.875rem;
              color:#F84F60;
            }
            span:nth-of-type(2){
              position: absolute;
              right: 0.5rem;
              top: 0;
            }
          }
          p:nth-of-type(4){
            position: relative;
            span{
              font-size:0.625rem;
              color:#98A0AF;
            }
            span:nth-of-type(2){
              position: absolute;
              right: 0.5rem;
              top: 0;
            }
          }
        }
      }

    }
    .hots{
      margin-top:0.5rem;
      background: #ffffff;
      padding: 0 1rem;
      .hots-head{
        font-size: 0.875rem;
        color: #1C3A53 ;
        line-height: 3rem;
        border-bottom: 0.06rem solid #EAEAEA;
        text-align: left;
        position: relative;
        .label{
          position: absolute;
          right: 0;
          top: 2.2rem;
          img{
            width: 2.315rem;
            height: 1rem;
          }
        }
      }
      .hots-con{
        margin-top: 1rem;
        text-align: left;
        border-bottom: 0.06rem solid #EAEAEA;
        .hots-con-title{
          font-size: 1rem;
          color: #1C3A53;
        }
        .hots-con-instr{
          margin:0.8rem 0 1rem 0;
          span{
            width: 4.125rem;
            height: 1.315rem;
            padding: 0.5rem;
            background: #F4F5F6;
            font-size: 0.75rem;
            color: #A0ACC0;
            text-align: center;
            line-height: 1.315rem;
          }
        }
        .hots-con-img{
          width: 100%;
          height: 100%;
        }
        .about-read{
          font-size: 0.685rem;
          color: #BFBFBF;
          line-height: 2rem;
          .read-date{
            margin-right: 0.6rem;
          }
        }
      }
    }
  }

</style>
