<template>
  <div class="assets">
    <myHead :msg="'发布'+title" backgroundColor="#fff"></myHead>
    <div class="asset-process">
      <div class="step">
        <img v-show="companyName == ''" src="./img/step2.png" alt="">
        <img v-show="companyName !== ''" src="./img/step2_2.png" alt="">
      </div>
      <div class="step-title">
        <div>{{title}}信息</div>
        <div class="active">公司信息</div>
        <div>联系方式</div>
      </div>
    </div>
    <div class="assets-des1" v-if="AorF=='fund'">
      <div class="des-item">
        <div class="des-item-l">公司名称</div>
        <div class="des-item-r">
          <input type="text" v-model="companyName" placeholder="请输入公司名称">
        </div>
      </div>
    </div>
    <div class="assets-des1" v-if="AorF=='assets'">
      <div class="des-item">
        <div class="des-item-l">公司名称</div>
        <div class="des-item-r">
          <input type="text" v-model="companyName" placeholder="请输入公司名称">
        </div>
      </div>
      <div class="des-item">
        <div class="des-item-l">是否公开公司名称</div>
        <div class="des-item-r">
          <label>
            <input v-model="isPublicCoName" type="radio" value="1"/>是
            <input v-model="isPublicCoName" type="radio" value="0"/>否
          </label>
        </div>
      </div>
      <div class="des-item" style="border-bottom: 0.06rem solid #ECECEC;">
        <div class="des-item-l">运营时间(月)</div>
        <div class="des-item-r">
          <input v-model="operationTime" onkeyup="clearNoNum(this)" type="number" placeholder="请输入数字"><span class="unit">个月</span>
        </div>
      </div>
      <div class="des-item" style="position:relative">
        <div class="des-item-l">资金主要来源</div>
        <div class="des-item-r">
          <input type="text" placeholder="请选择资金来源类型">
          <span :class="fundType?'upArrow':'downArrow'"></span>
        </div>
        <cell
        class="myCell"
        title="Animated"
        is-link
        :border-intent="false"
        :arrow-direction="fundType ? 'up' : 'down'"
        @click.native="fundType = !fundType"></cell>
      </div>
      <div class="pro-type slide" :class="fundType?'animate':''">
        <label v-for="item in fundSourceList">
          <input v-model="fundOrigin" type="checkbox" :value="item.key" />{{item.label}} 
        </label>
      </div>
      <div class="des-item">
        <div class="des-item-l">公司地址</div>
        <div class="des-item-r" style="position:relative">
          <input class="inputer" placeholder="省份，城市" v-model="cityVal" readonly="readonly"/>
          <div class="sel">
            <popup-picker :data="cityList" :columns="3" v-model="cityVal" ref="cityPicker" ></popup-picker>
          </div>
        </div>
      </div>
      <!-- <div class="des-item">
        <div class="des-item-l"></div>
        <div class="des-item-r">
          <input v-model="AddressDetail" type="text" placeholder="请填写具体街道门牌号">
        </div>
      </div> -->
     <!-- <div class="des-item">
        <div class="des-item-l">公司背景(选填)</div>
        <div class="des-item-r">
          <input v-model="companyBackground" type="text" maxlength="24" placeholder="请填写24个字以内描述">
        </div>
      </div>-->
      <div class="des-item" style="height: 4.215rem;line-height: 4.215rem;">
        <div class="des-item-l" style="height: 2.6rem;">公司背景(选填)</div>
        <div class="des-item-r" style="margin-top: 2rem;height: 1.615rem;line-height: 1.615rem;">
          <input :value="companyBackground==''?'':companyBackground.substr(0,10)+'...'" readonly="readonly" placeholder="下拉填写" />
          <span :class="showCoBackGround?'upArrow':'downArrow'"></span>
          <cell
        class="myCell"
        title="Animated"
        is-link
        :border-intent="false"
        :arrow-direction="showCoBackGround ? 'up' : 'down'"
        @click.native="showCoBackGround = !showCoBackGround"></cell>
        </div>
      </div>
      <div class="slide" :class="showCoBackGround?'animate':''">
        <textarea v-model="companyBackground" type="text" placeholder="请填写200个字以内描述" maxlength="200"></textarea>
      </div>
    </div>

    <div class="next" @click="nextWay">下一步</div>

    
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'
import myHead from '@/components/myHead'
import { Cell,PopupPicker } from 'vux'

export default {
  name: 'ReleaseAssets',
  components: {
    myHead,Cell,PopupPicker
  },
  watch: {
    // 如果 `fundType` 发生改变，这个函数就会运行
    isPublicCoName: function (newQuestion) {
      console.log(this.isPublicCoName)
    }
  },
  data () {
    return {
      showCoBackGround:false,
      title:'',
      AorF:'',
      fundType: false,
      cityVal: [],
      cityList: Lib.M.cityList,
      fundSourceList:[],
      companyName :'',  // 公司名
      isPublicCoName:1, //是否公开公司名称 0否 1是
      operationTime :'',  // 运营时间(月)
      AddressDetail  :'',  // 公司地址
      companyBackground :'',  // 公司（团队股东）背景（选填）：
      fundOrigin  :[]   // 目前资金来源(多选)
    }
  },
  mounted(){
    this.getFundList();
    this.AorF = this.$route.query.AorF;
    if(this.AorF == 'fund') this.title='资金'
    else this.title = '资产'
  },
  methods:{
    /* 获取资金资产类型列表2 */
    getFundList(){
      var self = this;
      Lib.M.ajax({
        /*url : '/info/findAssetAndFundConfig',*/
        url : '/dict/getDict',
        data:{
          dictName:'fundSource'
        },
        success:function(res){
          if(res.code==200){
            self.fundSourceList= res.data;
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },
    nextWay(){
      if(this.AorF=='fund'){
        if(this.companyName ==''){
          this.$vux.toast.text('请填写公司名称', 'middle');
        }else{
          let a = JSON.parse(localStorage.addFundParams);
          a.companyName = this.companyName;
          localStorage.addFundParams = JSON.stringify(a);
          this.$router.push({ path: 'Release3', query: { AorF: this.AorF }})
        }
      }else{
        if( this.companyName =='' ||
          this.isPublicCoName =='' ||
          this.operationTime =='' ||
          this.cityVal.length == 0 ||
          this.companyAddress  =='' ||
          this.fundOrigin.length == 0){
          this.$vux.toast.text('请填写完整', 'middle');
        }else{
          let b = {
            companyName: this.companyName,
            isPublicCoName: parseInt(this.isPublicCoName),
            operationTime: parseInt(this.operationTime),
            companyAddress: this.cityVal.join(',')/*+ ' ' + this.AddressDetail*/,
            companyBackground: this.companyBackground,
            fundOrigin: this.fundOrigin.join(',')
          };
          localStorage.addAssetParams = 
            JSON.stringify(Object.assign(JSON.parse(localStorage.addAssetParams), b));
          this.$router.push({ path: 'Release3', query: { AorF: this.AorF }})
        }
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
  position: relative;
  display: flex;
  flex-direction: row;
  padding:0 2rem 0 1.2rem;
  height: 3.125rem;
  line-height: 3.125rem;
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
.pro-type input[type="checkbox"] {
  display: inline-block;
  width: 1.125rem;
  height: 1.125rem;
  border: 0.06rem solid #E6E6E6;
  border-radius: 0.19rem;
  cursor: pointer;
  margin-right: 0.2rem;
  outline: none;
}
.pro-type input:checked{
  background: url("./img/selected_more.png") no-repeat center;
  background-size: 100% 100%;
}
.pro-type label {
  display: inline-block;
  height: 3rem;
  line-height: 3rem;
  margin-right: 0.5rem;
}

.des-item-r input[type="radio"] {
  display: inline-block;
  width: 1.19rem;
  height: 1.19rem;
  border: 0.06rem solid #E6E6E6;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 0.2rem;
  outline: none;
}
.des-item-r input:checked{
  background: url("./img/selected_one.png") no-repeat center;
  background-size: 100% 100%;
}
.des-item-r label {
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
.inputer{
  outline: none;
  border: none;
  font-size: 0.94rem;
  height: 2.75rem;
  text-align: right;
  margin-right: 1rem;
}
.sel{
  background: url('./img/choose_down.png') no-repeat;
  background-size: 0.69rem 0.375rem;
  background-position: 100% center; 
  width: 100%;
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  overflow: hidden;
}
.unit{
  margin-left: 0.5rem;
  color: #1A1A1A;
}
</style>
