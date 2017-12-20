<template>
  <div class="assets">
    <myHead msg="发布资产" backgroundColor="#fff"></myHead>
    <div class="asset-process">
      <div class="step">
        <img v-show="text == ''" src="./img/step3.png" alt="">
        <img v-show="text !== ''" src="./img/step3-3.png" alt="">
      </div>
      <div class="step-title">
        <div>资产信息</div>
        <div>公司信息</div>
        <div class="active">联系方式</div>
      </div>
    </div>
    <div class="assets-des1">
      <div class="des-item">
        <div class="des-item-l">联系人</div>
        <div class="des-item-r">
          <input v-model="text" type="text" placeholder="请填写真实名字">
        </div>
      </div>
      <div class="des-item"  style="border-bottom: 0.06rem solid #ECECEC;">
        <div class="des-item-l"></div>
        <div class="des-item-r gender-choose">
          <input type="text" placeholder="先生">
          <input type="text" placeholder="女士">
        </div>
      </div>
      <div class="des-item">
        <div class="des-item-l">联系方式(勾选则必填)</div>
        <div class="des-item-r"></div>
      </div>

      <div class="des-item contactWay"  style="border-bottom: 0.06rem solid #ECECEC;">
        <div class="des-item-l">
          <input type="checkbox">手机号码
        </div>
        <div class="des-item-r">
          <input type="number" maxlength="11" placeholder="请填写您的手机号码">
        </div>
      </div>
      <div class="des-item contactWay">
        <div class="des-item-l">
          <input type="checkbox">微信号
        </div>
        <div class="des-item-r">
          <input type="number" maxlength="11" placeholder="请填写您的微信号">
        </div>
      </div>
      <div class="des-item contactWay"  style="border-bottom: 0.06rem solid #ECECEC;">
        <div class="des-item-l">
          <input type="checkbox">QQ号
        </div>
        <div class="des-item-r">
          <input type="number" maxlength="11" placeholder="请填写您的QQ号">
        </div>
      </div>

    </div>

    <div class="next" @click="nextWay">确定</div>

    
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
      this.$router.push('/')
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
.asset-process div.active{
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
.des-item .des-item-r input{
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
.gender-choose input[type="text"]{
  display: inline-block;
  width: 3.75rem;
  height: 1.565rem;
  border: 0.06rem solid #C3CFD9;
  border-radius: 0.19rem;
  cursor: pointer;
  margin-left: 0.5rem;
  text-align: center;
  outline: #448ccb;
}

.pro-type{
  height: 4rem;
}
.contactWay input[type="checkbox"] {
  display: inline-block;
  width: 1.125rem;
  height: 1.125rem;
  border: 0.06rem solid #E6E6E6;
  border-radius: 0.19rem;
  cursor: pointer;
  margin-right: 0.5rem;
  line-height: 1.125rem;
}
.contactWay input:checked{
  background: url("./img/selected_more.png") no-repeat center;
  background-size: 100% 100%;
}



</style>
