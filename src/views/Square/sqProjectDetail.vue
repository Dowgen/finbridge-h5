<template>
  <div class="project">
    <div v-if="$route.query.AorF==1">
    <div class="project-head">
      <div class="head">
        <span @click="$router.go(-1)" class="back"><img style=" width:0.72rem;height: 1.22rem;display: inline-block;" src="./img/back.png" alt=""></span>
        <p>项目详情</p>
      </div>
      <div class="con">
        <p class="p1">{{asDetail.productName}}</p>
        <p class="p2">{{asDetail.fundCostRegionFrom}}-{{asDetail.fundCostRegionTo}}</p>
        <p class="p3">资金成本区间(%）</p>
        <div class="project-des">
          <div class="item">
            <p>{{asDetail.perAmount}}元</p>
            <p>件均额度</p>
          </div>
          <div class="item">
            <p>{{asDetail.perPeriod}}天</p>
            <p>单笔期限</p>
          </div>
          <div class="item">
            <p>{{asDetail.dailyPayAmount}}</p>
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
        <p>{{asDetail.projectName}}</p>
        <p>{{getLabel(asDetail.productType,'asset')}}</p><!---->
        <p>{{asDetail.totalPayAmount}}</p>
        <p>{{asDetail.debtRate}}</p>
        <p>{{asDetail.projectName}}</p>
        <p>{{asDetail.productFeature}}</p>
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
        <p>{{asDetail.companyName||'无'}}</p>
        <p>{{asDetail.operationTime}}</p>
        <p>{{getLabel(asDetail.fundOrigin,'asset')}}</p>
        <p>{{asDetail.companyAddress}}</p>
        <p>{{asDetail.companyBackground ||'无'}}</p>
      </div>
    </div>
    <div class="footer-btn" v-show="key == 1" @click="contactCard">立即合作</div>
    <div class="footer-btn" v-show="key == 2">查看联系方式</div>

   <div class="alert">
     <div class="contactCard">
       <div class="name">
          <img src="./img/ic_card_person.png" alt="">
          {{asDetail.contactPerson}}先生
        </div>
       <div class="contactWays">
         <p>
           <img src="./img/ic_wechat.png" alt="">
           微信号
         </p>
         <p>{{asDetail.contactWechat}}</p>
       </div>
       <div class="contactWays">
         <p>
           <img src="./img/ic_card_QQ.png" alt="">
           QQ号
         </p>
         <p>{{asDetail.contactQQ}}</p>
       </div>
       <div class="contactWays">
         <p>
           <img src="./img/ic_phone.png" alt="">
           手机号码
         </p>
         <p @click="callphone(asDetail.contactPhone)">{{asDetail.contactPhone}}</p>
       </div>
       <div class="foot-close" @click="closeContactCard">
         <img src="./img/ic_card_dropout.png" alt="">
       </div>
     </div>
    </div>
    </div>

    <div v-if="$route.query.AorF==2">
    <div class="project-head">
      <div class="head">
        <span @click="$router.go(-1)" class="back"><img style=" width:0.72rem;height: 1.22rem;display: inline-block;" src="./img/back.png" alt=""></span>
        <p>项目详情</p>
      </div>
      <div class="con">
        <p class="p1">{{fuDetail.projectName}}</p>
        <p class="p2">{{fuDetail.fundCostRegionFrom}}-{{fuDetail.fundCostRegionTo}}</p>
        <p class="p3">资金成本区间(%）</p>
        <div class="project-des">
          <div class="item">
            <p>资金类型: {{getLabel(fuDetail.fundType,'fund')}}</p>
          </div>
          <div class="item">
            <p>资金规模: {{fuDetail.fundAnmount}}</p>
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
        <p>{{fuDetail.companyName}}</p>
        <p>{{getLabel(fuDetail.findAssetType,'asset')}}</p>
      </div>
    </div>
    <div class="footer-btn" v-show="key == 1" @click="contactCard">立即合作</div>
    <div class="footer-btn" v-show="key == 2">查看联系方式</div>

    <div class="alert">
      <div class="contactCard">
        <div class="name">
          <img src="./img/ic_card_person.png" alt="">
          {{fuDetail.contactPerson}}先生
        </div>
        <div class="contactWays">
          <p>
            <img src="./img/ic_wechat.png" alt="">
            微信号
          </p>
          <p>{{fuDetail.contactWechat}}</p>
        </div>
        <div class="contactWays">
          <p>
            <img src="./img/ic_card_QQ.png" alt="">
            QQ号
          </p>
          <p>{{fuDetail.contactQQ}}</p>
        </div>
        <div class="contactWays">
          <p>
            <img src="./img/ic_phone.png" alt="">
            手机号码
          </p>
          <p @click="callphone(fuDetail.contactPhone)">{{fuDetail.contactPhone}}</p>
        </div>
        <div class="foot-close" @click="closeContactCard">
          <img src="./img/ic_card_dropout.png" alt="">
        </div>
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
      fuDetail:{},
      asDetail:{},
      hide:1,
    }
  },
  mounted(){
    if(localStorage.userId!= undefined) this.hide = 0
    this.getDetail();
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
      var self = this;
      if(localStorage.userId != undefined){
        $('.alert').css('display','block')
      }else{
        this.$vux.confirm.show({
        content: '查看联系方式需要登录,是否确认登录?',
          onConfirm () {
            self.$router.push('Login')
          }
        })
      }
    },
    closeContactCard(){
      $('.alert').css('display','none')
    },
    //资金资产类型数字转化为文字
    getLabel(key,type){
      var f;
      if(type=='fund')
        f = JSON.parse(localStorage.fundTypeList);
      else
        f = JSON.parse(localStorage.assetTypeList);
      console.log(typeof key)
      if(typeof key == 'string'){
        let array = [];
        let keyArray = key.split(',');
        for(let a in keyArray){
          for(let i in f){
            if(f[i].key == keyArray[a]) array.push(f[i].label)
          }
        }
        return array.toString();
      }else{
        for(let i in f){
          if(f[i].key == key) return f[i].label
        }
      }
    },
    //获取微信签名
    getWxSig(){
      var self = this;
      Lib.M.ajax({
        url : '/wechat/wxSig',
        data:{url: location.href.split('#')[0]},
        success:function(res){
          if(res.code==200){
            let wxSig = res.data;
            wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: wxSig.appid, // 必填，公众号的唯一标识
              timestamp: wxSig.timestamp, // 必填，生成签名的时间戳
              nonceStr:  wxSig.noncestr, // 必填，生成签名的随机串
              signature: wxSig.signature,   // 必填，签名，见附录1
              jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            //微信分享设置
            wx.onMenuShareTimeline({
              title: self.info.projectName, 
              /*link: 'http://finbridge.cn',*/
              link:  location.href, 
              imgUrl: 'http://finbridge.cn/logo.png', 
              success: function () { 
                self.share();
              },
              cancel: function () { 
                  // 用户取消分享后执行的回调函数
              }
            });

            wx.onMenuShareAppMessage({
              title: self.info.projectName, 
              desc: 'finbridge合作产品', 
              link:  location.href,
              /*link: 'http://finbridge.cn',*/
              imgUrl: 'http://finbridge.cn/logo.png', 
              /*type: '', // 分享类型,music、video或link，不填默认为link*/
              /*dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空*/
              success: function () { 
                self.share();
              },
              cancel: function () { 
                  // 用户取消分享后执行的回调函数
              }
            });
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },
    //根据id查询详情
    getDetail(){
      var self = this;
      var url = '', type='',type2='', data={};
      if(this.$route.query.AorF == 1){
        type = 'asDetail';
        type2='asset';
        url = '/asset/findAssetById';
        data = {
          assetId: this.$route.query.proId,
          hide: self.hide
        }
      }else if(this.$route.query.AorF == 2){
        type = 'fuDetail';
        type2='fund';
        url = '/fund/findFundById';
        data = {
          fundId: this.$route.query.proId,
          hide: self.hide
        }
      } 
      Lib.M.ajax({
        url : url,
        data: data,
        success:function(res){
          if(res.code==200){
            self[type] = res.data[type2];
            self.getWxSig();
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },
    callphone(phone){    
        window.location.href = "tel:"+phone;
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
  box-sizing:border-box;
  width: 100%;
  min-height: 40rem;
  background: #fff;
  padding-bottom: 3.065rem;
}
.project .project-head{
  width: 100%;
  height: 14.69rem;
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
  border-top: solid 0.625rem #d7d7d7;
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
  position: fixed;
  bottom: 0;
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
  position: fixed;
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
