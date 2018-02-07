<template>
  <div>
    <div class="content">
      <div class="header">
        <span @click="$router.go(-1)" class="back"><img style=" width:0.66rem;height: 1.175rem;display: inline-block;" src="./img/head-back.png" alt=""></span>
        <p>关注</p>
      </div>
     <div class="fansList">
       <div class="fans-item" v-for="item in FollowOrFollowedList">
         <div class="fans-item-l" @click="jumpTo(item.userId)">
           <div class="item-l">
             <img src="./img/famale_pic.png" alt="">
           </div>
           <div class="item-r">
             <p>{{item.name}}</p>
             <p>{{item.introduction}}</p>
           </div>
         </div>
         <div class="fans-item-r">
           <span class="addAttention" v-show="item.sign!=null?!item.sign:false" @click="addOrCancelFollow(item.userId,item.sign)">
              <img src="./img/ic_add.png" alt="">
             关注
           </span>
           <span class="cancelAttention" v-show="item.sign!=null?item.sign:true" @click="addOrCancelFollow(item.userId,item.sign)">已关注</span>
         </div>
       </div>
       <div class="no-more">没有更多了...</div>
     </div>

    </div>
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Loading, XButton, Confirm,Cell,PopupPicker } from 'vux'

import MainNav from '@/components/mainNav'

import myHead from '@/components/myHead'

import $ from 'jquery'


export default {
  name: 'Home', 
  components: {
    MainNav, Loading, XButton, Confirm,myHead
  },
  data () {
    return {
      myData:[],
      img_id: '',
      noAvatar:true,
      intro:'',
      attention:false,
      FollowOrFollowedList:[]

    }
  },
  computed:{

  },
  mounted(){
    this.getUserFollowOrFollowedList();
  },
  methods: {
    jumpTo(userId){
      this.$router.push({'path':'/MyInfo2',query:{
          userId:userId
        }
      })
    },
    /* 获取关注和粉丝列表 */
    getUserFollowOrFollowedList(){
      var self = this;
      var key = '';
      if(self.$route.query.AorF=='attention'){
        key = 'follow'
      }else if(self.$route.query.AorF=='fans'){
        key = 'followed'
      }
      Lib.M.ajax({
        url : '/user/getUserFollowOrFollowedList',
        data:{
          /*userId: localStorage.userId,*/
          userId:'1',
          key: key
        },
        success:function(res){
          if(res.code==200){
            self.FollowOrFollowedList = res.data;
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    },
    /* 关注或取消关注 */
    addOrCancelFollow(userId,sign){
      var self = this;
      var key = '';
      if(sign==null){ //null表示关注页面
        key = 'cancel'
      }else{
        if(sign == false){
          key = 'add';
        }else if(sign == true){
          key = 'cancel';
        }
      }
      /*if(self.$route.query.AorF=='attention'){
        userId = userId;
        followId = '1';
      }else if(self.$route.query.AorF=='fans'){
        userId = '1';
        followId = userId;
      }*/
      Lib.M.ajax({
        url : '/user/userAddOrCancelFollow',
        data:{
          /*userId: localStorage.userId,*/
          userId: '1',
          key: key,
          followId: userId
        },
        success:function(res){
          if(res.code==200){
            self.getUserFollowOrFollowedList();
          }else{
            self.$vux.toast.text(res.error, 'middle');
          }
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
  .content{
    width: 100%;
    background: #fff;
    min-height: 40rem;
    position: absolute;
    left: 0;
    top: 0;
    .header{
      width:100%;
      height:2.75rem;
      background:#fff;
      margin: 0 auto;
      font-size: 1.065rem;
      color: #000;
      text-align: center;
      position: relative;
      line-height: 2.75rem;
      font-weight: 600;
      span{
        position: absolute;
        height: 100%;
        left: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .fansList{
      .fans-item{
        height: 3.875rem;
        border-bottom: 0.06rem solid #E6E7EB;
        display: flex;
        .fans-item-l{
          flex: 3;
          display: flex;
          .item-l{
            flex: 1;
            margin-top: 0.875rem;
            img{
              width: 2.125rem;
              height: 2.125rem;
            }
          }
          .item-r{
            flex: 3;
            text-align: left;
            margin-top: 0.94rem;
            p:nth-of-type(1){
              font-size: 0.875rem;
              color: #333333;
              line-height: 1.125rem;
            }
            P:nth-of-type(2){
              font-size: 0.625rem;
              color: #999999;
              line-height: 0.875rem;
            }
          }
        }
        .fans-item-r{
          flex: 1;
          margin-top: 1.19rem;
          span{
            display: inline-block;
            width:3.25rem;
            height:1.625rem;
            border-radius: 0.2rem ;
            line-height: 1.625rem;
            font-size: 0.75rem;
          }
          .addAttention{
            background:rgba(252,116,63,1);
            color: #fff;
            img{
              width: 0.625rem;
              height: 0.625rem;
            }
          }
          .cancelAttention{
            background:#fff;
            color: #888;
            border: 0.06rem solid #D5D5D5;
          }
        }
      }
      .no-more{
        line-height: 2rem;
        text-align: center;
        font-size: 0.75rem;
        color: #C7C7C7;
        margin-top: 1rem;
      }
    }



  }
  
</style>
