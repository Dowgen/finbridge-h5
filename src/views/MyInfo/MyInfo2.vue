<template>
  <div>
    <div class="content">
      <div class="header">
        <span @click="$router.go(-1)" class="back"><img style=" width:0.66rem;height: 1.175rem;display: inline-block;" src="./img/back.png" alt=""></span>
      </div>
      <div class="aboutMe">
        <div class="avatar">
          <img src="./img/avatar2.png" alt="">
        </div>
        <div class="nickName">金毛豆丁酱</div>
        <div class="someNum">
          <p>关注 <span>216</span></p>
          <span class="middle-line"></span>
          <p>粉丝 <span>926</span></p>
        </div>
        <div class="intro">简介：一只高冷慢热型爱泡剧の肥金毛</div>
      </div>
      <div class="myIntro">
        <div class="intro-title">
          <span></span>
          <span>TA的介绍</span>
        </div>
        <div class="intro-item">
          <div class="intro-item-l">昵称</div>
          <div class="intro-item-r">金毛豆丁酱</div>
        </div>
        <div class="intro-item">
          <div class="intro-item-l">所在地</div>
          <div class="intro-item-r">浙江 杭州</div>
        </div>
        <div class="intro-item">
          <div class="intro-item-l">类型</div>
          <div class="intro-item-r">资金方</div>
        </div>
        <div class="intro-item self-intro">
          <div class="intro-item-l">个人简介</div>
          <div class="intro-item-r">一只高冷慢热型喜欢流行音乐泡韩剧
            撸美剧のa肥金毛</div>
        </div>
      </div>
      <div class="productList">
        <div class="intro-title">
          <span></span>
          <span>项目列表</span>
          <span><img src="./img/button_fund.png" alt=""></span>
          <!--<span><img src="./img/button_asset.png" alt=""></span>-->
        </div>
        <div>
          <div class="product-item">
            <div class="product-item-l">
              <p>7<span>%</span> - 12<span>%</span></p>
              <p>资金成本区间</p>
            </div>
            <div class="product-item-r">
              <p>中腾堡SJT-BL-171131</p>
              <p>
                <span>3天</span>
                <span>车抵贷</span>
              </p>
            </div>
          </div>
          <div class="product-item">
            <div class="product-item-l">
              <p>7<span>%</span> - 12<span>%</span></p>
              <p>资金成本区间</p>
            </div>
            <div class="product-item-r">
              <p>中腾堡SJT-BL-171131</p>
              <p>
                <span>3天</span>
                <span>车抵贷</span>
              </p>
            </div>
          </div>
        </div>
        <div class="look-more">
          查看更多(26)
        </div>
      </div>
      <div class="add">
        <img src="./img/ic_add.png" alt="">
        关注
      </div>
    </div>
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Loading, XButton, Confirm,Cell,PopupPicker } from 'vux'

import MainNav from '@/components/mainNav'

import myHead from '@/components/myHead'

import $ from 'jquery'


export default {
  name: 'Home', 
  components: {
    MainNav, Loading, XButton, Confirm,myHead
  },
  data () {
    return {
      myData:[],
      img_id: '',
      noAvatar:true,
      intro:'',


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
    background: #EFEFF4;
    min-height: 40rem;
    position: absolute;
    left: 0;
    top: 0;
    padding-bottom: 3.6rem;
    .intro-title{
      height: 2.315rem;
      line-height: 2.315rem;
      text-align: left;
      padding-left: 0.94rem;
      border-bottom: 0.06rem solid #E6E7EB;
      span:nth-of-type(1){
        display: inline-block;
        width:0.2rem;
        height:0.78rem;
        background: #4083FF;
      }
      span:nth-of-type(2){
        font-size: 0.875rem;
        color: #0D0D0D;
      }
    }
    .header{
      width:100%;
      height:5rem;
      background:linear-gradient(to right, #4083FF, #38BCFD);
      margin: 0 auto;
      position: relative;
      span{
        position: absolute;
        height: 100%;
        left: 1.5rem;
        top: 1rem;
      }
    }
    .aboutMe{
      background: #FFF;
      position: relative;
      text-align: center;
      padding-bottom: 0.5rem;
      .avatar{
        width: 4.64rem;
        height: 4.64rem;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
          margin-top: -2.32rem;
        }
      }
      .nickName{
        font-size: 1.125rem;
        color: #1A1A1A;
        margin:-1.5rem 0 0.65rem;
      }
      .someNum{
        display: flex;
        margin: 0.75rem 0 1rem 0;
        p{
          flex: 1;
          width: 0;
          font-size: 0.815rem;
          color: #999999;
          span{
            color: #1A1A1A;
            margin-left: 0.35rem;
          }
        }
        p:nth-of-type(1){
          text-align: right;
        }
        p:nth-of-type(2){
          text-align: left;
        }
        .middle-line{
          width:0.13rem;
          height:0.6rem;
          margin: 0.35rem 1rem 0;
          background: #A1A1A1;
        }
      }
      .intro{
        font-size: 0.815rem;
        color: #999999;
        margin-bottom: 1.5rem;
      }
    }
    .myIntro{
      background: #fff;
      margin-top: 0.6rem;
      .intro-item{
        height: 2.72rem;
        line-height: 2.72rem;
        display: flex;
        border-bottom: 0.06rem solid #E6E7EB;
        padding:0 2rem 0 1.6rem;
        div{
          width: 0;
          text-align: left;
          font-size: 0.875rem;
        }
        .intro-item-l{
          flex: 1;
          color: #999999;
        }
        .intro-item-r{
          flex: 3;
          color: #333333;
        }
      }
      .self-intro{
        height: 5rem;
        border:none;
        .intro-item-r{
          line-height: 1.5rem;
          margin-top: 0.6rem;
        }
      }
    }
    .productList{
      background: #fff;
      margin-top: 0.6rem;
      padding-bottom: 1.125rem;
      .intro-title{
        position: relative;
        span:nth-of-type(3){
          display: inline-block;
          width:4.655rem;
          height:1.44rem;
          position: absolute;
          right: 0.97rem;
          top: 0.35rem;
         img{
           width: 100%;
         }
        }
      }
      .product-item{
        /*height: 4.955rem;*/
        padding:0 0.94rem;
        display: flex;
        .product-item-l{
          flex: 1;
          text-align: left;
          p:nth-of-type(1){
            font-size: 1.5rem;
            color: #FF671B;
            margin:0.78rem 0 1.22rem;
            span{
              font-size: 0.815rem;
            }
          }
          p:nth-of-type(2){
            font-size: 0.875rem;
            color: #586575;
            margin-bottom: 0.97rem;
          }
        }
        .product-item-r{
          flex: 1;
          text-align: left;
          p:nth-of-type(1){
            font-size: 1rem;
            color: #1C3A53;
            margin:0.94rem 0 1.28rem;
          }
          p:nth-of-type(2){
            font-size: 0.875rem;
            color: #586575;
            margin-bottom: 0.97rem;
            span:nth-of-type(1){
              display: inline-block;
              margin-right: 1.22rem;
            }
          }
        }
      }
      .product-item:not(:last-child){
        border-bottom: 0.06rem solid #E6E7EB;
      }
      .look-more{
        width: 92%;
        height: 2.065rem;
        line-height: 2.065rem;
        margin:1rem auto 0;
        background: #EFEFF4;
        font-size: 0.815rem;
        color: #4083FF;
        text-align: center;
        border-radius: 0.25rem ;
      }
    }
    .add{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 3.065rem;
      line-height: 3.065rem;
      text-align: center;
      background: #4083FF;
      font-size: 1.065rem;
      color: #fff;
      img{
        width: 0.815rem;
        height: 0.815rem;
      }
    }

  }
  
</style>
