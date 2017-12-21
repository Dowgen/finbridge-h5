<template>
  <div class="news">
    <div class="hots-item" @click="newsDetail">
      <div class="left">
        <h4>千真万确！银行不接待资金！</h4>
        <p class="about-read">
          <span class="read-date">2017-12-09</span>
          <span class="read-num">782阅读量</span>
        </p>
      </div>
      <div class="right">
        <img src="./img/img_news.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'hotsItem2',
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
    newsDetail(){
      this.$router.push('./NewsDetail')
    }
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
