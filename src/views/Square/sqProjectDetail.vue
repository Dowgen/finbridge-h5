<template>
  <div class="project">
    <div v-if="$route.query.AorF==1">
    <div class="project-head">
      <div class="head">
        <span @click="$router.go(-1)" class="back" v-show="$route.query.fromShare!='y'"><img style=" width:0.72rem;height: 1.22rem;display: inline-block;" src="./img/back.png" alt=""></span>
        <p>项目详情</p>
      </div>
      <div class="con">
        <p class="p1">{{info.productName}}</p>
        <p class="p2">{{info.fundCostRegionFrom}}-{{info.fundCostRegionTo}}</p>
        <p class="p3">资金成本区间(%）</p>
        <div class="project-des">
          <div class="item">
            <p>{{info.perAmount}}元</p>
            <p>单笔额度</p>
          </div>
          <div class="item">
            <p>{{info.perPeriod}}</p>
            <p>单笔期限</p>
          </div>
          <div class="item">
            <p>
              {{ String(parseInt(info.dailyPayAmount)).length >= 5 ? info.dailyPayAmount/10000 : info.dailyPayAmount}} 
              {{ String(parseInt(info.dailyPayAmount)).length >= 5 ? '亿元' : '万元'}}
            </p>
            <p style="border: none;">日放款量</p>
          </div>
        </div>
      </div>
    </div>
    <div class="project-main">
      <div class="main-item">
        <div>
          <p>项目名称</p>
          <p>{{info.projectName}}</p>
        </div>
        <div>
          <p>项目类型</p>
          <p v-if="fundTypeList">{{getLabel(info.productType,'asset')}}</p><!---->
        </div>
        <div>
          <p>总放款量</p>
          <p>
           {{ String(parseInt(info.totalPayAmount)).length >= 5 ? info.totalPayAmount/10000 : info.totalPayAmount}} 
              {{ String(parseInt(info.totalPayAmount)).length >= 5 ? '亿元' : '万元'}}
          </p>
        </div>
        <div>
          <p>坏账率</p>
          <p>{{info.debtRate}}%</p>
        </div>
        <div>
          <p>产品名称</p>
          <p>{{info.projectName}}</p>
        </div>
        <div>
          <p>产品特色</p>
          <p>{{info.productFeature}}</p>
        </div>
      </div>
    </div>
    <div class="project-main project-footer">
      <div class="main-item">
        <div>
          <p>公司名称</p>
          <p>{{info.companyName || '无'}}</p>
        </div>
        <div>
          <p>运营时间</p>
          <p>{{info.operationTime}}个月</p>
        </div>
        <div>
          <p>资金来源</p>
          <p>{{getLabel(info.fundOrigin,'assest')}}</p>
        </div>
        <div>
          <p>公司地址</p>
          <p>{{info.companyAddress}}</p>
        </div>
        <div>
          <p>公司背景</p>
          <p>{{info.companyBackground || '无'}}</p>
        </div>
      </div>
    </div>
    <div class="footer-btn" v-show="key == 1">
      <div v-show="$route.query.fromShare == 'y'" class="btn-left" @click="jumpTo" style="color:#4083ff;">我要发布</div>
      <div class="btn-right" @click="contactCard">
        立即合作
      </div>
    </div>
    <div class="footer-btn" v-show="key == 2">查看联系方式</div>
    </div>

    <div v-if="$route.query.AorF==2">
    <div class="project-head">
      <div class="head">
        <span @click="$router.go(-1)" class="back" v-show="$route.query.fromShare!='y'"><img style=" width:0.72rem;height: 1.22rem;display: inline-block;" src="./img/back.png" alt=""></span>
        <p>项目详情</p>
      </div>
      <div class="con">
        <p class="p1">{{info.projectName}}</p>
        <p class="p2">{{info.fundCostRegionFrom}}-{{info.fundCostRegionTo}}</p>
        <p class="p3">资金成本区间(%）</p>
        <div class="project-des">
          <div class="item">
            <p v-if="fundTypeList">资金类型: {{getLabel(info.fundType,'fund')}}</p>
          </div>
          <div class="item">
            <!-- <p>资金规模: 
                {{ String(parseInt(info.fundAnmount)).length >= 5 ? info.fundAnmount/10000 : info.fundAnmount}} 
                {{ String(parseInt(info.fundAnmount)).length >= 5 ? '亿元' : '万元'}}
            </p> -->
            <p>资金规模:{{getFundAmountType(info.fundAnmount)}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="project-main">
      <div class="main-item">
        <div>
          <p>公司名称</p>
          <p>{{info.companyName}}</p>
        </div>
        <div>
          <p>青睐资产</p>
          <p v-if="fundTypeList">{{getLabel(info.findAssetType,'asset')}}</p>
        </div>
        <div>
          <p>资金需求</p>
          <p>{{info.findAssetRequire}}</p>
        </div>
        <div>
          <p>备注</p>
          <p>{{info.remark}}</p>
        </div>
      </div>
    </div>
    <div class="footer-btn" v-show="key == 1">
      <div v-show="$route.query.fromShare == 'y'" class="btn-left" @click="jumpTo" style="color:#4083ff;">我要发布</div>
      <div class="btn-right" @click="contactCard">
        立即合作
      </div>
    </div>
    <div class="footer-btn" v-show="key == 2">查看联系方式</div>
    </div>

    <div class="alert">
      <div class="contactCard">
        <div class="name">
          <img src="./img/ic_card_person.png" alt="">
          {{info.contactPerson}}
        </div>
        <div class="contactWays">
          <p>
            <img src="./img/ic_wechat.png" alt="">
            微信号
          </p>
          <p>{{info.contactWechat}}</p>
        </div>
        <!-- <div class="contactWays">
          <p>
            <img src="./img/ic_card_QQ.png" alt="">
            QQ号
          </p>
          <p>{{info.contactQQ}}</p>
        </div> -->
        <div class="contactWays">
          <p>
            <img src="./img/ic_phone.png" alt="">
            手机号码
          </p>
          <p @click="callphone(info.contactPhone)" style="color:#4083ff">{{info.contactPhone}}</p>
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
      info:{},
      hide:1,
      fundTypeList:[],
      assetTypeList:[],
      wechatShareReturnLink:''
    }
  },
  created(){
    //微信分享的bug
    if(this.$route.query.fromShare=='y'){

    }
  },
  mounted(){
    if(localStorage.userId!= undefined) this.hide = 0
    this.getFundList();
    this.getDetail();
    /*this.getReturnLink();*/
  },
  methods:{
    jumpTo(){
      window.location.href = Lib.M.webDomain;
    },
    shareSuccess(){
      this.$vux.toast.show({
        showPositionValue: false,
        text: '分享成功',
        type: 'success',
        position: 'middle'
      })
    },
    shareOrNot(){
      var self = this;
      Lib.M.ajax({
        url : '/user/findUserShareMap',
        data: {
          userId:localStorage.userId,
          projectId: self.$route.query.proId
        },
        success:function(res){
          if(res.code==200){
            if(res.data=='yes')  
              $('.alert').css('display','block')
            else   
              self.$vux.alert.show('分享朋友圈后，查看联系方式', 'middle');
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },
    shareProject(){
      var self = this;
      Lib.M.ajax({
        url : '/user/addUserShareMap',
        data: {
          userId:localStorage.userId,
          projectId: self.$route.query.proId
        },
        success:function(res){
          if(res.code==200){
            self.shareSuccess();
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },
    /*getReturnLink(){
      Lib.M.ajax({
        url : '/config/getConfigByParameter',
        data: {
          key: 'wechatShareReturnLink'
        },
        success:function(res){
          if(res.code==200){
            sessionStorage.wechatShareReturnLink = res.data[0].value;
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },*/
    getFundAmountType(key){
      return Lib.M.getFundAmountType(key);
    },
    contactCard(){
      var self = this;
      if(localStorage.userId != undefined){
        self.shareOrNot();
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
    /* 获取资金资产类型列表 */
    getFundList(){
      var self = this;
      Lib.M.ajax({
        url : '/info/findAssetAndFundConfig',
        success:function(res){
          if(res.code==200){
            self.fundTypeList=res.data.fund;
            self.assetTypeList = res.data.asset
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },
    //资金资产类型数字转化为文字
    getLabel(key,type){
      var f;
      if(type=='fund')
        f = this.fundTypeList;
      else
        f = this.assetTypeList;
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
      if(localStorage.isAndroid == 'true'){
        var _url = window.location.origin + this.$route.fullPath;
      }else{
        var _url = window.location.href.split('#')[0];
      }
      var self = this;
      Lib.M.ajax({
        url : '/wechat/wxSig',
        data:{url: encodeURIComponent(_url)},
        success:function(res){
          if(res.code==200){
            let wxSig = res.data;
            let params = '&fromShare=y';
            if(self.$route.query.fromShare=='y') params = '';
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
              link:  location.href + params, 
              imgUrl: Lib.M.webDomain+'/logo.png', 
              success: function () { 
                self.shareProject();
              },
              cancel: function () { 
                  // 用户取消分享后执行的回调函数
              }
            });

            wx.onMenuShareAppMessage({
              title: self.info.projectName, 
              desc: '关注51资金资产公众号，获取更多信息', 
              link:  location.href + params,
              imgUrl: Lib.M.webDomain+'/logo.png', 
              /*type: '', // 分享类型,music、video或link，不填默认为link*/
              /*dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空*/
              success: function () { 
                self.shareProject();
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
      var url = '',type2='', data={};
      if(this.$route.query.AorF == 1){
        type2='asset';
        url = '/asset/findAssetById';
        data = {
          assetId: this.$route.query.proId,
          hide: self.hide
        }
      }else if(this.$route.query.AorF == 2){
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
            self.info = res.data[type2];
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
.project-head{
  width: 100%;
  height: 14.69rem;
  background: url("./img/bg_details.png") no-repeat center;
  background-size: 100% 100%;
  overflow: hidden;
}
.head{
  width: 100%;
  height: 1.22rem;
  color: #fff;
  position: relative;
  margin-top: 1.3rem;
}
.head p{
  font-size:1.065rem;
  text-align: center;
}
.head span{
  position: absolute;
  left: 1.655rem;
}
.con p{
  font-family:PingFangSC-Regular;
  color: #fff;
}
.con .p1{
  font-size: 0.94rem;
  margin:1rem 0 1.6rem 0;
}
.con .p2{
  font-size: 1.44rem;
  margin-bottom: 0.6rem;
}
.con .p3{
  font-size: 0.815rem;
}
.project-des{
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
}
.project-des .item{
  flex-grow: 1;
  width: 0;
}
.project-des .item p:nth-of-type(1){
  font-size: 0.875rem;
  border-right: 1px solid #fff;
}
.project-des .item p:nth-of-type(2){
  font-size: 0.815rem;
}
.project-main{
  width: 100%;
  margin: 0 auto;
  background: #fff;
}
.project-main .main-item{
  font-size: 0.875rem;
  text-align: left;
  align-self:baseline;
  padding:0.75rem 1rem;
}
.project-main .main-item>div{
  display: flex;
}
.project-main .main-item p{
  margin:0.75rem 0;
}
.project-main .main-item>div>p:nth-of-type(1){
  color: #BEBEBE;
  flex:1;
}
.project-main .main-item>div>p:nth-of-type(2){
  color: #666666;
  flex:3;
  margin-left: 2rem;
}
.project-footer{
  border-top: solid 0.625rem #d7d7d7;
}
.footer-btn{
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 640px;
  height: 3.065rem;
  color: #fff;
  text-align: center;
  line-height: 3.065rem;
  font-size: 1.065rem;
}
.btn-right{
  flex:30;
  background: #4083FF ;
  font-size: 1.125rem;
  color: #fff;
}
.btn-left{
  background: url('./img/button_bg.png');
  background-size: 100% 100%;
  flex:16;
  font-size: 1.125rem;
  color: #B5B5B5;
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
