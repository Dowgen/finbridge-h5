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
            <p>1800元</p>
            <p>件均额度</p>
          </div>
          <div class="item">
            <p>3天</p>
            <p>单笔期限</p>
          </div>
          <div class="item">
            <p>3百万</p>
            <p style="border: none;">日放款量</p>
          </div>
        </div>
      </div>
    </div>
    <div class="project-main">
      <div class="main-item">
        <p>项目名称</p>
        <p>项目类型</p>
        <p>总放款量</p>
        <p>坏账率</p>
        <p>产品名称</p>
        <p>产品特色</p>
      </div>
      <div class="main-item">
        <p>人众资金 第031号</p>
        <p>车抵贷</p>
        <p>20,000,000</p>
        <p>3.0%</p>
        <p>爱信金融钱包</p>
        <p>主要专业给年轻人的贷款，提供消费分期平台便于生活</p>
      </div>
    </div>
    <div class="project-footer">
      <div class="footer-item">
        <p>公司名称</p>
        <p>运营时间</p>
        <p>资金来源</p>
        <p>公司地址</p>
        <p>公司背景</p>
      </div>
      <div class="footer-item">
        <p>人众金服股份有限公司</p>
        <p>3个月</p>
        <p>银行/P2P/私募/基金/网络小贷/资管/其他</p>
        <p>XXXXXXXXXXXX</p>
        <p>XXXXXXXXXXXX</p>
      </div>
    </div>
    <div class="footer-btn" v-show="key == 1" @click="contactCard">立即合作</div>
    <div class="footer-btn" v-show="key == 2">查看联系方式</div>

   <div class="alert">
     <div class="contactCard">
       <div class="name">
          <img src="./img/ic_card_person.png" alt="">
          章睿敬先生
        </div>
       <div class="contactWays">
         <p>
           <img src="./img/ic_wechat.png" alt="">
           微信号
         </p>
         <p>51zzuixing_881</p>
       </div>
       <div class="contactWays">
         <p>
           <img src="./img/ic_card_QQ.png" alt="">
           QQ号
         </p>
         <p>51zzuixing_881</p>
       </div>
       <div class="contactWays">
         <p>
           <img src="./img/ic_phone.png" alt="">
           手机号码
         </p>
         <p>51zzuixing_881</p>
       </div>
       <div class="foot-close" @click="closeContactCard">
         <img src="./img/ic_card_dropout.png" alt="">
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'
import { Toast} from 'vux'
import $ from "jquery"

export default {
  name: 'ProjectDetail',
  components: {
    Toast,

  },
  data () {
    return {
      key:1,
    }
  },
  methods:{
    /*share(){
      this.$vux.toast.show({
        showPositionValue: false,
        text: '分享成功',
        type: 'success',
        position: 'middle'
      })
    },*/
    contactCard(){
      $('.alert').css('display','block')
    },
    closeContactCard(){
      $('.alert').css('display','none')
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
  height: 100%;
  background: #D7D7D7 ;
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
  flex: 3;
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
  flex: 3;
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
}
.alert{
  width: 100%;
  height: 100%;
  max-width: 640px;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.45);
  display: none;
}
.alert .contactCard{
  width: 14.815rem;
  height: 21.5rem;
  background: url("./img/contact_card_bg.png") no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -9.4075rem;
  margin-top: -10.75rem;
  text-align: left;
  padding:0 2rem;
}
.alert .contactCard .name{
  margin-top: 1.5rem;
  margin-bottom: 4.5rem;
  font-size: 1rem;
  color: #fff;
  position: relative;
  text-indent: 2rem;
}
.alert .contactCard .name img{
  display: inline-block;
  width: 1.345rem;
  height: 1.345rem;
  position: absolute;
  top: 0.05rem;
  left: 0.2rem;
}
.contactWays{
  font-size: 0.875rem;
  color: #333333;
  position: relative;
  text-indent: 2.5rem;
  line-height: 1.2rem;
  margin-bottom: 1.5rem;
}
.contactWays p:nth-of-type(2){
  color: #666;
}
.contactWays img{
  display: inline-block;
  width: 1.125rem;
  height: 1rem;
  position: absolute;
  top: 0.05rem;
  left: 0.2rem;
}
.contactWays img:nth-of-type(2){
  width: 1.125rem;
  height: 1.25rem;
}
.contactWays img:nth-of-type(3){
  width: 1.25rem;
  height: 1.03rem;
}
.foot-close{
  width: 2.19rem;
  height: 3.5rem;
  position: absolute;
  right: 1.5rem;
  bottom: 0;
}
.foot-close img{
  width: 100%;
  height: 100%;
}
</style>
