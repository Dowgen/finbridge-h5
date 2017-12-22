<template>
  <div>
    <div class="content">
      <div class="square-head">
        <button-tab class="button-tab">
          <button-tab-item selected @on-item-click="zj=true">资金</button-tab-item>
          <button-tab-item @on-item-click="zj=false">资产</button-tab-item>
        </button-tab>
      </div>
      <div class="zj" v-show="zj">
        <div class="zj-head">
         <div @click="getZjComprehensiveSortFund">综合排序</div>
         <div @click="getZjTotalSortFundAsc">总放款规模
           <img v-show="key == 0" src="./img/ic_arrow_nor.png" alt="">
           <img @click="getZjTotalSortFundDesc" v-show="key == 1" src="./img/ic_arrow_down.png" alt="">
           <img @click="getZjTotalSortFundAsc" v-show="key == 2" src="./img/arrow_up.png" alt="">
         </div>
         <div @click="chooseType">选择类型
           <img v-show="key == 0" src="./img/arrow_type_nor.png" alt="">
           <img v-show="key == 1" src="./img/arrow_type_sel.png" alt="">
         </div>
       </div>
        <div class="type">
          <span class="angle"><img src="./img/tri-angle.png" alt=""></span>
          <div class="type-head">产品类型</div>
          <div class="types">
            <label><input name="CashLoan" type="radio" value="现金贷" />现金贷 </label>
            <label><input name="CashLoan" type="radio" value="房抵贷" />房抵贷 </label>
            <label><input name="CashLoan" type="radio" value="车抵贷" />车抵贷 </label>
            <label><input name="CashLoan" type="radio" value="3C租赁" />3C租赁 </label>
            <label><input name="CashLoan" type="radio" value="消费分期" />消费分期 </label>
            <label><input name="CashLoan" type="radio" value="现金分期" />现金分期 </label>
            <label><input name="CashLoan" type="radio" value="其它" />其它 </label>
          </div>
          <div class="btn">
            <span class="confirm" @click="confirm">确定</span>
            <span class="cancel" @click="cancel">取消</span>
          </div>
        </div>
        <div class="con">
          <div @click="ZjProjectDetail(item)" class="con-item" v-for="(item,index) in items">
            <div class="item-title">
              <span></span>
              <span>{{item.projectName}}</span>
            </div>
            <div class="item-main">
              <div class="left">
                <p>{{item.fundCostRegionFrom}}<span>%</span> - {{item.fundCostRegionTo}}<span>%</span></p>
                <p>资金成本区间</p>
              </div>
              <div class="right">
                <div>
                  <p></p>
                  <p>项目类型</p>
                  <p>{{item.fundType}}</p>
                </div>
                <div>
                  <p></p>
                  <p>项目倒计时</p>
                  <p>{{Math.floor(validDay -((currentTime - (Date.parse(new Date(item.listTime)) / 1000))/(60*60*24)))}}天</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="zj" v-show="!zj">
        资产资产资产
        <div class="zj-head">
          <div @click="getZcComprehensiveSortFund">综合排序</div>
          <div @click="getZcTotalSortFundAsc">总放款规模
            <img v-show="key == 0" src="./img/ic_arrow_nor.png" alt="">
            <img @click="getZcTotalSortFundDesc" v-show="key == 1" src="./img/ic_arrow_down.png" alt="">
            <img @click="getZcTotalSortFundAsc" v-show="key == 2" src="./img/arrow_up.png" alt="">
          </div>
          <div @click="chooseType">选择类型
            <img v-show="key == 0" src="./img/arrow_type_nor.png" alt="">
            <img v-show="key == 1" src="./img/arrow_type_sel.png" alt="">
          </div>
        </div>
        <div class="type">
          <span class="angle"><img src="./img/tri-angle.png" alt=""></span>
          <div class="type-head">产品类型</div>
          <div class="types">
            <label><input name="CashLoan" type="radio" value="现金贷" />现金贷 </label>
            <label><input name="CashLoan" type="radio" value="房抵贷" />房抵贷 </label>
            <label><input name="CashLoan" type="radio" value="车抵贷" />车抵贷 </label>
            <label><input name="CashLoan" type="radio" value="3C租赁" />3C租赁 </label>
            <label><input name="CashLoan" type="radio" value="消费分期" />消费分期 </label>
            <label><input name="CashLoan" type="radio" value="现金分期" />现金分期 </label>
            <label><input name="CashLoan" type="radio" value="其它" />其它 </label>
          </div>
          <div class="btn">
            <span class="confirm" @click="confirm">确定</span>
            <span class="cancel" @click="cancel">取消</span>
          </div>
        </div>
        <div class="con">
          <div @click="ZcProjectDetail(oItem)" class="con-item" v-for="oItem in oItems">
            <div class="item-title">
              <span></span>
              <span>{{oItem.projectName}}</span>
            </div>
            <div class="item-main">
              <div class="left">
                <p>{{oItem.fundCostRegionFrom}}<span>%</span> - {{oItem.fundCostRegionTo}}<span>%</span></p>
                <p>资金成本区间</p>
              </div>
              <div class="right">
                <div>
                  <p></p>
                  <p>项目类型</p>
                  <p>{{oItem.productType}}</p>
                </div>
                <div>
                  <p></p>
                  <p>项目倒计时</p>
                  <p>{{Math.floor(validDay -((currentTime - (Date.parse(new Date(oItem.listTime)) / 1000))/(60*60*24)))}}天</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main-nav which="square"></main-nav>
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Loading, XButton, Confirm, Swiper, SwiperItem,ButtonTab, ButtonTabItem } from 'vux'

import MainNav from '@/components/mainNav'

import $ from "jquery"

export default {
  name: 'Home', 
  components: {
    MainNav, Loading, XButton, Confirm, Swiper, SwiperItem,ButtonTab, ButtonTabItem
  },
  data () {
    return {
      zj:true,
      key:0,
      items:[],
      oItems:[],
      validDay:'',
      img_src:'',
      countDownDay:'',
      currentTime:''
    }
  },
  computed:{
    
  },
  mounted(){
    this.getConfigByParameter();
    this.getCurrent();
    this.getZjComprehensiveSortFund();
    this.getZcComprehensiveSortFund();
  },
  methods: {
    chooseType(){
      $('.type').css('display','block');
    },
    confirm(){
      $('.type').css('display','none');
    },
    cancel(){
      $('.type').css('display','none');
    },
    ZjProjectDetail(item){
      this.$router.push({'path':'/ZjLoginProjectDetail',query:{
          item:item,
        }
      })
    },
    ZcProjectDetail(oItem){
      this.$router.push({'path':'/ZcLoginProjectDetail',query:{
        oItem:oItem,
      }
      })
    },
    getConfigByParameter(){
      var self = this;
      Lib.M.ajax({
        url:'/config/getConfigByParameter',
        data:{
          'key':'unlistPeriod'
        },
        success:function (res) {
          console.log(111111);
          console.log(res);
          self.validDay = res.data[0].value;

        },
        error:function(err){
          console.error(err);
        }
      });
    },
    getZjComprehensiveSortFund(){
      var self = this;
      Lib.M.ajax({
        url:'/fund/sortFund',
        data:{
          'chooseType':'comprehensive',
          'sortType':'asc',
         /* 'type':'',*/
        },
        success:function (res) {
          console.log(res.data);
          self.items = res.data
        },
        error:function(err){
          console.error(err);
        }
      });
    },
    getZjTotalSortFundAsc(){
      var self = this;
      self.key = 2;/*升序*/
      Lib.M.ajax({
        url:'/fund/sortFund',
        data:{
          'chooseType':'total',
          'sortType':'asc',
          /* 'type':'',*/
        },
        success:function (res) {
          console.log(res.data);
          self.items = res.data

        },
        error:function(err){
          console.error(err);
        }
      });
    },
    getZjTotalSortFundDesc(){
      var self = this;
      self.key = 1;/*降序*/
      Lib.M.ajax({
        url:'/fund/sortFund',
        data:{
          'chooseType':'total',
          'sortType':'desc',
        },
        success:function (res) {
          console.log(res.data);
          self.items = res.data

        },
        error:function(err){
          console.error(err);
        }
      });
    },
    getCurrent(){
      self.currentTime = Date.parse(new Date())/ 1000
    },
    getZcComprehensiveSortFund(){
      var self = this;
      Lib.M.ajax({
        url:'/asset/sortAsset',
        data:{
          'chooseType':'comprehensive',
          'sortType':'asc',
          /* 'type':'',*/
        },
        success:function (res) {
         /* console.log(111111);
          console.log(res.data);*/
          self.oItems = res.data
        },
        error:function(err){
          console.error(err);
        }
      });
    },
    getZcTotalSortFundAsc(){
      var self = this;
      self.key = 2;/*升序*/
      Lib.M.ajax({
        url:'/asset/sortAsset',
        data:{
          'chooseType':'total',
          'sortType':'asc',
          /* 'type':'',*/
        },
        success:function (res) {
         /* console.log(res.data);*/
          self.oItems = res.data

        },
        error:function(err){
          console.error(err);
        }
      });
    },
    getZcTotalSortFundDesc(){
      var self = this;
      self.key = 1;/*降序*/
      Lib.M.ajax({
        url:'/asset/sortAsset',
        data:{
          'chooseType':'total',
          'sortType':'desc',
        },
        success:function (res) {
          /*console.log(res.data);*/
          self.oItems = res.data

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
    height: 100%;
    background: #EFEFF4;
    position: absolute;
    left: 0;
    top: 0;
    .active{
      color: #4083ff;
    }
    .square-head{
      width: 100%;
      height: 3.595rem;
      background: #fff;
      overflow: hidden;
      .button-tab{
        width:13.75rem;
        height: 1.6rem;
        margin:1.4rem auto 0;
        border-radius: 0;
      }
      .vux-button-group > a.vux-button-tab-item-first {
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
      }
      .vux-button-group > a.vux-button-tab-item-last {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        border-color:#4083ff;
      }
      .vux-button-group > a.vux-button-tab-item-first:after{
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
      }
      .vux-button-group > a.vux-button-tab-item-last:after{
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }
    }
    .zj{
      .zj-head{
        display: flex;
        flex-direction: row;
        margin-top: 0.8rem;
        div{
          flex-grow: 1;
        }
        div:nth-of-type(2){
          position: relative;
          img{
            width: 0.315rem;
            height: 0.565rem;
            position: absolute;
            top: 0.4rem;
            right:1rem;
          }
        }
        div:nth-of-type(3){
          position: relative;
          img{
            width: 0.315rem;
            height: 0.25rem;
            position: absolute;
            top: 0.6rem;
            right: 1rem;
          }
        }
      }
      .con{
        .con-item{
          height: 7.5rem;
          background: #fff;
          margin-top: 0.8rem;
          padding: 0 1rem;
          .item-title{
            text-align: left;
            line-height: 2.4rem;
            font-size: 0.815rem;
            color: #333333 ;
            border-bottom:0.06rem solid #EAEAEA;
            position: relative;
            span:nth-of-type(1){
              display: inline-block;
              width: 0.2rem;
              height: 0.9rem;
              background: #4083FF;
              position: absolute;
              top: 0.75rem;
              margin-right: 1rem;
            }
            span:nth-of-type(2){
              margin-left: 0.5rem;
            }
          }
          .item-main{
            display: flex;
            flex-direction: row;
            .left{
              flex-grow: 1;
              text-align: left;
              p:nth-of-type(1){
                font-size: 1.5rem;
                color: #FF671B;
                margin:1rem 0 0.5rem;
                span{
                  font-size: 0.815rem;
                }
              }
              P:nth-of-type(2){
                font-size: 0.75rem;
                color: #A3A3A3;
              }
            }
            .right{
              flex-grow: 2;
              height: 3rem;
              border-left: 0.06rem solid #EAEAEA;
              margin-top: 1rem;
              margin-left: 1.5rem;
              div{
                /*width: 13.5rem;*/
                font-size: 0.75rem;
                line-height: 1.6rem;
                overflow: hidden;
                position: relative;
                p:nth-of-type(1){
                  display: inline-block;
                  width: 0.32rem;
                  height: 0.32rem;
                  border-radius: 50%;
                  background: #F3AE43;
                  float: left;
                  position: absolute;
                  left: 0.8rem;
                  top: 0.5rem;
                }
                p:nth-of-type(2){
                  display: inline-block;
                  color: #A3A3A3;
                  float: left;
                  margin-left: 1.6rem;
                }
                p:nth-of-type(3){
                  display: inline-block;
                  color: #4083FF;
                  float: right;
                }
              }

            }
          }
        }

      }
      .type{
        height: 33rem;
        background: #fff;
        text-align: left;
        margin-top: 1rem;
        position: relative;
        display: none;
        .angle{
          display: block;
          width: 2rem;
          height: 2rem;
          position: absolute;
          right: 2.5rem;
          top: -1.2rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .type-head{
          font-size: 0.94rem;
          color: #1A1A1A;
          height: 2.8rem;
          line-height: 2.8rem;
          border-bottom:0.06rem solid #EAEAEA;
          text-indent: 1rem;
        }
        .types{
          padding: 0 1rem;
          text-align: center;
          input[type="radio"] {
            display: inline-block;
            width: 1.19rem;
            height: 1.19rem;
            border: 0.06rem solid #E6E6E6;
            border-radius: 50%;
            cursor: pointer;
            margin-right: 0.2rem;
            outline: none;
          }
          input:checked{
            background: url("./img/selected_one.png") no-repeat center;
            background-size: 100% 100%;
          }
          label {
            display: inline-block;
            height: 3rem;
            line-height: 3rem;
            margin-right: 0.5rem;
          }
        }
        .btn{
          text-align: center;
          margin-top: 3rem;
          span{
            display: inline-block;
            width:8.315rem;
            height:2.815rem;
            background:rgba(64,131,255,1);
            border-radius: 0.315rem ;
            font-size: 1.125rem;
            text-align: center;
            line-height: 2.815rem;
          }
          span:nth-of-type(1){
            color: #FFFFFF;
            margin-right: 1.28rem;
          }
          span:nth-of-type(2){
            color: #B5B5B5;
            background: #ffff;
            border:0.06rem solid #EAEAEA;
          }
        }
      }

    }


  }

</style>
