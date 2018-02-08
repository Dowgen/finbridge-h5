<template>
  <div>
    <div class="content">
      <div class="header">
        <span class="back" @click="$router.push('aboutUs')">设置</span>
        <p>我的</p>
      </div>
      <div class="aboutMe">
        <div class="infoDes">
          <div class="avatar">
            <!-- <img src="./img/avatar.png" alt=""> -->
            <img v-show="userInfoDetail.type==1" src="./img/ptf.png" alt="">
            <img v-show="userInfoDetail.type==2" src="./img/zjf.png" alt="">
            <img v-show="userInfoDetail.type==3" src="./img/zcf.png" alt="">
          </div>
          <div class="intro">
            <p>{{userInfoDetail.name || '无'}} </p>
            <p>简介：{{userInfoDetail.introduction || '无'}}</p>
          </div>
        </div>
        <div class="someNum">
          <div class="projectNum" @click="toProductList('all')">
            <p>{{fundList.length + assetsList.length}}</p>
            <p>项目</p>
          </div>
          <div class="attentionNum" @click="toAttention">
            <p>{{myData.follow}}</p>
            <p>关注</p>
          </div>
          <div class="fansNum" @click="toFans">
            <p>{{myData.followed}}</p>
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
          <div class="intro-item-r">{{userInfoDetail.name || '无'}}</div>
        </div>
        <div class="intro-item">
          <div class="intro-item-l">所在地</div>
          <div class="intro-item-r">{{userInfoDetail.address || '无'}}</div>
        </div>
        <div class="intro-item">
          <div class="intro-item-l">类型</div>
          <div class="intro-item-r">{{ getUserType(userInfoDetail.type) || '无'}}</div>
        </div>
        <div class="intro-item self-intro">
          <div class="intro-item-l">个人简介</div>
          <div class="intro-item-r">{{userInfoDetail.introduction || '无'}}</div>
        </div>
        <div class="revise-info" @click="editInfo">
          <img src="./img/ic_edit.png" alt="">
          修改资料
        </div>
      </div>
      <div class="productList">
        <div class="intro-title">
          <span></span>
          <span>项目列表</span>
          <span v-if="AorF=='fund'" @click="AorF ='asset'"><img src="./img/button_fund.png" alt=""></span>
          <span v-if="AorF=='asset'" @click="AorF ='fund'"><img src="./img/button_asset.png" alt=""></span>
        </div>

        <div v-if="AorF=='fund'">
           <div class="product-item" v-for="(item,index) in fundList" v-if="index < 3">
             <div class="product-item-l">
               <p>{{item.fundCostRegionFrom}}<span>%</span> - {{item.fundCostRegionTo}}<span>%</span></p>
               <p>资金成本区间</p>
             </div>
             <div class="product-item-r">
               <p>{{item.projectName}}</p>
               <p>
                 <span>{{validPeriod - (parseInt((new Date() - new Date(item.listTime.replace(/-/g,'/'))) / 86400000))}}天</span>
                 <span>{{getLabel(item.fundType,'fund')}}</span>
               </p>
             </div>
           </div>
         </div>

        <div v-if="AorF=='asset'">
          <div class="product-item" v-for="(oItem,index) in assetsList" v-if="index < 3">
            <div class="product-item-l">
              <p>{{oItem.fundCostRegionFrom}}<span>%</span> - {{oItem.fundCostRegionTo}}<span>%</span></p>
              <p>资金成本区间</p>
            </div>
            <div class="product-item-r">
              <p>{{oItem.projectName}}</p>
              <p>
                <span>{{validPeriod - parseInt((new Date() - new Date(oItem.listTime.replace(/-/g,'/'))) / 86400000)}}天</span>
                <span>{{getLabel(oItem.productType,'asset')}}</span>
              </p>
            </div>
          </div>
        </div>

        <div class="look-more"  @click="toProductList('fund')" v-if="AorF=='fund'">查看更多({{lookFCount}})</div>
        <div class="look-more"  @click="toProductList('asset')" v-if="AorF=='asset'">查看更多({{lookACount}})</div>
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
      myData:{},
      userInfoDetail:{},
      img_id: '',
      noAvatar:true,
      intro:'',
      myPhone:'',
      cityVal: [],
      cityList: Lib.M.cityList,
      AorF:'',
      fundList:[],
      assetsList:[],
      validPeriod:'',
      lookFCount:'',
      lookACount:'',



    }
  },
  computed:{

  },
  mounted(){
    this.localUserInfo = localStorage;
    this.getValidPeriod();
    this.getMyInfo();
    this.getProjectList();

  },
  methods: {
    editInfo(){
      this.$router.push('./editInfo')
    },
    toProductList(AorF){
      this.$router.push({'path':'./productList',query:{
        AorF:AorF,
      }})
    },
    toFans(){
      this.$router.push({'path':'/attention',query:{
          AorF:'fans'
        }
      })
    },
    toAttention(){
      this.$router.push({'path':'/attention',query:{
          AorF:'attention'
        }
      })
    },
    getUserType(key){
      return Lib.M.getUserType(key);
    },
    getMyInfo(){
      var self = this;
      Lib.M.ajax({
        type:'post',
        url: "/user/getUserInfoDetail",
        data:{
          'userId':self.localUserInfo.userId,
        },
        success:function (res) {
          self.myData = res.data;
          if(res.data.userInfoDetail !== null){
            self.userInfoDetail = res.data.userInfoDetail;
          }
        }
      })
    },
    getProjectList(){
      var self = this;
      Lib.M.ajax({
        type:'post',
        url: "/public/userListingProject",
        data:{
          /*userId:'68f23f6b9ebb4dbd91f91b7ee21ba22a',*/
          userId: self.localUserInfo.userId 
        },
        success:function (res) {
          console.log(res.data);
          if(self.AorF = 'fund'){
            self.fundList = res.data.fund

            if(res.data.fund.length - 3 < 0){
              self.lookFCount = 0;
            }else {
              self.lookFCount = res.data.fund.length - 3;
            }

            console.log(self.lookFCount);
          }
          if(self.AorF = 'asset'){
            self.assetsList = res.data.asset

            if(res.data.asset.length - 3 < 0){
              self.lookACount = 0;
            }else {
              self.lookACount = res.data.asset.length - 3;
            }

            console.log(self.lookACount);
          }


        }
      })
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
    // 获得资金资产统一的失效天数
    getValidPeriod(){
      var self = this;
      Lib.M.ajax({
        url:'/config/getConfigByParameter',
        data:{
          'key':'unlistPeriod'
        },
        success:function (res) {
          self.validPeriod = res.data[0].value;
          /*console.log(111111);
          console.log(self.validPeriod);*/
        },
        error:function(err){
          console.error(err);
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
