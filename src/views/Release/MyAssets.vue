<template>
  <div>
    <myHead v-show="false" msg="发布项目" backgroundColor="#fff" hasBack="0"></myHead>
    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click"></actionsheet>
    <div v-if="false" class="content1">
      <button-tab class="button-tab">
        <button-tab-item selected @on-item-click="loseEfficacy=false">未失效</button-tab-item>
        <button-tab-item @on-item-click="loseEfficacy=true">已失效</button-tab-item>
      </button-tab>
      <div class="btn addAs">
        <span>+</span> 添加资产
      </div>
      <div class="btn addFu">
        <span>+</span> 添加资金
      </div>
    </div>
    <div v-if="true" class="content2">
      <button-tab class="button-tab">
        <button-tab-item selected @on-item-click="loseEfficacy=false">未失效</button-tab-item>
        <button-tab-item @on-item-click="loseEfficacy=true">已失效</button-tab-item>
      </button-tab>
      <div class="using" v-show="!loseEfficacy">
      <div class="fund-item-con">
        <div @click="show1=true" class="item_add"><img src="./img/item_add.png"></div>
        <!-- <popover placement="bottom">
          <div class="item_add"><img src="./img/item_add.png"></div>
          <div slot="content" class="popover-demo-content">
            <span>+</span> 添加资金
          </div>
        </popover> -->
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
import { Loading, ButtonTab, ButtonTabItem,Popover,Actionsheet } from 'vux'


export default {
  name: 'Home', 
  components: {
    myHead, MainNav, Loading, ButtonTab, ButtonTabItem, Popover,Actionsheet
  },
  data () {
    return {
      loseEfficacy:false,
      items:[1,2,3],
      /* actionsheet */
      show1: false,
      menus1: {
        menu1: '添加资金',
        menu2: '添加资产'
      },
    }
  },
  computed:{
    
  },
  mounted(){
    
  },
  methods: {
    click (key) {
      if(key=='menu1') this.$router.push('/ReleaseAssets')
      else this.$router.push('/ReleaseAssets2')
    },
  }
}
</script>

<style lang="less" scoped>
  .content1{
    box-sizing:border-box;
    padding-top: 1.5rem;
    background:url('./img/empty_page.png') no-repeat center;
    background-position:center 10rem;
    background-size: 12.22rem 13.625rem;
    height:40rem;
    .btn{
      width:11.28rem;
      height: 2.815rem;
      border-radius:22px;
      font-size: 1.065rem;
      display:flex;
      align-items:center;
      justify-content:center;
      margin:0 auto;
      span{
        font-weight:600;
        font-size: 1.8rem;
        margin-right:0.4rem;
      }
    }
    .addAs{
      margin-top:25rem;
      background-color:#4083FF;
      color:#fff;
    }
    .addFu{
      background-color:#fff;
      color:#4083FF;
      border:solid 1px #4083FF;
      margin-top:1rem;
    }
  }
  .content2{
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
    position:relative;
    box-sizing:border-box;
    padding: 1.44rem 0.97rem 0;
    .item_add{
      width:4rem;
      height:2rem;
      position:absolute;
      right:0.97rem;
      top:1.84rem;
      img{
        width:1.72rem;
        height:0.315rem;
      }
    }
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
  /* .vux-popover{
    background-color:#fff;
    top:0 !important;
  }
  .popover-demo-content {
    width: 7rem;
    height:4rem;
    line-height:4rem;
    background: #fff;
    color:#3478f6;
    border-radius:10px;
    box-shadow:0px 2px 20px 0px #808080;
  } */
</style>
