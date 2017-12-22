<template>
  <div class="content">
    <myHead msg="关于我们" backgroundColor="#fff" style="border: none;"></myHead>
    <div class="aboutUS">
      <img src="./img/logo.png" alt="">
      <h4>{{product}}</h4>
      <p>{{version}}</p>
    </div>
    <div class="contactWay">
      <div class="ways">
        <span>微信号</span>
        <span>{{wechat}}</span>
      </div>
      <div class="ways">
        <span>QQ号</span>
        <span>{{qq}}</span>
      </div>
      <div class="ways">
        <span>客服热线</span>
        <span>{{phone}}</span>
      </div>
    </div>
    <div class="quit">安全退出</div>
    <div class="footer">Copyright © 杭州炬合网络科技有限公司</div>
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Loading, XButton, Confirm, Swiper, SwiperItem, } from 'vux'

import myHead from '@/components/Header'

import $ from 'jquery'

export default {
  name: 'Home', 
  components: {
    Loading, XButton, Confirm, Swiper, SwiperItem,myHead
  },
  data () {
    return {
      myData:[],
      product:'',
      version:'',
      wechat:'',
      qq:'',
      phone:''
    }
  },
  computed:{
    
  },
  mounted(){
    this.getMyInfo();
  },
  methods: {
    getMyInfo(){
      var self = this;
      Lib.M.ajax({
        url : '/info/getAboutUs',
        success:function(res){
          self.myData = res.data;
          $(self.myData).each(function(index){
            if(self.myData[index].key == 'aboutUs_product'){
              self.product = self.myData[index].value;
              console.log(self.product);
            }
            if(self.myData[index].key == 'aboutUs_version'){
              self.version = self.myData[index].value;
              console.log(self.version);
            }
            if(self.myData[index].key == 'aboutUs_wechat'){
              self.wechat = self.myData[index].value;
              console.log(self.wechat);
            }
            if(self.myData[index].key == 'aboutUs_qq'){
              self.qq = self.myData[index].value;
              console.log(self.qq);
            }
            if(self.myData[index].key == 'aboutUs_phone'){
              self.phone = self.myData[index].value;
              console.log(self.phone);
            }
          });
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
    .aboutUS{
      height: 13.25rem;
      img{
        display: block;
        width:4.25rem;
        height:4.25rem;
        margin:3.75rem auto 0.9rem;
      }
      h4{
        font-size: 1rem;
        color: #333333;
        font-weight:normal;
      }
      p{
        font-size: 0.875rem;
        color: #B5B5B5;
        line-height: 1.5rem;
      }
    }
    .contactWay{
      width: 100%;
      margin: 0 auto;
      background: #fff;
      .ways{
        height: 2.815rem;
        line-height: 2.815rem;
        text-align: left;
        padding: 0 1rem;
        border-bottom: 0.06rem solid #E6E6E6;
        display: flex;
        flex-direction: row;
        span:nth-of-type(1){
          flex-grow: 1;
        }
        span:nth-of-type(2){
          flex-grow: 1;
          text-align: right;
        }
      }
    }
    .quit{
      width: 100%;
      height: 2.815rem;
      background: #fff;
      text-align: center;
      line-height: 2.815rem;
      font-size: 1.065rem;
      color: #F84F60;
      margin-top: 0.625rem;
    }
    .footer{
      width: 100%;
      font-size: 0.60rem;
      color: #BABABA;
      position: absolute;
      bottom: 1.19rem;
      left: 50%;
      margin-left: -50%;
    }

  }
  
</style>
