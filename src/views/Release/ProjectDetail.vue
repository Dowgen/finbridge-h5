<template>
  <div class="project" v-if="$route.query.AorF==1">
    <div class="project-head">
      <div class="head">
        <span @click="$router.go(-1)" class="back"><img style=" width:0.72rem;height: 1.22rem;display: inline-block;" src="./img/back.png" alt=""></span>
        <p>项目详情</p>
      </div>
      <div class="con">
        <p class="p1">{{info.projectName}}</p>
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
          <p>{{getLabel(info.productType,'asset')}}</p><!---->
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
          <p>产品概况</p>
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
    <div class="project-main project-footer">
      <div class="main-item">
        <div>
          <p>手机号码</p>
          <p>{{info.contactPhone}}</p>
        </div>
        <div>
          <p>微信号</p>
          <p>{{info.contactWechat}}</p>
        </div>
        <!-- <p>QQ号</p> -->
        <!-- <p>{{info.contactQQ}}</p> -->
      </div>
    </div>
    <div class="footer-btn" style="display: flex;flex-direction: row">
      <div v-show="isLose == '0' && info.listStatus == 2" class="btn-left" style="flex-grow: 1" @click="click('offline')">下架</div>
      <div v-show="isLose == '1'&& info.listStatus != 3" class="btn-left" style="flex-grow: 1" @click="shareTip">分享</div>
      <div v-show="isLose == '1'" class="btn-right" style="flex-grow: 1" @click="click('delete')">
        <img src="./img/delete.png" alt="" class="delete">
        删除
      </div>
    </div>
  </div>

  <div class="project" v-else-if="$route.query.AorF==2">
    <div class="project-head">
      <div class="head">
        <span @click="$router.go(-1)" class="back"><img style=" width:0.72rem;height: 1.22rem;display: inline-block;" src="./img/back.png" alt=""></span>
        <p>项目详情</p>
      </div>
      <div class="con">
        <p class="p1">{{info.projectName}}</p>
        <p class="p2">{{info.fundCostRegionFrom}}-{{info.fundCostRegionTo}}</p>
        <p class="p3">资金成本区间(%）</p>
        <div class="project-des">
          <div class="item">
            <p>资金类型: {{getLabel(info.fundType,'fund')}}</p>
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
          <p>{{getLabel(info.findAssetType,'asset')}}</p>
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
    <div class="project-main project-footer">
      <div class="main-item">
        <div>
          <p>手机号码</p>
          <p>{{info.contactPhone}}</p>
        </div>
        <div>
          <p>微信号</p>
          <p>{{info.contactWechat}}</p>
        </div>
        <!-- <p>QQ号</p> -->
        <!-- <p>{{info.contactQQ}}</p> -->
      </div>
    </div>
    <div class="footer-btn" style="display: flex;flex-direction: row">
      <div v-show="isLose == '0' && info.listStatus == 2" class="btn-left" style="flex-grow: 1" @click="click('offline')">下架</div>
      <div v-show="isLose == '1'&&info.listStatus != 3" class="btn-left" style="flex-grow: 1" @click="shareTip">分享</div>
      <div v-show="isLose == '1'" class="btn-right" style="flex-grow: 1" @click="click('delete')">
        <img src="./img/delete.png" alt="" class="delete">
        删除
      </div>
    </div>
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'
import axios from 'axios'

export default {
  name: 'ProjectDetail',
  components: {

  },
  data () {
    return {
      AorF:null,
      isLose:null,
      info:{},
      wxSig:{},
      wechatShareReturnLink:''
    }
  },
  mounted(){
    this.AorF = this.$route.query.AorF;
    this.isLose = this.$route.query.isLose;
    this.getDetail();
    /*this.getReturnLink();*/
  },
  methods:{
    /*getReturnLink(){
      Lib.M.ajax({
        url : '/config/getConfigByParameter',
        data: {
          key: 'wechatShareReturnLink'
        },
        success:function(res){
          if(res.code==200){
            self.wechatShareReturnLink = res.data[0].value;
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },*/
    getFundAmountType(key){
      return Lib.M.getFundAmountType(key);
    },
    shareSuccess(){
      this.$vux.toast.show({
        showPositionValue: false,
        text: '分享成功',
        type: 'success',
        position: 'middle'
      })
    },
    shareTip(){
      this.$vux.alert.show('微信分享项目即可重新生效')
    },
    click(fun){
      var self = this, content = null, func=null;
      if(fun=='offline'){
        content = '下架之后，该项目将进入已失效，是否确认下架？';
        func = self.offline;
      }else if(fun=='delete'){
        content = '是否确认删除此项目？';
        func = self.delete;
      }
      this.$vux.confirm.show({
        content: content,
        onConfirm () {
          func();
        }
      })
    },
    //下架
    offline(){
      var self = this;
      Lib.M.ajax({
        url : '/public/unListProject',
        data:{unListId:self.AorF==1?self.info.assetId:self.info.fundId},
        success:function(res){
          if(res.code==200){
            self.$vux.toast.text('下架成功!', 'middle');
            self.$router.replace('MyProject');
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },
    //删除
    delete(){
      var self = this;
      Lib.M.ajax({
        url : '/public/deleteOnListProject',
        data:{deleteId:self.AorF==1?self.info.assetId:self.info.fundId},
        success:function(res){
          if(res.code==200){
            self.$vux.toast.text('删除成功!', 'middle');
            self.$router.replace('MyProject');
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    }, 
    //分享
    share(){
      var self = this;
      Lib.M.ajax({
        url : '/public/reListProject',
        data:{reListId:self.AorF==1?self.info.assetId:self.info.fundId},
        success:function(res){
          if(res.code==200){
            self.shareSuccess();
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });

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
              link: Lib.M.webDomain + '?from=singlemessage' + '/#/sqProjectDetail?AorF=' + self.AorF
                + '&proId=' + (self.AorF==1?self.info.assetId:self.info.fundId) 
                + '&fromShare=y', 
              imgUrl: Lib.M.webDomain+'/logo.png', 
              success: function () { 
                if(self.isLose=='1' && self.info.listStatus== 4) self.share();
              },
              cancel: function () { 
                  // 用户取消分享后执行的回调函数
              }
            });

            wx.onMenuShareAppMessage({
              title: self.info.projectName, 
              desc: '关注51资金资产公众号，获取更多信息', 
              link: Lib.M.webDomain + '?from=singlemessage' + '/#/sqProjectDetail?AorF=' + self.AorF
                + '&proId=' + (self.AorF==1?self.info.assetId:self.info.fundId)
                + '&fromShare=y',
              imgUrl: Lib.M.webDomain+'/logo.png', 
              /*type: '', // 分享类型,music、video或link，不填默认为link*/
              /*dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空*/
              success: function () { 
                if(self.isLose=='1' && self.info.listStatus==4) self.share();
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
      var url = '', type2='', data={};
      if(this.$route.query.AorF == 1){
        type2='asset';
        url = '/asset/findAssetById';
        data = {
          assetId: this.$route.query.proId,
          hide: 0
        }
      }else if(this.$route.query.AorF == 2){
        type2='fund';
        url = '/fund/findFundById';
        data = {
          fundId: this.$route.query.proId,
          hide: 0
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
    //资金资产类型数字转化为文字
    getLabel(key,type){
      var f;
      if(type=='fund')
        f = JSON.parse(localStorage.fundTypeList);
      else
        f = JSON.parse(localStorage.assetTypeList);
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  padding-bottom:0 !important;
}
.project{
  width: 100%;
  height: 100%;
  min-height: 40rem;
  background: rgba(239,239,224,1);
  box-sizing:border-box;
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
  margin-top: 0.625rem;
}
.footer-btn{
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
.btn-left{
  background: #4083FF ;
  font-size: 1.125rem;
  color: #fff;
}
.btn-right{
  background: #fff;
  font-size: 1.125rem;
  color: #B5B5B5;
}
.delete{
  width: 0.94rem;
  height: 0.94rem;
}
</style>
