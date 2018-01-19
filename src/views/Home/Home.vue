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
         <div @click="jumpToDetai(1,RcmZc.assetId)" class="zc con-item" style="margin-right: 0.1575rem;">
           <h4>{{RcmZc.projectName}}</h4>
           <p>倒计时{{countDownDay1}}天</p>
           <p>
             <span v-if="RcmZc.productType">{{getLabel(RcmZc.productType,'asset')}}</span>
           </p>
           <p>
             <span>{{RcmZc.fundCostRegionFrom}}-{{RcmZc.fundCostRegionTo}}%</span>
             <span>
                {{ String(parseInt(RcmZc.totalPayAmount)).length >= 5 ? RcmZc.totalPayAmount/10000 : RcmZc.totalPayAmount}} 
                {{ String(parseInt(RcmZc.totalPayAmount)).length >= 5 ? '亿元' : '万元'}}
             </span>
           </p>
           <p>
             <span>资金成本区间</span>
             <span>总放款量</span>
           </p>
           <!-- <span class="middleLine"></span> -->
         </div>
         <div @click="jumpToDetai(2,RcmZj.fundId)" class="zj con-item" style="margin-left: 0.1575rem;">
           <h4>{{RcmZj.projectName}}</h4>
           <p>倒计时{{countDownDay2}}天</p>
           <p>
             <span v-if="RcmZj.fundType">{{getLabel(RcmZj.fundType,'fund')}}</span>
           </p>
           <p>
             <span>{{RcmZj.fundCostRegionFrom}}-{{RcmZj.fundCostRegionTo}}%</span>
             <span>
                {{ getFundAmountType(RcmZj.fundAnmount)}} 
             </span>
           </p>
           <p>
             <span>资金成本区间</span>
             <span>资金规模</span>
           </p>
           <!-- <span class="middleLine"></span> -->
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
import axios from 'axios'

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
      RcmZc:{
        projectName:'',
        productType:'',
        fundCostRegionFrom:'',
        fundCostRegionTo:'',
        totalPayAmount:''
      },
      RcmZj:{
        projectName:'',
        fundType:'',
        fundCostRegionFrom:'',
        fundCostRegionTo:'',
        fundAnmount:''
      },
      img_src:[],
      countDownDay1:'',
      countDownDay2:'',
      validPeriod:'',
      newsList:[],
      link:'',
      lookCount:'',
      picLink:''
    }
  },
/*  beforeRouteEnter(to, from, next) {
    console.log(from.path =='/sqProjectDetail')
    if(from.path =='/sqProjectDetail'){
      to.meta.keepAlive = true;
    }else{
      to.meta.keepAlive = false;
    }
    next();
  },*/
  mounted(){
    let self = this;
    self.getToken();
  },
  methods: {
    linkTo(picLink){
      if(picLink !== '' && picLink !== null){
        window.location.href = picLink;
      }
    },
    getFundAmountType(key){
      return Lib.M.getFundAmountType(key);
    },
    /*//拿到code传给后台获取用户的微信openId
    getOpenId(){
      let code = Lib.M.GetQueryString('code')
      if(code!=null){
        Lib.M.ajax({
          url:'/wechat/getOpenId',
          data:{
            'code':code
          },
          success:function (res) {
            if(res.code==200){
              localStorage.openId = res.data.openId;
            }else{
              self.$vux.toast.text(res.error, 'middle');
            }
          },
          error:function(err){
            console.error(err);
          }
        });
      }
    },*/
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
        url : Lib.M.apiDomain + '/uaa/oauth/token',
        /*headers: {
          Accept:'application/json',
          Authorization:'Basic Y2xpZW50OnNlY3JldA=='
        },
        params:{
          username:'anil',
          password:'password',
          grant_type:'password',
          scope:'read write'
        },*/
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
          /*self.getOpenId()*/
          self.getFundList();
          self.getConfigByParameter();
          self.getArticle();
        },
        error:function(err){
          console.error(err);
        }
      });
    },
    newsDetail(){
      this.$router.push('./NewsDetail')
    },
    jumpToDetai(AorF,proId){
      this.$router.push({'path':'/sqProjectDetail',query:{
          AorF:AorF,
          proId:proId
        }
      })
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
          self.validPeriod = res.data[0].value;
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
          var index = parseInt(Math.random()*res.data.length);

          self.RcmZc = res.data[index];
          self.countDownDay1 = Lib.M.getCountDownDay(res.data[index].listTime,self.validPeriod);
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
          var index = parseInt(Math.random()*res.data.length);

          self.RcmZj = res.data[index];
          self.countDownDay2 =Lib.M.getCountDownDay(res.data[index].listTime,self.validPeriod);
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
    },
    //获取微信签名
    getWxSig(){
      var self = this;
      Lib.M.ajax({
        url : '/wechat/wxSig',
        data:{url: location.href.split('#')[0]},
        success:function(res){
          if(res.code==200){
            let wxSig = res.data;
            wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: wxSig.appid, // 必填，公众号的唯一标识
              timestamp: wxSig.timestamp, // 必填，生成签名的时间戳
              nonceStr:  wxSig.noncestr, // 必填，生成签名的随机串
              signature: wxSig.signature,   // 必填，签名，见附录1
              jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function(){         
              //微信分享设置
              wx.onMenuShareTimeline({
                title: '51资金资产', 
                link:  Lib.M.webDomain, 
                imgUrl: Lib.M.webDomain+'/logo.png', 
                success: function () { 
                  vm.$vux.toast.show({
                      showPositionValue: false,
                      text: '分享成功',
                      type: 'success',
                      position: 'middle'
                  })
                },
                cancel: function () { 
                    // 用户取消分享后执行的回调函数
                }
              });

              wx.onMenuShareAppMessage({
                title: '51资金资产', 
                desc: '关注51资金资产公众号，获取更多信息', 
                link:  Lib.M.webDomain,
                imgUrl: Lib.M.webDomain+'/logo.png', 
                /*type: '', // 分享类型,music、video或link，不填默认为link*/
                /*dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空*/
                success: function () { 
                  vm.$vux.toast.show({
                      showPositionValue: false,
                      text: '分享成功',
                      type: 'success',
                      position: 'middle'
                  })
                },
                cancel: function () { 
                    // 用户取消分享后执行的回调函数
                }
              });
            });
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },
  }
}
</script>

<style lang="less" scoped>
  .content{
    width: 100%;
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
      background: #fff;
      /*height:12rem;*/
      box-sizing: border-box;
      border-top: solid 0.5rem #EFEFF4;
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
          margin-right: 0.44rem;
          position: relative;
          &>img{
            width:0.22rem;
            height:0.345rem;
            position: absolute;
            top: 0.4rem;
            right: -0.5rem;
          }
        }
      }
      .recommend-con{
        display: flex;
        flex-direction: row;
        .con-item{
          width:0;
          min-height: 7rem;
          flex-grow: 1;
          border: 0.06rem solid #F2F2F2;
          text-align: left;
          padding:0.97rem 0 1.315rem 0.845rem;
          margin:1.065rem 0;
          h4{
            font-size: 0.94rem;
            color: #1C3A53;
            margin-bottom: 0.53rem;
          }
          .middleLine{
            display: block;
            width: 0.06rem;
            height: 1.375rem;
            background: #EAEAEA;
            margin: 1.2rem auto 0;
          }
          p:nth-of-type(1){
            font-size: 0.625rem;
            color: #98A0AF;
          }
          p:nth-of-type(2){
            margin:0.405rem 0 0.905rem 0;
            span{
              width:2.94rem;
              height:0.875rem;
              line-height: 0.875rem;
              text-align: center;
              border: 0.06rem solid #699EFF;
              font-size:0.625rem;
              color:#699EFF;
              margin-right: 0.28rem;
            }
          }
          p:nth-of-type(3){
            position: relative;
            margin-bottom: 0.44rem;
            span{
              font-size:0.875rem;
              color:#F84F60;
              position: absolute;
              font-weight: bolder;
              font-family:PingFangSC-Medium;
            }
            span:nth-of-type(1){
              left:0rem;
              top: 0;
            }
            span:nth-of-type(2){
              right: 1.125rem;
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
              top: 1.13rem;
            }
            span:nth-of-type(2){
              right: 1.125rem;
              top: 1.13rem;
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
