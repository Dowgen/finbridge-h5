<template>
  <div class="assets">
    <myHead msg="发布资产" backgroundColor="#fff"></myHead>
    <div class="asset-process">
      <div class="step">
        <img v-show="projectName == ''" src="./img/step1.png" alt="">
        <img v-show="projectName !== ''" src="./img/step1_1.png" alt="">
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
        <div class="des-item-r"><input v-model="projectName" type="text" placeholder="填写格式“****寻资金”" maxlength="9"></div>
      </div>
      <div class="des-item">
        <div class="des-item-l">产品名称(选填)</div>
        <div class="des-item-r"><input v-model="productName" type="text" maxlength="5" placeholder="请填写5个字以内"></div>
      </div>
      <div class="des-item" style="position:relative">
        <div class="des-item-l">产品类型</div>
        <div class="des-item-r pro-choose">
          <input type="text" :value="getLabel(productType,'a')" placeholder="请选择产品类型">
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
        <label v-for="item in assetTypeList">
          <input v-model="productType" name="assetsType" type="radio" :value="item.key" />{{item.label}} 
        </label>
      </div>
      <div class="des-item">
        <div class="des-item-l">件均额度(选填)</div>
        <div class="des-item-r">
          <input v-model.number="perAmount" onkeyup="clearNoNum(this)" type="number" placeholder="请输入数字">
          <span class="unit">元</span></div>
      </div>
     <!-- <div class="des-item">
        <div class="des-item-l">产品特色(选填)</div>
        <div class="des-item-r"><input v-model="productFeature" type="text" maxlength="20" placeholder="请填写10-20个字以内"></div>
      </div>-->
      <div class="des-item" style="height: 4.215rem;line-height: 4.215rem;border-top: 0.06rem solid #E6E6E6;">
        <div class="des-item-l" style="height: 2.6rem;">产品特色(选填)</div>
        <div class="des-item-r" style="margin-top: 2.5rem;height: 1.615rem;line-height: 1.615rem;"><input v-model="productFeature" type="text" placeholder="请填写产品特色"></div>
      </div>

      <div class="des-item">
        <div class="des-item-l">产品期限</div>
        <div class="des-item-r">
          <input v-model="perPeriod" type="text" maxlength="10" placeholder="请填写贷款期限">
        </div>
      </div>
    </div>
    <div class="assets-des2">
      <div class="des-item">
        <div class="des-item-l">资金成本区间</div>
        <div class="des-item-r range">
          <input v-model.number="fundCostRegionFrom" onkeyup="clearNoNum(this)" type="number" min="0" max="100"> &nbsp;-&nbsp; <input v-model.number="fundCostRegionTo" onkeyup="clearNoNum(this)" type="number" min="0" max="100">
          %
        </div>
      </div>
      <div class="des-item">
        <div class="des-item-l">日放款规模</div>
        <div class="des-item-r">
          <input v-model.number="dailyPayAmount" onkeyup="clearNoNum(this)" type="number" maxlength="20" placeholder="请输入数字">
          <span class="unit">百万</span>
        </div>
      </div>
      <div class="des-item">
        <div class="des-item-l">总放款规模</div>
        <div class="des-item-r">
          <input v-model.number="totalPayAmount" onkeyup="clearNoNum(this)" type="number" maxlength="20" placeholder="请输入数字">
          <span class="unit">千万</span>
        </div>
      </div>
      <div class="des-item">
        <div class="des-item-l">坏账率(选填)</div>
        <div class="des-item-r">
          <input v-model.number="debtRate" onkeyup="clearNoNum(this)" type="number" maxlength="5" placeholder="请输入数字">
          <span class="unit">%</span>
        </div>
      </div>
      <div class="des-item">
      </div>
    </div>
    <div class="next" @click="nextWay">下一步</div>

    
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'
import myHead from '@/components/myHead'
import { Cell } from 'vux'
import $ from "jquery"

export default {
  name: 'ReleaseAssets',
  components: {
    myHead,
    Cell
  },
  data () {
    return {
      assetTypeList:[], //资产类型列表
      showPdType: false,
      projectName:'',
      productName:'',
      productType:'',
      perAmount:'',
      productFeature:'',
      perPeriod:'',
      fundCostRegionFrom:'',
      fundCostRegionTo:'',
      dailyPayAmount:'',
      totalPayAmount:'',
      debtRate :''
    }
  },
  mounted(){
    this.assetTypeList = JSON.parse(localStorage.assetTypeList);
    this.fundTypeList = JSON.parse(localStorage.fundTypeList);
    if(localStorage.addAssetParams != null){
      let a = JSON.parse(localStorage.addAssetParams);
      this.projectName = a.projectName;
      this.productType = a.productType;
      this.perAmount = a.perAmount;
      this.productFeature = a.productFeature;
      this.perPeriod = a.perPeriod;
      this.fundCostRegionFrom = a.fundCostRegionFrom;
      this.fundCostRegionTo = a.fundCostRegionTo;
      this.dailyPayAmount = a.dailyPayAmount;
      this.totalPayAmount = a.totalPayAmount;
      this.debtRate = a.debtRate
    }
  },
  methods:{
    nextWay(){
      if( this.projectName == '' ||
          this.productType == '' ||
          /*this.perAmount == '' ||*/
          /*this.productFeature == '' ||*/
          this.perPeriod == '' || 
          this.fundCostRegionFrom == '' || 
          this.fundCostRegionTo == '' ||
          /*this.dailyPayAmount == '' || */
          this.totalPayAmount == '' 
         /* this.debtRate == ''*/ ){
        this.$vux.toast.text('内容请填写完整', 'middle');
      }else{
        let addAssetParams = {
          projectName : this.projectName,
          productType : parseInt(this.productType),
          perAmount : parseInt(this.perAmount),
          productFeature : this.productFeature,
          perPeriod : this.perPeriod,
          fundCostRegionFrom : parseInt(this.fundCostRegionFrom),
          fundCostRegionTo : parseInt(this.fundCostRegionTo),
          dailyPayAmount : parseInt(this.dailyPayAmount),
          totalPayAmount : parseInt(this.totalPayAmount),
          debtRate : parseInt(this.debtRate)
        }
        localStorage.addAssetParams = JSON.stringify(addAssetParams);
        this.$router.push({ path: 'Release2', query: { AorF: 'assets' }})
      }
    },
    //资金资产类型数字转化为文字
    getLabel(key,type){
      var f;
      if(type=='fund')
        f = JSON.parse(localStorage.fundTypeList);
      else
        f = JSON.parse(localStorage.assetTypeList);
      for(let i in f){
        if(f[i].key == key) return f[i].label
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ::-webkit-input-placeholder { /* WebKit browsers */
    font-size: 0.815rem;
    letter-spacing: 1px;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-size: 0.815rem;
    letter-spacing: 1px;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-size: 0.815rem;
    letter-spacing: 1px;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    font-size: 0.815rem;
    letter-spacing: 1px;
  }
.assets{
  width: 100%;
  height: 41rem;
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
.des-item .des-item-r input{
  border:none;
  outline: none;
  text-align: right;
  /* width: 90%; */
  height: 100%;
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
  padding-right: 0.3rem;
  border: 0.06rem solid #333;
  outline: none;
}
.next{
  width: 100%;
  max-width: 640px;
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
.unit{
  margin-left: 0.5rem;
  color: #1A1A1A;
}
</style>
