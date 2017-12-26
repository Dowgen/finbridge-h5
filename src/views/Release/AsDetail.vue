<template>
  <div class="project">
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
            <p>件均额度</p>
          </div>
          <div class="item">
            <p>{{info.perPeriod}}天</p>
            <p>单笔期限</p>
          </div>
          <div class="item">
            <p>{{info.dailyPayAmount}}百万</p>
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
        <p>{{info.projectName}}</p>
        <p>{{info.productType}}</p>
        <p>{{info.totalPayAmount}}</p>
        <p>{{info.debtRate}}%</p>
        <p>{{info.productName || '无'}}</p>
        <p style="line-height: 24px">{{info.productFeature}}</p>
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
        <p>{{info.companyName || '无'}}</p>
        <p>{{info.operationTime}}个月</p>
        <p>{{info.fundOrigin}}</p>
        <p>{{info.companyAddress}}</p>
        <p>{{info.companyBackground}}</p>
      </div>
    </div>
    <div class="project-footer">
      <div class="footer-item">
        <p>手机号码</p>
        <p>微信号</p>
        <p>QQ号</p>
      </div>
      <div class="footer-item">
        <p>{{info.contactPhone}}</p>
        <p>{{info.contactWechat}}</p>
        <p>{{info.contactQQ}}</p>
      </div>
    </div>
    <div class="footer-btn" style="display: flex;flex-direction: row">
      <div v-show="isLose == '0'" class="btn-left" style="flex-grow: 1" @click="click('offline')">下架</div>
      <div v-show="isLose == '1'" class="btn-left" style="flex-grow: 1" @click="click">分享</div>
      <div v-show="isLose == '1'" class="btn-right" style="flex-grow: 1" @click="click('delete')">
        <img src="./img/delete.png" alt="" class="delete">
        删除
      </div>
    </div>
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'

export default {
  name: 'ProjectDetail',
  components: {

  },
  data () {
    return {
      isLose:null,
      info:{}
    }
  },
  mounted(){
    this.info = this.$route.query.info;
    this.isLose = this.$route.query.isLose;
  },
  methods:{
    share(){
      this.$vux.toast.show({
        showPositionValue: false,
        text: '分享成功',
        type: 'success',
        position: 'middle'
      })
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
        data:{unListId:self.info.assetId},
        success:function(res){
          if(res.code==200){
            self.$vux.toast.text('下架成功!', 'middle');
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
        data:{deleteId:self.info.assetId},
        success:function(res){
          if(res.code==200){
            self.$vux.toast.text('下架成功!', 'middle');
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
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
  width: 100%;
  height: 100%;
  background: rgba(239,239,224,1);
}
.project .project-head{
  width: 100%;
  height: 15.94rem;
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
  width: 100%;
  margin: 0 auto;
  display: flex;
  background: #fff;
}
.project .project-main .main-item:nth-of-type(1){
  flex: 1;
  color: #BEBEBE;
}
.project .project-main .main-item:nth-of-type(2){
  flex: 4;
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
  font-size: 0.875rem;
  height: 0.8rem;
}
.project .project-footer{
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
 /* height: 5.03rem;*/
  background: #fff;
  margin-top: 0.625rem;
}
.project .project-footer .footer-item:nth-of-type(1){
  flex: 1;
  color: #BEBEBE;
}
.project .project-footer .footer-item:nth-of-type(2){
  flex: 4;
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
  height: 0.8rem;
}
.footer-btn{
  width: 100%;
  height: 3.065rem;
  background: #4083FF ;
  color: #fff;
  text-align: center;
  line-height: 3.065rem;
  font-size: 1.065rem;
}
.btn-left{
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
