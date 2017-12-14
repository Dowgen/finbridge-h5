<template>
  <div class="assets">
    <myHead msg="发布资产" backgroundColor="#fff"></myHead>
    <div class="asset-process">
      <!--  <div>
        <step v-model="step" background-color='#fbf9fe'>
          <step-item :title="('1')" description="资产信息"></step-item>
          <step-item :title="('2')" description="公司信息"></step-item>
          <step-item :title="('3')" description="联系方式"></step-item>
        </step>
        <div class="btn_wrap">
          <x-button type="primary" @click.native="nextStep">下一步</x-button>
        </div>
      </div>-->
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
      <div class="des-item">
        <div class="des-item-l">产品名称</div>
        <div class="des-item-r"><input type="text" maxlength="5" placeholder="请填写5个字以内"></div>
      </div>
      <div class="des-item">
        <div class="des-item-l">产品类型</div>
        <div class="des-item-r pro-choose" @click="upDown">
          <input type="text" placeholder="请选择产品类型">
         <!-- <span class="up"  @click="up"><img id='up' src="./img/choose_up.png" alt=""></span>
          <span class="down"  @click="down"><img id="down" src="./img/choose_down.png" alt=""></span>-->
          <span class="downArrow" id="upDown"></span>

        </div>
      </div>
      <div class="pro-type">
       <!-- <input type="radio" id="nba" checked="checked" name="sport" value="nba">
        <label name="nba" class="checked" for="nba">NBA</label>
        <input type="radio" id="cba" name="sport" value="cba">
        <label name="cba" for="cba">CBA</label>-->

        <label><input name="CashLoan" type="radio" value="现金贷" />现金贷 </label>
        <label><input name="MortgageLoan" type="radio" value="房抵贷" />房抵贷 </label>
        <label><input name="CarLoan" type="radio" value="车抵贷" />车抵贷 </label>
        <label><input name="3CLease" type="radio" value="3C租赁" />3C租赁 </label>
        <label><input name="ConsumptionStage" type="radio" value="消费分期" />消费分期 </label>
        <label><input name="CashStage" type="radio" value="现金分期" />现金分期 </label>
        <label><input name="others" type="radio" value="其它" />其它 </label>
      </div>
      <div class="des-item">
        <div class="des-item-l">件均额度</div>
        <div class="des-item-r"><input type="text" placeholder="元"></div>
      </div>
      <div class="des-item">
        <div class="des-item-l">产品特色</div>
        <div class="des-item-r"><input type="text" maxlength="20" placeholder="请填写10-20个字以内"></div>
      </div>
    </div>
    <div class="assets-des2">
      <div class="des-item">
        <div class="des-item-l">资金成本区间</div>
        <div class="des-item-r range">
          <input type="number" maxlength="5"> &nbsp;-&nbsp; <input type="number" maxlength="5">
          %
        </div>
      </div>
      <div class="des-item">
        <div class="des-item-l">日放款规模</div>
        <div class="des-item-r"><input type="text" maxlength="20" placeholder="百万"></div>
      </div>
      <div class="des-item">
        <div class="des-item-l">总放款规模</div>
        <div class="des-item-r"><input type="text" maxlength="20" placeholder="千万"></div>
      </div>
      <div class="des-item">
        <div class="des-item-l">坏账率</div>
        <div class="des-item-r"><input type="text" maxlength="5" placeholder="%"></div>
      </div>
      <div class="des-item">
        <div class="des-item-l">资产发布期限</div>
        <div class="des-item-r"><input type="text" maxlength="10" placeholder="3天/笔"></div>
      </div>
      <div class="des-item">
      </div>
    </div>
    <div class="next" @click="nextWay">下一步</div>

    
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'
import myHead from '@/components/Header'
import { Step, StepItem, XButton, XHr } from 'vux'
import $ from "jquery"

export default {
  name: 'ReleaseAssets',
  components: {
    myHead,
    Step,
    StepItem,
    XButton,
    XHr
  },
  data () {
    return {
      step:1,
      text:''
    }
  },
  mounted(){
    this.chooseType();
  },
  methods:{
    nextStep () {
      this.step ++
    },
    nextWay(){
      this.$router.push('/ReleaseAssets2')
    },
    upDown(){
     /* $('#down').css('transform','rotate(180deg)')
      $('.pro-type').css('display','block')*/

      if($('#upDown').hasClass('.downArrow')){
        $('#upDown').removeClass('.downArrow').addClass('.upArrow');//收起
      }else{
        $('#upDown').removeClass('.upArrow').addClass('.downArrow');//展开
      }
    },
    /*up(){
      alert(11111)
      $('#up').css('transform','rotate(180deg)')
      $('.pro-type').css('display','none')
    },*/
    chooseType(){
      $('label').click(function(){
        var radioId = $('input[type="radio"]').attr('name');
        $('label').removeAttr('class') && $(this).attr('class', 'checked');
        $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
      })
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
.assets-des2{
  width: 100%;
  height: 15.28rem;
  background: #fff;
  margin-top: 0.625rem;
}
.assets-des2 .range input{
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
/*.pro-type input[type="radio"] {
  margin: 3px 3px 0px 5px;
  display: none;
}
.pro-type label {
  padding-left: 20px;
  cursor: pointer;
  !*background: url(bg.gif) no-repeat left top;*!
  background: pink;
}
.pro-type label.checked {
  background-position: left bottom;
}*/
/*.btn_wrap {
  padding: 0 1rem;
  margin-top: 2rem;
}*/
</style>
