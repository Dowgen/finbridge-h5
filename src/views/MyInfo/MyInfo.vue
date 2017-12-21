<template>
  <div>
    <div class="content">
      <div class="myHead">
        <div class="avatar" @click="AboutMe">
          <img src="./img/img_placeholder.png" alt="">
        </div>
      </div>
      <div class="myInfo">
        <h4>您好,</h4>
        <p>182****4396</p>
        <div class="intro">
          <p>51资金资产是炬合旗下一款为资金方资产方发布自身需求、对接商务合作的应用，该应用可方便快速的帮助资金方与资产方挂牌自身需求，接洽商务合作人员，致力于成为金融行业商务资源聚集地。</p>
        </div>
      </div>
      <div class="aboutUs" @click="AboutUs">关于我们</div>
    </div>
    <main-nav which="myInfo"></main-nav>
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Loading, XButton, Confirm, Swiper, SwiperItem, } from 'vux'

import MainNav from '@/components/mainNav'

export default {
  name: 'Home', 
  components: {
    MainNav, Loading, XButton, Confirm, Swiper, SwiperItem,
  },
  data () {
    return {
      
    }
  },
  computed:{
    
  },
  mounted(){
    
  },
  methods: {
    AboutUs(){
      this.$router.push('./AboutUs')
    },
    AboutMe(){
      this.$router.push('./AboutMe')
    }

  }
}
</script>

<style lang="less" scoped>
  .content{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    .myHead{
      width: 100%;
      height:18.03rem;
      background: url("./img/img-me-bg.png") no-repeat left top;
      background-size: 100% 100%;
      overflow: hidden;
      .avatar{
        width: 6.875rem;
        height: 6.875rem;
        margin:10rem auto 0;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .myInfo{
      h4{
        font-size: 1.565rem;
        color: #4E4E4E;
        font-weight:normal;
      }
      p{
        font-size: 1.125rem;
        color: #BBBBBB;
        margin: 0.8rem 0 1.9rem;
      }
      .intro{
        width: 80%;
        margin: 0 auto;
        p{
          font-size: 0.75rem;
          color: #666666 ;
          line-height: 1.345rem;
        }
      }
    }
    .aboutUs{
      width:19.69rem;
      height:3.44rem;
      margin:3rem auto 0;
      background:#FF671B;
      border-radius: 1.72rem ;
      text-align: center;
      line-height: 3.44rem;
      color: #fff;
      font-size: 1.125rem;
    }
  }
  
</style>
