<template>
  <div>
    <div class="content">
      <div class="header">
        <span class="back">设置</span>
        <p>我的</p>
      </div>
      <div class="aboutMe">
        <div class="infoDes">
          <div class="avatar">
            <img src="./img/avatar.png" alt="">
          </div>
          <div class="intro">
            <p>金毛豆丁酱</p>
            <p>简介：高冷慢热型の肥金毛</p>
          </div>
        </div>
        <div class="someNum">
          <div class="projectNum" @click="toProductList">
            <p>216</p>
            <p>项目</p>
          </div>
          <div class="attentionNum" @click="toAttention">
            <p>26</p>
            <p>关注</p>
          </div>
          <div class="fansNum" @click="toFans">
            <p>16</p>
            <p>粉丝</p>
          </div>
        </div>
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
          <div class="intro-item-r">一只高冷慢热型喜欢流行音乐泡韩剧撸美剧のa肥金毛</div>
        </div>
        <div class="revise-info" @click="editInfo">
          <img src="./img/ic_edit.png" alt="">
          修改资料
        </div>
        <!--<div class="intro-item">
          <div class="intro-item-l">所在地</div>
          <div class="intro-item-r" style="position:relative">
            <input class="inputer" placeholder="省份，城市" v-model="cityVal" readonly="readonly"/>
            <div class="sel">
              <popup-picker :data="cityList" :columns="3" v-model="cityVal" ref="cityPicker" ></popup-picker>
            </div>
          </div>
        </div>-->
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
        <div class="look-more"  @click="toProductList">
          查看更多(26)
        </div>
      </div>
    </div>
    <main-nav which="myInfo"></main-nav>
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
    MainNav, Loading, XButton, Confirm,myHead,Cell,PopupPicker
  },
  data () {
    return {
      myData:[],
      img_id: '',
      noAvatar:true,
      intro:'',
      myPhone:'',
      cityVal: [],
      cityList: Lib.M.cityList,

    }
  },
  computed:{

  },
  mounted(){
    /*this.myPhone = localStorage.phoneNum;
    this.getMyInfo();*/
  },
  methods: {
    /*getMyInfo(){
      var self = this;
      Lib.M.ajax({
        url : '/info/getAboutUs',
        success:function(res){
          self.myData = res.data;
          $(self.myData).each(function(index){
            if(self.myData[index].key == 'aboutUs_intro'){
              self.intro = self.myData[index].value;
              console.log(self.intro);
            }

          });

        },
        error:function(err){
          console.error(err);
        }
      });
    },*/
    editInfo(){
      this.$router.push('./editInfo')
    },
    toProductList(){
      this.$router.push('./productList')
    },
    toFans(){
      this.$router.push('./fans')
    },
    toAttention(){
      this.$router.push('./attention')
    }


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
      height:2.75rem;
      background:linear-gradient(to right, #4083FF, #38BCFD);
      margin: 0 auto;
      font-size: 1.065rem;
      color: #fff;
      text-align: center;
      position: relative;
      line-height: 2.75rem;
      font-weight: 600;
      span{
        position: absolute;
        height: 100%;
        right: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .aboutMe{
      margin-top: 0.6rem;
      background: #FFF;
      .infoDes{
        display: flex;
        height: 4.97rem;
        border-bottom: 0.06rem solid #E6E7EB;
        font-family:PingFangSC-Regular;
        .avatar{
          flex: 1;
          text-align: center;
          margin-top: 0.72rem;
          img{
            width: 3.5rem;
            height: 3.5rem;
          }
        }
        .intro{
          text-align: left;
          flex: 3;
          P:nth-of-type(1){
            color: #1A1A1A;
            font-size: 1rem;
            margin: 1.2rem 0 0.5rem 0;
          }
          P:nth-of-type(2){
            color: #999999;
            font-size: 0.75rem;
          }
        }
      }
      .someNum{
        height: 3.375rem;
        display: flex;
        div{
          width: 0;
          flex: 1;
          text-align: center;
          line-height: 1.6rem;
          font-family:PingFangSC-Regular;
          font-size: 0.815rem;
          P:nth-of-type(1){
            color: #1A1A1A;
          }
          P:nth-of-type(2){
            color: #999999;
          }
        }
      }
    }
    .myIntro{
      background: #fff;
      margin-top: 0.6rem;
      padding-bottom: 1.125rem;
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
         /* input{
            border:none;
            outline: none;
            text-align: right;
            !* width: 90%; *!
            height: 100%;
          }
          .inputer{
            outline: none;
            border: none;
            font-size: 0.94rem;
            height: 2.75rem;
            text-align: left;
            margin-right: 1rem;
          }
          .sel{
            background: url('./img/choose_down.png') no-repeat;
            background-size: 0.69rem 0.375rem;
            background-position: 100% center;
            width: 100%;
            position:absolute;
            top:0;
            right:0;
            bottom:0;
            overflow: hidden;
          }*/
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
      .revise-info{
        width: 92%;
        height: 2.065rem;
        line-height: 2.065rem;
        margin:0 auto;
        background: #EFEFF4;
        font-size: 0.815rem;
        color: #4083FF;
        text-align: center;
        border-radius: 0.25rem ;
        img{
          width:0.875rem;
          height:0.97rem;
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
      div.product-item:not(:last-of-type){
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

  }
  
</style>
