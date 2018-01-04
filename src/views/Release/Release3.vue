<template>
  <div class="assets">
    <myHead :msg="'发布'+title" backgroundColor="#fff"></myHead>
    <div class="asset-process">
      <div class="step">
        <img v-show="contactPerson == ''" src="./img/step3.png" alt="">
        <img v-show="contactPerson !== ''" src="./img/step3-3.png" alt="">
      </div>
      <div class="step-title">
        <div>{{title}}信息</div>
        <div>公司信息</div>
        <div class="active">联系方式</div>
      </div>
    </div>
    <div class="assets-des1">
      <div class="des-item">
        <div class="des-item-l">联系人</div>
        <div class="des-item-r">
          <input v-model="contactPerson" type="text" placeholder="请填写真实名字">
        </div>
      </div>
      <div class="des-item"  style="border-bottom: 0.06rem solid #ECECEC;">
        <div class="des-item-l"></div>
        <div class="des-item-r gender-choose">
          <p :class="gender=='male'?'gender-choose-one':''" @click="gender='male'">先生</p>
          <p :class="gender=='female'?'gender-choose-one':''" @click="gender='female'">女士</p>
        </div>
      </div>
      <div class="des-item">
        <div class="des-item-l">联系方式</div>
        <div class="des-item-r"></div>
      </div>

      <div class="des-item contactWay">
        <div class="des-item-l">
          <!-- <input type="checkbox"> -->手机号码
        </div>
        <div class="des-item-r">
          <input v-model="contactPhone" type="number" maxlength="11" placeholder="请填写您的手机号码">
        </div>
      </div>
      <div class="des-item contactWay">
        <div class="des-item-l">
          <!-- <input type="checkbox"> -->微信号(选填)
        </div>
        <div class="des-item-r">
          <input v-model="contactWechat" type="text" maxlength="11" placeholder="请填写您的微信号">
        </div>
      </div>
      <!-- <div class="des-item contactWay"  style="border-bottom: 0.06rem solid #ECECEC;">
        <div class="des-item-l">
          <input type="checkbox">QQ号
        </div>
        <div class="des-item-r">
          <input v-model="contactQQ" type="number" maxlength="11" placeholder="请填写您的QQ号">
        </div>
      </div> -->

    </div>

    <div class="next" @click="nextWay">确定</div>

    
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'
import myHead from '@/components/myHead'


export default {
  name: 'ReleaseAssets',
  components: {
    myHead,

  },
  data () {
    return {
      title:'',
      gender:'male',
      contactPerson:'',
      contactPhone:'',
      /*contactQQ:'',*/
      contactWechat:''
    }
  },
  mounted(){
    this.AorF = this.$route.query.AorF;
    if(this.AorF == 'fund') this.title='资金'
    else this.title = '资产'
  },
  methods:{
    nextWay(){
      if( this.contactPerson == '' ||
          this.contactPhone == '' 
          /*this.contactQQ == '' ||*/
          /*this.contactWechat == ''*/){
        this.$vux.toast.text('请填写完整', 'middle');
      }else{
        if(Lib.M.isPhoneWrong(this.contactPhone)){
          this.$vux.toast.text('手机号码不合法！','middle');
        }else{
          if(localStorage.userId != undefined && 
             localStorage.userId != 'undefined'){
            this.addFund();
          }else{
            this.$vux.toast.text('登录已失效，请重新登录', 'middle');
            this.$router.push('Login')
          }
        }
        /*this.$router.push('/')*/
      }
    },
    /* 发布资金 */
    addFund(){
      let info,params,url;
      info = {
        contactPerson: this.contactPerson,
        contactPhone: this.contactPhone,
        contactQQ: '',
        contactWechat: this.contactWechat,
        belongTo: localStorage.userId
      };
      if(this.AorF == 'fund'){
        params = 
          Object.assign(info, JSON.parse(localStorage.addFundParams));
        url = '/fund/submitFund';
      }else{
        params = 
          Object.assign(info, JSON.parse(localStorage.addAssetParams));
        url = '/asset/submitAsset';
      }
      var self = this;
      Lib.M.ajax({
        url : url,
        data: params,
        success:function(res){
          if(res.code==200){
            self.$vux.toast.text(self.title+'提交成功！', 'middle')
            localStorage.removeItem('addAssetParams');
            localStorage.removeItem('addFundParams');
            self.$router.push('/MyProject')
          }else{
            self.$vux.toast.text(res.error, 'middle')
          }
        }
      });
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
  width: 90%;
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
  left: 0;
  bottom: 0;
}
.gender-choose p{
  display: inline-block;
  width: 3.75rem;
  height: 1.565rem;
  line-height: 1.565rem;
  border: 0.06rem solid #C3CFD9;
  border-radius: 0.19rem;
  cursor: pointer;
  margin-left: 0.5rem;
  text-align: center;
  color: #666;
  font-size: 0.875rem;
}
.gender-choose-one{
  background-color: #f5f9fc !important;
  border-color: #abc8ff !important;
  color: #4083ff !important;

}
.pro-type{
  height: 4rem;
}
.contactWay:not(:last-child){
  border-bottom: 0.06rem solid #ECECEC;
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
