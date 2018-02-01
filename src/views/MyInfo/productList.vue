<template>
  <div>
    <div class="content">
      <div class="header">
        <span @click="$router.go(-1)" class="back"><img style=" width:0.66rem;height: 1.175rem;display: inline-block;" src="./img/head-back.png" alt=""></span>
        <p>项目列表</p>
      </div>
      <div class="productList">
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
