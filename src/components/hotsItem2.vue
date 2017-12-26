<template>
  <div class="news">
    <div class="hots-item">
      <div class="left">
        <h4>{{news.title}}</h4>
        <p class="about-read">
          <!--<span class="read-date"></span>
          <span class="read-num"></span>-->
        </p>
      </div>
      <div class="right">
        <img :src=news.image alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import Lib from '@/assets/js/Lib'
  import $ from 'jquery'

export default {
  name: 'hotsItem2',
  data() {
    return {

    }
  },
  props: {
    news:{
      type:Object,
      required:true
    },

  },
  mounted(){

  },
  //相关操作事件
  methods: {


  }
}
</script>

<style lang="less" scoped>
  .hots-item{
    width: 100%;
    margin:0 auto;
    display: flex;
    flex-direction: row;
    text-align: left;
    border-bottom: 0.06rem solid #EAEAEA;
    .left{
      flex-grow: 2;
      h4{
        font-size: 0.875rem;
        color: #333333;
        margin: 1.115rem 0 1.97rem 0;
      }
      .about-read{
        font-size: 0.685rem;
        color: #BFBFBF;
        line-height: 2rem;
          .read-date{
            margin-right: 0.6rem;
          }
      }
    }
      .right{
        flex-grow: 1;
        img{
          width: 5.875rem;
          height: 3.625rem;
          margin:1.2rem 0 0 1.2rem;
        }
      }
  }
</style>
