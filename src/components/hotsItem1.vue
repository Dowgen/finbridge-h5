<template>
  <div class="news">
    <div class="hots-con">
      <h4 class="hots-con-title">机器人大会来临，强势一触即发！</h4>
      <img class="hots-con-img" src="./img/img3_news.png" alt="">
      <p class="about-read">
        <span class="read-date">2017-12-09</span>
        <span class="read-num">782阅读量</span>
        <span class="icon">专题</span>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'hotsItem1',
  data() {
    return {

    }
  },
  props: {

  },
  mounted(){

  },
  //相关操作事件
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .hots-con{
    margin-top: 1rem;
    text-align: left;
    border-bottom: 0.06rem solid #EAEAEA;
    .hots-con-title{
      font-size: 1rem;
      color: #1C3A53;
      margin:1rem 0;
    }
    .hots-con-instr{
      margin:0.8rem 0 1rem 0;
      span{
        width: 4.125rem;
        height: 1.315rem;
        padding: 0.5rem;
        background: #F4F5F6;
        font-size: 0.75rem;
        color: #A0ACC0;
        text-align: center;
        line-height: 1.315rem;
      }
    }
    .hots-con-img{
      width: 100%;
      height: 100%;
    }
    .about-read{
      font-size: 0.685rem;
      color: #BFBFBF;
      line-height: 2rem;
      position: relative;
      .read-date{
        margin-right: 0.6rem;
      }
      .read-num{
        position: absolute;
        right: 3rem;
      }
      .icon{
        display: inline-block;
        width: 1.875rem;
        height: 0.815rem;
        border-radius: 0.405rem;
        border: 0.06rem solid #4083FF;
        text-align: center;
        line-height: 0.815rem;
        font-size: 0.565rem;
        color: #3478F6;
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
      }
    }
  }
</style>
