<template>
  <div class="project">
    <div class="project-head">
      <div class="head">
        <span @click="$router.go(-1)" class="back"><img style=" width:0.72rem;height: 1.22rem;display: inline-block;" src="./img/back.png" alt=""></span>
        <p>项目详情</p>
      </div>
      <div class="con">
        <p class="p1">人众资金 第031号</p>
        <p class="p2">15-18</p>
        <p class="p3">资金成本区间(%）</p>
        <div class="project-des">
          <div class="item">
            <p>资金类型: P2P</p>
          </div>
          <div class="item">
            <p>资金规模: 3千万</p>
          </div>
        </div>
      </div>
    </div>
    <div class="project-main">
      <div class="main-item">
        <p>公司名称</p>
        <p>青睐资产</p>
      </div>
      <div class="main-item">
        <p>人众金服股份有限公司</p>
        <p>现金贷、现金分期、消费分期、车
抵贷、3C租赁</p>
      </div>
    </div>
    <div class="project-footer">
      <div class="footer-item">
        <p>手机号码</p>
        <p>微信号</p>
        <p>QQ号</p>
      </div>
      <div class="footer-item">
        <p>18276739008</p>
        <p>shuixisuo001</p>
        <p>739008112</p>
      </div>
    </div>
    <div class="footer-btn" v-show="key == 3" style="display: flex;flex-direction: row">
      <div class="btn-left" style="flex-grow: 1" @click="offline">下架</div>
      <div class="btn-right" style="flex-grow: 1">
        <img src="./img/delete.png" alt="" class="delete">
        删除
      </div>
    </div>
    <div class="footer-btn" v-show="key == 4" style="display: flex;flex-direction: row">
      <div class="btn-left" style="flex-grow: 1" @click="share">分享</div>
      <div class="btn-right" style="flex-grow: 1">
        <img src="./img/delete.png" alt="" class="delete">
        删除
      </div>
    </div>
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'
import { Toast} from 'vux'

export default {
  name: 'ProjectDetail',
  components: {
    Toast,

  },
  data () {
    return {
      key:3,
    }
  },
  methods:{
    share(){
      this.$vux.toast.show({
        showPositionValue: false,
        text: '分享成功',
        type: 'success',
        position: 'middle'
      })
    },
    offline(){
      this.$vux.confirm.show({
        content: '下架之后，该项目将进入已失效，是否确认下架？',
        onConfirm () {
          console.log('hello')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  padding-bottom:0 !important;
}
.project{
  width: 100%;
  height: 41rem;
  background: rgba(239,239,224,1);
}
.project .project-head{
  width: 100%;
  height: 15.94rem;
  background: url("./img/bg_details.png") no-repeat center;
  background-size: 100% 100%;
  overflow: hidden;
}
.project .head{
  width: 100%;
  height: 1.22rem;
  color: #fff;
  position: relative;
  margin-top: 1.75rem;
}
.project .head p{
  font-size:1.065rem;
  text-align: center;
}
.project .head span{
  position: absolute;
  left: 1.655rem;
}
.project .con p{
  font-family:PingFangSC-Regular;
  color: #fff;
}
.project .con .p1{
  font-size: 0.94rem;
  margin:1.25rem 0 2.4rem 0;
}
.project .con .p2{
  font-size: 1.44rem;
  margin-bottom: 0.6rem;
}
.project .con .p3{
  font-size: 0.815rem;
}
.project .project-des{
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
}
.project .project-des .item{
  flex-grow: 1;
}
.project .project-des .item p:nth-of-type(1){
  font-size: 0.875rem;
}
.project .project-des .item p:nth-of-type(2){
  border-right: 1px solid #fff;
  font-size: 0.815rem;
}
.project .project-main{
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  background: #fff;
}
.project .project-main .main-item:nth-of-type(1){
  flex: 1;
  color: #BEBEBE;
}
.project .project-main .main-item:nth-of-type(2){
  flex: 4;
  color: #666666;
}
.project .project-main .main-item{
  font-size: 0.875rem;
  text-align: left;
  align-self:baseline;
  margin:0 1rem;
}
.project .project-main .main-item p{
  margin:1.5rem 0;
}
.project .project-footer{
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
 /* height: 5.03rem;*/
  background: #fff;
  margin-top: 0.625rem;
}
.project .project-footer .footer-item:nth-of-type(1){
  flex: 1;
  color: #BEBEBE;
}
.project .project-footer .footer-item:nth-of-type(2){
  flex: 4;
  color: #666666;
}
.project .footer-item{
  font-size: 0.875rem;
  text-align: left;
  align-self:baseline;
  margin:0 1rem;
}
.project .project-footer .footer-item p{
  margin:1.5rem 0;
}
.footer-btn{
  width: 100%;
  height: 3.065rem;
  background: #4083FF ;
  color: #fff;
  text-align: center;
  line-height: 3.065rem;
  font-size: 1.065rem;
  position:absolute;
  bottom: 0;
}
.btn-left{
  font-size: 1.125rem;
  color: #fff;
}
.btn-right{
  background: #fff;
  font-size: 1.125rem;
  color: #B5B5B5;
}
.delete{
  width: 0.94rem;
  height: 0.94rem;
}
</style>
