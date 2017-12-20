<template>
  <div class="assets">
    <myHead msg="发布资产" backgroundColor="#fff"></myHead>
    <div class="asset-process">
      <div class="step">
        <img v-show="text == ''" src="./img/step1.png" alt="">
        <img v-show="text !== ''" src="./img/step1_1.png" alt="">
      </div>
     <div class="step-title">
       <div class="active">资产信息</div>
       <div>公司信息</div>
       <div>联系方式</div>
     </div>
    </div>
    <div class="assets-des1">
      <div class="des-item">
        <div class="des-item-l">项目名称</div>
        <div class="des-item-r"><input v-model="text" type="text" placeholder="填写格式“**** 第*号”"></div>
      </div>
      <div class="des-item" style="position:relative">
        <div class="des-item-l">产品类型</div>
        <div class="des-item-r pro-choose">
          <input type="text" placeholder="请选择产品类型">
          <span :class="showPdType?'upArrow':'downArrow'"></span>
        </div>
        <cell
        class="myCell"
        title="Animated"
        is-link
        :border-intent="false"
        :arrow-direction="showPdType ? 'up' : 'down'"
        @click.native="showPdType = !showPdType"></cell>
      </div>


      <div class="pro-type slide" :class="showPdType?'animate':''">

        <label><input name="CashLoan" type="radio" value="现金贷" />现金贷 </label>
        <label><input name="CashLoan" type="radio" value="房抵贷" />房抵贷 </label>
        <label><input name="CashLoan" type="radio" value="车抵贷" />车抵贷 </label>
        <label><input name="CashLoan" type="radio" value="3C租赁" />3C租赁 </label>
        <label><input name="CashLoan" type="radio" value="消费分期" />消费分期 </label>
        <label><input name="CashLoan" type="radio" value="现金分期" />现金分期 </label>
        <label><input name="CashLoan" type="radio" value="其它" />其它 </label>
      </div>
      <div class="des-item">
        <div class="des-item-l">资金规模</div>
        <div class="des-item-r"><input type="text" placeholder="元"></div>
      </div>
      <div class="des-item">
        <div class="des-item-l">资金成本区间</div>
        <div class="des-item-r range">
          <input type="number" maxlength="5"> &nbsp;-&nbsp; <input type="number" maxlength="5">
          %
        </div>
      </div>
      <div class="des-item" style="position:relative">
        <div class="des-item-l">青睐资产类型</div>
        <div class="des-item-r">
          <input type="text" placeholder="请选择产品类型">
          <span :class="showLikeType?'upArrow':'downArrow'"></span>
        </div>
        <cell
        class="myCell"
        title="Animated"
        is-link
        :border-intent="false"
        :arrow-direction="showLikeType ? 'up' : 'down'"
        @click.native="showLikeType = !showLikeType"></cell>
      </div>
      <div class="pro-type2 slide"  :class="showLikeType?'animate':''">
        <label><input name="Band" type="checkbox" value="银行" />银行 </label>
        <label><input name="PrivatePlacement" type="checkbox" value="私募" />私募 </label>
        <label><input name="NetworkLoan" type="checkbox" value="网络小贷" />网络小贷 </label>
        <label><input name="Fund" type="checkbox" value="基金" />基金 </label>
        <label><input name="p2p" type="checkbox" value="p2p" />p2p </label>
        <label><input name="InforManage" type="checkbox" value="资管" />资管 </label>
        <label><input name="others" type="checkbox" value="其它" />其它 </label>
      </div>
    </div>
    <div class="next" @click="nextWay">下一步</div>

    
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'
import myHead from '@/components/Header'
import {XButton, XHr, Cell } from 'vux'
import $ from "jquery"

export default {
  name: 'ReleaseAssets',
  components: {
    myHead,
    XButton,
    XHr,
    Cell
  },
  data () {
    return {
      step:1,
      text:'',
      showPdType: false,
      showLikeType: false
    }
  },
  mounted(){
    
  },
  methods:{
    nextWay(){
      this.$router.push({ path: 'Release2', query: { AorF: 'fund' }})
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.assets{
  width: 100%;
  height: 100%;
  background: #EFEFF4;
  margin: 0 auto;
}
.asset-process{
  width: 100%;
  height: 6.03rem;
  background: #fff;
  margin-top: 0.72rem;
  overflow: hidden;
}
.asset-process .step{
  width: 100%;
  height: 0.875rem;
  margin: 1rem auto;
  text-align: center;
}
.asset-process .step img{
  width: 75%;
}
.step-title{
  display: flex;
  flex-direction: row;
}
.step-title div{
  flex-grow: 1;
  margin-top: 1rem;
  font-size: 0.75rem;
  color: #333333;
  text-align: center;
}
.step-title div.active{
  color: #4083FF;
}
.assets-des1{
  width: 100%;
 /* height: 15.625rem;*/
  background: #fff;
  margin-top: 0.625rem;
}
.des-item{
  display: flex;
  flex-direction: row;
  padding:0 2rem 0 1.2rem;
  height: 3.125rem;
  line-height: 3.125rem;
}
.assets-des1 .des-item:nth-of-type(1){
  border-bottom: 0.06rem solid #E6E6E6;
}
.des-item .des-item-l{
  text-align: left;
  flex-grow: 1;
  font-size: 0.94rem;
  color: #1A1A1A;
}
.des-item .des-item-r{
  text-align: right;
  flex-grow: 3;
  font-size: 0.815rem;
  color: #C2C2C2;
}
.des-item .des-item-r input[type='text']{
  border:none;
  outline: none;
  text-align: right;
}
.range input{
  width:2.595rem;
  height:1.44rem;
  border: 0.06rem solid #333;
  outline: none;
}
.next{
  width: 100%;
  height: 3.065rem;
  background: #4083FF;
  font-size: 1.065rem;
  color: #FFF;
  text-align: center;
  line-height: 3.065rem;
  position: fixed;
  left: 0;
  bottom: 0;
}

.pro-type{
  display: block;
}
.pro-type input[type="radio"] {
  display: inline-block;
  width: 1.19rem;
  height: 1.19rem;
  border: 0.06rem solid #E6E6E6;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 0.2rem;
  outline: none;
}
.pro-type input:checked{
  background: url("./img/selected_one.png") no-repeat center;
  background-size: 100% 100%;
}
.pro-type label {
  display: inline-block;
  height: 3rem;
  line-height: 3rem;
  margin-right: 0.5rem;
}
.pro-choose span{
  margin-left: 0.5rem;
}
.myCell{
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom: 0;
  opacity: 0;
}
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}

.pro-type2{
  display: block;
}
.pro-type2 input[type="checkbox"] {
  display: inline-block;
  width: 1.125rem;
  height: 1.125rem;
  border: 0.06rem solid #E6E6E6;
  border-radius: 0.19rem;
  cursor: pointer;
  margin-right: 0.2rem;
  outline: none;
}
.pro-type2 input:checked{
  background: url("./img/selected_more.png") no-repeat center;
  background-size: 100% 100%;
}
.pro-type2 label {
  display: inline-block;
  height: 3rem;
  line-height: 3rem;
  margin-right: 0.5rem;
}
.downArrow{
  display: inline-block;
  width: 0.75rem;
  height: 0.44rem;
  background: url("./img/choose_down.png") no-repeat center;
  background-size: 100% 100%;
}
.upArrow{
  display: inline-block;
  width: 0.75rem;
  height: 0.44rem;
  background: url("./img/choose_up.png") no-repeat center;
  background-size: 100% 100%;
}
</style>
