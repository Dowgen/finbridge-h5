<template>
  <div>
    <div class="content">
      <div class="header">
        <span @click="$router.go(-1)" class="back"><img style=" width:0.66rem;height: 1.175rem;display: inline-block;" src="./img/head-back.png" alt=""></span>
        <p>项目列表</p>
      </div>
      <div class="productList">
        <div v-if="$route.query.AorF == 'fund'">
          <div class="product-item" v-for="(item,index) in fundList" v-if="index > 3">
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

        <div v-if="$route.query.AorF == 'asset'">
          <div class="product-item" v-for="(oItem,index) in assetsList" v-if="index > 3">
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

        <div  v-if="$route.query.AorF == 'all'">
          <div>
            <div class="product-item" v-for="(item,index) in fundList">
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

          <div>
            <div class="product-item" v-for="(oItem,index) in assetsList">
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
        </div>
        <div class="no-more">没有更多了...</div>
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
      AorF:'',
      fundList:[],
      assetsList:[],
      validPeriod:'',


    }
  },
  computed:{

  },
  mounted(){
    this.getValidPeriod();
    this.getProjectList();
  },
  methods: {
    getProjectList(){
      var self = this;
      Lib.M.ajax({
        type:'post',
        url: "/public/userListingProject",
        data:{
          'userId':'68f23f6b9ebb4dbd91f91b7ee21ba22a',/*self.localUserInfo.userId */
        },
        success:function (res) {
          console.log(res.data);
          if(self.AorF = 'fund'){
            self.fundList = res.data.fund

          }
          if(self.AorF = 'asset'){
            self.assetsList = res.data.asset

          }

          if(self.AorF = 'all'){
            self.fundList = res.data.fund

            self.assetsList = res.data.asset

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
    .header{
      width:100%;
      height:2.75rem;
      background:#fff;
      margin: 0 auto;
      font-size: 1.065rem;
      color: #000;
      text-align: center;
      position: relative;
      line-height: 2.75rem;
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
    .productList{
      background: #fff;
      margin-top: 0.6rem;
      padding-bottom: 0.5rem;
      position: relative;
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
      .no-more{
        line-height: 2rem;
        text-align: center;
        font-size: 0.75rem;
        color: #C7C7C7;
        margin-top: 1rem;
      }
    }


  }
  
</style>
