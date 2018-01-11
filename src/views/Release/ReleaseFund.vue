<template>
  <div class="assets">
    <myHead msg="发布资金" backgroundColor="#fff"></myHead>
    <div class="asset-process">
      <div class="step">
        <img v-show="projectName == ''" src="./img/step1.png" alt="">
        <img v-show="projectName !== ''" src="./img/step1_1.png" alt="">
      </div>
     <div class="step-title">
       <div class="active">资金信息</div>
       <div>公司信息</div>
       <div>联系方式</div>
     </div>
    </div>
    <div class="assets-des1">
      <div class="des-item">
        <div class="des-item-l">项目名称</div>
        <div class="des-item-r"><input v-model="projectName" type="text" placeholder="填写格式“****寻资产”" maxlength="9"></div>
      </div>
      <div class="des-item">
        <div class="des-item-l">资金类型</div>
        <div class="des-item-r pro-choose">
          <input type="text" :value="getLabel(fundType,'fund')" placeholder="请选择产品类型">
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
        <label v-for="item in fundTypeList">
          <input v-model="fundType" name="fundType" type="radio" :value="item.key" />{{item.label}} 
        </label>
      </div>
      <div class="des-item">
        <div class="des-item-l">资金规模</div>
        <div class="des-item-r">
          <!-- <input v-model="fundAnmount" onkeyup="clearNoNum(this)"  type="number" placeholder="请输入数字"> -->
          <span class="unit">
            <select v-model="fundAnmount">
              <option disabled value="">请选择资金规模</option>
              <option v-for="i in fundAmountList" :value="i.key">{{i.label}}</option>
            </select>
          </span>
        </div>
      </div>
      <div class="des-item">
        <div class="des-item-l">资金成本区间</div>
        <div class="des-item-r range">
          <input v-model.number="fundCostRegionFrom" type="number" min="1" max="100"> &nbsp;-&nbsp; 
          <input v-model.number="fundCostRegionTo" type="number" min="1" max="100">
          %
        </div>
      </div>
      <div class="des-item">
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
        <label v-for="item in assetTypeList">
          <input v-model="findAssetType" type="checkbox" :value="item.key" />{{item.label}} 
        </label>
      </div>

      <div class="des-item section">
        <div class="des-item-l">资产要求(选填)</div>
        <div class="des-item-r">
          <input :value="findAssetRequire==''?'':findAssetRequire.substr(0,10)+'...'"  placeholder="下拉填写" readonly="readonly" />
          <span :class="showFindAssetRequire?'upArrow':'downArrow'"></span>
        </div>
        <cell
        class="myCell"
        title="Animated"
        is-link
        :border-intent="false"
        :arrow-direction="showFindAssetRequire ? 'up' : 'down'"
        @click.native="showFindAssetRequire = !showFindAssetRequire"></cell>
      </div>
      <div class="slide" :class="showFindAssetRequire?'animate':''">
        <textarea v-model="findAssetRequire" type="text" placeholder="请填写200个字以内描述" maxlength="200"></textarea>
      </div>

      <div class="des-item section">
        <div class="des-item-l">备注(选填)</div>
        <div class="des-item-r">
          <input :value="remarks==''?'':remarks.substr(0,10)+'...'" readonly="readonly" placeholder="下拉填写" />
          <span :class="showRemarks?'upArrow':'downArrow'"></span>
        </div>
        <cell
        class="myCell"
        title="Animated"
        is-link
        :border-intent="false"
        :arrow-direction="showRemarks ? 'up' : 'down'"
        @click.native="showRemarks = !showRemarks"></cell>
      </div>
      <div class="slide" :class="showRemarks?'animate':''">
        <textarea v-model="remarks" type="text" placeholder="请填写200个字以内描述" maxlength="200"></textarea>
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
      fundAmountList:[], //从后台获取的资金规模类型列表
      fundTypeList:[], //从后台获取的资金类型列表
      assetTypeList:[], //从后台获取的资产类型列表
      projectName:'',  //项目名称
      fundType:'',    //资金类型
      fundAnmount:'', //资金规模
      /*unitAnmount: '万元',*/ //总放款规模 数字单位
      fundCostRegionFrom:'',
      fundCostRegionTo:'',
      findAssetType:[],
      showPdType: false,
      showLikeType: false,
      showFindAssetRequire: false,
      showRemarks: false,
      findAssetRequire:'',
      remarks:''
    }
  },
  watch: {
    // 如果 `fundType` 发生改变，这个函数就会运行
    fundAnmount: function (newQuestion) {
      console.log(this.fundAnmount)
    }
  },
  mounted(){
    this.fundAmountList=JSON.parse(localStorage.fundAmountList);
    this.assetTypeList = JSON.parse(localStorage.assetTypeList);
    this.fundTypeList = JSON.parse(localStorage.fundTypeList);
    if(localStorage.addFundParams != null){
      let a = JSON.parse(localStorage.addFundParams);
      this.projectName = a.projectName;
      this.fundType = a.fundType;
      this.fundAnmount = a.fundAnmount;
      this.fundCostRegionFrom = a.fundCostRegionFrom;
      this.fundCostRegionTo = a.fundCostRegionTo;
      this.findAssetType = a.findAssetType.split(',');
      this.findAssetRequire = a.findAssetRequire;
      this.remark = a.remarks
    }

    /* select颜色设置 */
    var unSelected = "#c2c2c2";
    var selected = "#333";
    $(function () {
        $("select").css("color", unSelected);
        $("option").css("color", selected);
        $("select").change(function () {
            var selItem = $(this).val();
            if (selItem == $(this).find('option:first').val()) {
                $(this).css("color", unSelected);
            } else {
                $(this).css("color", selected);
            }
        });
    })
  },
  methods:{
    nextWay(){
      if( this.projectName == '' ||
          this.fundType == '' ||
          this.fundAnmount == '' ||
          this.fundCostRegionFrom == '' ||
          this.fundCostRegionTo == '' ||
          this.findAssetType.length == 0 ){
        this.$vux.toast.text('内容请填写完整', 'middle');
      }else{
        let addFundParams = {
          projectName: this.projectName,
          fundType:  parseInt(this.fundType),
          fundAnmount: this.fundAnmount,
          /*fundAnmount: parseInt( this.unitAnmount =='亿元'? this.fundAnmount*10000 : this.fundAnmount),*/
          fundCostRegionFrom: parseInt(this.fundCostRegionFrom),
          fundCostRegionTo: parseInt(this.fundCostRegionTo),
          findAssetType:this.findAssetType.join(','),
          findAssetRequire: this.findAssetRequire,
          remark:this.remarks
        }
        localStorage.addFundParams = JSON.stringify(addFundParams);
        this.$router.push({ path: 'Release2', query: { AorF: 'fund' }})
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
textarea{
  width: 90%;
  height: 3rem;
}
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
.section{
  height: 4.215rem;
  line-height: 4.215rem;
  border-top: 0.06rem solid #E6E6E6;
}
.assets{
  width: 100%;
  min-height: 46rem;
  background: #EFEFF4;
  margin: 0 auto;
  padding-bottom:1.065rem;
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
  position: relative;
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
.range input{
  width:2.595rem !important;
  height:1.44rem !important;
  padding-right: 0.3rem;
  border: 0.06rem solid #333 !important;
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
.unit{
  margin-left: 0.5rem;
  color: #1A1A1A;
}
</style>
