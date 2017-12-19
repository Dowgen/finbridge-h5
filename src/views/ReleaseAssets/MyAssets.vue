<template>
  <div>
    <myHead v-show="false" msg="发布项目" backgroundColor="#fff" hasBack="0"></myHead>
    <div class="content">
      <button-tab class="button-tab">
        <button-tab-item selected @on-item-click="loseEfficacy=false">未失效</button-tab-item>
        <button-tab-item @on-item-click="loseEfficacy=true">已失效</button-tab-item>
      </button-tab>
      <div class="using" v-show="!loseEfficacy">
      <div class="fund-item-con">
        <h3>资金</h3>
        <p>合规对接 量大稳定</p>
        <div>
        <div class="item" v-for="item in [1,2]">
          <div class="left">
            <p>7<span>%</span> - 10<span>%</span></p>
            <span>资金成本区间</span>
          </div>
          <div class="right">
            <p>中腾堡SJT-BL-171131</p>
            <div>
              <span>3天</span>
              <i>|</i>
              <span>车抵贷</span>
              <img src="./img/label_judge.png"/>
            </div>
          </div>
        </div>
        </div>
        <div class="seeAll">
          查看全部(32)
        </div>
      </div>
      <div class="assets-item-con">
        <h3>资产</h3>
        <p>风控审核 多元供给</p>
        <div>
        <div class="item" v-for="item in [1,2]">
          <div class="left">
            <p>7<span>%</span> - 10<span>%</span></p>
            <span>资金成本区间</span>
          </div>
          <div class="right">
            <p>中腾堡SJT-BL-171131</p>
            <div>
              <span>3天</span>
              <i>|</i>
              <span>车抵贷</span>
              <img src="./img/label_judge.png"/>
            </div>
          </div>
        </div>
        </div>
        <div class="seeAll">
          查看全部(32)
        </div>
      </div>
      </div>

      <div class="useless" v-show="loseEfficacy">
      <div class="fund-item-con">
        <h3>资金</h3>
        <p>合规对接 量大稳定</p>
        <div>
        <div class="item" v-for="item in [1,2]">
          <div class="left">
            <p>7<span>%</span> - 10<span>%</span></p>
            <span>资金成本区间</span>
          </div>
          <div class="right">
            <p>中腾堡SJT-BL-171131</p>
            <div>
              <span>3天</span>
              <i>|</i>
              <span>车抵贷</span>
            </div>
          </div>
        </div>
        </div>
        <div class="seeAll">
          查看全部(32)
        </div>
      </div>
      <div class="assets-item-con">
        <h3>资产</h3>
        <p>风控审核 多元供给</p>
        <div>
        <div class="item" v-for="item in [1,2]">
          <div class="left">
            <p>7<span>%</span> - 10<span>%</span></p>
            <span>资金成本区间</span>
          </div>
          <div class="right">
            <p>中腾堡SJT-BL-171131</p>
            <div>
              <span>3天</span>
              <i>|</i>
              <span>车抵贷</span>
            </div>
          </div>
        </div>
        </div>
        <div class="seeAll">
          查看全部(32)
        </div>
      </div>
      </div>
    </div>
    <main-nav which="MyAssets"></main-nav>
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'
import myHead from '@/components/Header'
import MainNav from '@/components/mainNav'
import { Loading, ButtonTab, ButtonTabItem } from 'vux'


export default {
  name: 'Home', 
  components: {
    myHead, MainNav, Loading, ButtonTab, ButtonTabItem
  },
  data () {
    return {
      loseEfficacy:false,
      items:[1,2,3]
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
    box-sizing:border-box;
    padding-top: 1.5rem;
    padding-bottom: 4.3rem;
  }
  .button-tab{
    width:13.75rem;
    height: 1.6rem;
    margin:0 auto;
  }
  .fund-item-con,.assets-item-con{
    box-sizing:border-box;
    padding: 1.44rem 0.97rem 0;
    >h3,>p{text-align:left;}
    >h3{
      color:#333;
      font-size:1.125rem;
    }
    >p{
      color: #a0acc0;
      font-size: 0.815rem;
      margin-top: 0.1rem;
      margin-bottom: 1rem;
    }
    .item{
      padding:1.065rem 0;
      display:flex;
      justify-content:space-between;
      border-bottom:dashed 2px #e5e5e5;
      &:last-child{border-bottom:solid 2px #fff;}
      >div{
        display:flex;
        flex-direction:column;
      }
      >.left{
        >p{
          font-size:1.5rem;
          color: #fc743f;
          >span{
            font-size:0.815rem;
          }
        }
        >span{
          font-size:0.875rem;
          color: #586575;
          margin-top:1.22rem;
        }
      }
      >.right{
        margin-right:1rem;
        width:10.5rem;
        text-align: left;
        >p{
          font-size: 1rem;
          color: #1c3a53;
        }
        >div{
          margin-top: 1.22rem;
          color:#586575;
          font-size:0.875rem;
          display:flex;
          align-items:center;
          >span:first-child,i{
            margin-right:0.3rem;
          }
          img{
            width:2.845rem;
            height: 1.15rem;
            margin-left:2.44rem;
          }
        }
      }
    }
    .seeAll{
      width:21.565rem;
      height: 2.065rem;
      line-height: 2.065rem;
      background-color:#efeff4;
      color: #4083FF;
      font-size: 0.815rem;
      margin:0 auto;
      margin-top:0.1rem;
    }
  }
  .useless .left>p{
    color:#adb4b8 !important;
  }
</style>
