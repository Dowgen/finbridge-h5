<template>
  <div>
    <div class="content" v-cloak>
      <swiper loop auto height="12.44rem" dots-position="center">
        <swiper-item :key="pic.picUrl" v-for="pic in img_src">
          <img :src="pic.picUrl" @click="linkTo(pic.linkUrl)">
        </swiper-item>
      </swiper>
      <div class="recommend">
        <p>
          <span>倾力推荐</span>
          <span @click="lookMore">查看更多<img src="./img/icon_more.png"/></span>
        </p>
       <div class="recommend-con">
         <div @click="lookMore" class="zc con-item">
           <h4>{{RcmZc.projectName}}</h4>
           <p>倒计时{{countDownDay}}天</p>
           <p>
             <span>{{getLabel(RcmZc.productType,'asset')}}</span>
           </p>
           <p>
             <span>{{RcmZc.fundCostRegionFrom}}-{{RcmZc.fundCostRegionTo}}%</span>
             <span>{{RcmZc.totalPayAmount}}</span>
           </p>
           <p>
             <span>资金成本区间</span>
             <span>总放款量</span>
           </p>
         </div>
         <div @click="lookMore" class="zj con-item">
           <h4>{{rcmZj.projectName}}</h4>
           <p>倒计时{{countDownDay}}天</p>
           <p>
             <span>{{getLabel(rcmZj.fundType,'fund')}}</span>
           </p>
           <p>
             <span>{{rcmZj.fundCostRegionFrom}}-{{rcmZj.fundCostRegionTo}}%</span>
             <span>{{rcmZj.fundAnmount}}</span>
           </p>
           <p>
             <span>资金成本区间</span>
             <span>总放款量</span>
           </p>
         </div>
       </div>
      </div>
      <div class="hots">
        <div class="hots-head">
          热门资讯
          <span class="label"><img src="./img/label_maintital.png" alt=""></span>
        </div>
        <!--<div class="hots-con">
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
        </div>-->
        <div v-for="(news,index) in newsList" v-if="index < 2">
          <hotsItem2 :news="news" @click.native="lookNews(news.link)"></hotsItem2>
        </div>
        <div class="lookMore"  @click="newsDetail">查看更多({{lookCount}})</div>
      </div>
    </div>
    <main-nav which="home"></main-nav>
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Swiper, SwiperItem, } from 'vux'

import MainNav from '@/components/mainNav'

import hotsItem2 from '@/components/hotsItem2'

export default {
  name: 'Home',	
  components: {
    MainNav, Swiper, SwiperItem,hotsItem2
  },
  data () {
    return {
      RcmZc:{},
      rcmZj:{},
      img_src:[],
      countDownDay:'',
      updateTime:'',
      newsList:[],
      link:'',
      lookCount:'',
      picLink:''
    }
  },
  computed:{
    
  },
  mounted(){
    /* 进入页面先获取token */
    this.getToken();
    /* 获取微信openId */
    this.getOpenId();
    
    this.getFundList();
    this.getConfigByParameter();
    this.getArticle();
  },
  methods: {
    linkTo(picLink){
      if(picLink !== '' && picLink !== null){
        window.location.href = picLink;
        console.log('picLink'+picLink);
      }
    },
    //拿到code传给后台获取openId
    getOpenId(){
      let code = Lib.M.GetQueryString('code');
      Lib.M.ajax({
        url:'/wechat/getOpenId',
        data:{
          'code':code
        },
        success:function (res) {
          localStorage.openId = res.data.openId;
        },
        error:function(err){
          console.error(err);
        }
      });
    },
    //资金资产类型数字转化为文字
    getLabel(key,type){
      var f;
      if(type=='fund')
        f = JSON.parse(localStorage.fundTypeList);
      else
        f = JSON.parse(localStorage.assetTypeList);
      for(let i in f){
        if(f[i].key == key) return f[i].label
      }
    },
    getToken(){
      var self = this;
      Lib.M.ajax({
        /*url : 'http://192.168.2.169:8060/uaa/oauth/token',
        headers: {
          Accept:'application/json',
          Authorization:'Basic Y2xpZW50OnNlY3JldA=='
        },
        params:{
          username:'anil',
          password:'password',
          grant_type:'password',
          scope:'read write'
        },*/
        url : 'http://118.31.189.23:8060/uaa/oauth/token',
        headers: {
          Accept:'application/json',
          Authorization:'Basic anVoZV9jYXNobG9hbjpKdWhlMTIzNjc4IUAj'
        },
        params:{
          username:'juhe',
          password:'Juhe2017!@#',
          grant_type:'password',
          scope:'read write'
        },
        success:function(data){
          localStorage.token = data.access_token;
        },
        error:function(err){
          console.error(err);
        }
      });
    },
    newsDetail(){
      this.$router.push('./NewsDetail')
    },
    lookMore(){
      this.$router.push('./Square')
    },
    getConfigByParameter(){
      var self = this;
      Lib.M.ajax({
        url:'/config/getConfigByParameter',
        data:{
          'key':'unlistPeriod'
        },
        success:function (res) {
          self.updateTime = res.data[0].value;
          self.getRecommendZc();
          self.getRecommendFund();
          self.getCarouselFigure();

        },
        error:function(err){
          console.error(err);
        }
      });
    },
    getRecommendZc(){
      var self = this;
      Lib.M.ajax({
        url : '/asset/getRecommendAsset',
        success:function(res){
          self.RcmZc = res.data[0];
        /*  console.log(res.data[0]);*/

          var currentTime = Date.parse(new Date())/ 1000;

          var listTime = res.data[0].listTime;
          listTime = Date.parse(new Date(listTime))/ 1000;

          self.countDownDay =Math.round(self.updateTime -(currentTime - listTime)/(60*60*24)) ;
          console.log(Math.round((currentTime - listTime)/(60*60*24)));
        },
        error:function(err){
          console.error(err);
        }
      });
    },
    getRecommendFund(){
      var self = this;
      Lib.M.ajax({
        url:'/fund/getRecommendFund',
        success:function (res) {
          self.rcmZj = res.data[0];

          var currentTime = Date.parse(new Date())/ 1000;

          var listTime = res.data[0].listTime;
          listTime = Date.parse(new Date(listTime))/ 1000;

          self.countDownDay =Math.round(self.updateTime -(currentTime - listTime)/(60*60*24)) ;

          console.log(res);
        },
        error:function(err){
          console.error(err);
        }
      });
    },
    getCarouselFigure(){
      var self = this;
      Lib.M.ajax({
        url:'/info/getCarouselFigure',
        success:function (res) {
          self.img_src=res.data;
          console.log(3333);
          console.log(res);
        },
        error:function(err){
          console.error(err);
        }
      });
    },
    /* 获取资金资产类型列表 */
    getFundList(){
      var self = this;
      Lib.M.ajax({
        url : '/info/findAssetAndFundConfig',
        success:function(res){
          if(res.code==200){
            localStorage.fundTypeList=JSON.stringify(res.data.fund);
            localStorage.assetTypeList = JSON.stringify(res.data.asset);
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },
    getArticle(){
      var self = this;
      Lib.M.ajax({
        url:'/info/getArticle',
        success:function (res) {
          self.newsList = res.data;
          self.lookCount = res.data.length - 2;
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
          padding:1rem 0 3rem 1rem;
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
              position: absolute;
            }
            span:nth-of-type(1){
              left:0rem;
              top: 0;
            }
            span:nth-of-type(2){
              right: 0.5rem;
              top: 0;
            }
          }
          p:nth-of-type(4){
            position: relative;
            span{
              font-size:0.625rem;
              color:#98A0AF;
              position: absolute;
            }
            span:nth-of-type(1){
              left: 0rem;
              top: 1rem;
            }
            span:nth-of-type(2){
              right: 0.5rem;
              top: 1rem;
            }
          }
        }
      }

    }
    .hots{
      margin-top:0.5rem;
      background: #ffffff;
      padding: 0 1rem 1rem;
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
      .lookMore{
        width:21.565rem;
        height:2.065rem;
        background:rgba(239,239,244,1);
        border-radius: 0.25rem ;
        margin:1rem auto 0;
        font-size: 0.815rem;
        color: #4083FF;
        line-height: 2.065rem;
        text-align: center;
      }
    }
  }

</style>
