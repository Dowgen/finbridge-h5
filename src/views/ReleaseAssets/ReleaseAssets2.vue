<template>
  <div class="assets">
    <myHead msg="发布资产" backgroundColor="#fff"></myHead>
    <div class="asset-process">
      <div class="step">
        <img v-show="text == ''" src="./img/step2.png" alt="">
        <img v-show="text !== ''" src="./img/step2_2.png" alt="">
      </div>
      <div class="step-title">
        <div>资产信息</div>
        <div class="active">公司信息</div>
        <div>联系方式</div>
      </div>
    </div>
    <div class="assets-des1">
      <div class="des-item">
        <div class="des-item-l">公司名称</div>
        <div class="des-item-r">
          <input type="text" v-model="text" placeholder="人众资金 第031号">
        </div>
      </div>
      <div class="des-item" style="border-bottom: 0.06rem solid #ECECEC;">
        <div class="des-item-l">运营时间</div>
        <div class="des-item-r">
          <input type="text" placeholder="请详细填写*年*个月">
        </div>
      </div>
      <div class="des-item">
        <div class="des-item-l">资金主要来源</div>
        <div class="des-item-r">
          <input type="text" placeholder="请选择产品类型">
          <span>^</span>
        </div>
      </div>
      <div class="pro-type"  style="border-bottom: 0.06rem solid #ECECEC;">
        <label><input name="Band" type="checkbox" value="银行" />银行 </label>
        <label><input name="PrivatePlacement" type="checkbox" value="私募" />私募 </label>
        <label><input name="NetworkLoan" type="checkbox" value="网络小贷" />网络小贷 </label>
        <label><input name="Fund" type="checkbox" value="基金" />基金 </label>
        <label><input name="p2p" type="checkbox" value="p2p" />p2p </label>
        <label><input name="InforManage" type="checkbox" value="资管" />资管 </label>
        <label><input name="others" type="checkbox" value="其它" />其它 </label>
      </div>
      <div class="des-item">
        <div class="des-item-l">公司地址</div>
        <div class="des-item-r">
          <input type="text" placeholder="省份，城市">
          <span>^</span>
        </div>
      </div>
      <div class="des-item">
        <div class="des-item-l"></div>
        <div class="des-item-r">
          <input type="text" placeholder="请填写具体街道门牌号">
        </div>
      </div>
      <div class="des-item">
        <div class="des-item-l">公司背景</div>
        <div class="des-item-r">
          <input type="text" maxlength="24" placeholder="请填写24个字以内描述">
        </div>
      </div>
    </div>

    <div class="next" @click="nextWay">下一步</div>

    
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'
import myHead from '@/components/Header'


export default {
  name: 'ReleaseAssets',
  components: {
    myHead,

  },
  data () {
    return {
      text:''
    }
  },
  methods:{
    nextWay(){
      this.$router.push('/ReleaseAssets3')
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

</style>
