<template>
  <div>
    <div class="content">
      <div class="header">
        <span @click="$router.go(-1)" class="back"><img style=" width:0.66rem;height: 1.175rem;display: inline-block;" src="./img/head-back.png" alt=""></span>
        <p>基本信息</p>
      </div>
      <div class="myIntro">
        <div class="intro-item" @click="AddNick">
          <div class="intro-item-l">昵称</div>
          <div class="intro-item-r">
            金毛豆丁酱
            <span><img src="./img/arrow.png" alt=""></span>
          </div>
        </div>
        <div class="intro-item">
          <div class="intro-item-l">所在地</div>
          <div class="intro-item-r" style="position:relative">
            <input class="inputer" placeholder="省份，城市" v-model="cityVal" readonly="readonly"/>
            <div class="sel">
              <popup-picker :data="cityList" :columns="3" v-model="cityVal" ref="cityPicker" ></popup-picker>
            </div>
          </div>
        </div>
        <div class="intro-item">
          <div class="intro-item-l">类型</div>
          <div class="intro-item-r" style="position:relative">
            <input class="inputer" placeholder="资金资产类型" v-model="AFType" readonly="readonly"/>
            <div class="sel">
              <popup-picker :data="AFList" :columns="1" v-model="AFType" ref="AFTypePicker" ></popup-picker>
            </div>
          </div>
        </div>


      </div>
      <div class="myIntro" style="margin-top: 0.6rem;">
        <div class="intro-item self-intro" @click="AddMyIntro">
          <div class="intro-item-l">个人简介</div>
          <div class="intro-item-r">
            一只高冷慢热型喜欢流行音乐泡韩剧撸美剧のa肥金毛
            <span><img src="./img/arrow.png" alt=""></span>
          </div>
        </div>
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
    MainNav, Loading, XButton, Confirm,myHead, PopupPicker,Cell

  },
  data () {
    return {
      myData:[],
      img_id: '',
      noAvatar:true,
      intro:'',
      cityVal: [],
      cityList: Lib.M.cityList,
      AFType:[],
      AFList: Lib.M.AFList,


    }
  },
  computed:{

  },
  mounted(){

  },
  methods: {
    AddNick(){
      this.$router.push('./AddNick')
    },
    AddMyIntro(){
      this.$router.push('./AddMyIntro')
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
    .myIntro{
      background: #fff;
      margin-top: 0.6rem;
      .intro-item{
        height: 2.72rem;
        line-height: 2.72rem;
        display: flex;
        border-bottom: 0.06rem solid #E6E7EB;
        padding:0 1.1rem;
        div{
          text-align: left;
          font-size: 0.875rem;
        }
        .intro-item-l{
          width: 0;
          flex: 1;
          color: #999999;
        }
        .intro-item-r{
          position: relative;
          flex: 3;
          color: #333333;
          span{
            float: right;
            img{
              width: 0.44rem;
              height: 0.75rem;
            }
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
            background: url('./img/arrow.png') no-repeat;
            background-size: 0.44rem 0.75rem;
            background-position: 100% center;
            width: 100%;
            position:absolute;
            top:0;
            right:0;
            bottom:0;
            overflow: hidden;
          }
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


  }
  
</style>
