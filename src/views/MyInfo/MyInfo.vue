<template>
  <div>
    <div class="content">
      <div class="myHead">
        <!--<div class="avatar">
          <img v-show="noAvatar" class="avatar2" src="./img/img_placeholder.png">
          <img v-show="!noAvatar" class="avatar2" :src="img_id">
          <input id="upfile" type="file" name="upfile" accept="image/png,image/jpg,image/jpeg" @change='preivewImg'>
        </div>-->
      </div>
      <div class="myInfo">
        <h4>您好,</h4>
        <p>{{myPhone.substr(0, 3)}}****{{myPhone.substr(7)}}</p>
        <div class="intro">
          <p>{{intro}}</p>
        </div>
      </div>
      <div class="aboutUs" @click="AboutUs">关于我们</div>
    </div>
    <main-nav which="myInfo"></main-nav>
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Loading, XButton, Confirm, Swiper, SwiperItem, } from 'vux'

import MainNav from '@/components/mainNav'

import $ from 'jquery'

export default {
  name: 'Home', 
  components: {
    MainNav, Loading, XButton, Confirm, Swiper, SwiperItem,
  },
  data () {
    return {
      myData:[],
      img_id: '',
      noAvatar:true,
      intro:'',
      myPhone:''

    }
  },
  computed:{

  },
  mounted(){
    this.myPhone = localStorage.phoneNum;
    this.getMyInfo();
    this.getImg();
  },
  methods: {
    AboutUs(){
      this.$router.push('./AboutUs')
    },
    /*AboutMe(){
      this.$router.push('./AboutMe')
    },*/
    getMyInfo(){
      var self = this;
      Lib.M.ajax({
        url : '/info/getAboutUs',
        success:function(res){
          self.myData = res.data;
          $(self.myData).each(function(index){
            if(self.myData[index].key == 'aboutUs_intro'){
              self.intro = self.myData[index].value;
              console.log(self.intro);
            }

          });

        },
        error:function(err){
          console.error(err);
        }
      });
    },
    preivewImg() {
      /* 用fileReader实现图片预览 */
      var self = this;
      var file = document.getElementById("upfile").files[0];
      if(file.size > 200*1024){
        self.$vux.alert.show('图片过大(需小于200KB)')
      }else{
        var reader = new FileReader();
        reader.onload = function(e) {
          self.img_id = e.target.result;
          self.uploadImg();
        }
        reader.readAsDataURL(file, "UTF-8");
      }
    },
    getImg(){
      var self = this;
     /* Lib.M.ajax({
        type:'get',
        url:'cash-account/user/account/getIconImage/'+self.localUserInfo.userInfo.phone,
        dataType:'blob',
        success:function (res) {
          if(res.size!=0){
            self.img_id =  window.URL.createObjectURL(res);
            self.noAvatar = false;
          }else{
            self.noAvatar = true;
          }
        }
      })*/
    },
    uploadImg(/*base64Data*/){
      var self = this;
      var fd = new FormData();
      /* console.log(self.convertBase64UrlToBlob(base64Data))*/
      fd.append("upload", 1);
      fd.append('file', document.getElementById("upfile").files[0]/*self.convertBase64UrlToBlob(base64Data)*/);
     /* Lib.M.ajax({
        url: "cash-account/user/account/iconImage/"+self.localUserInfo.userInfo.phone,
        data: fd,
        success:function (res) {
          if(res.code == 200){
            self.$vux.toast.text('上传成功!')
            this.getImg();
          }else{
            self.$vux.alert.show(res.error)
            this.getImg();
          }
        }
      })*/
    },

  }
}
</script>

<style lang="less" scoped>
  .content{
    width: 100%;
    min-height: 40rem;
    position: absolute;
    left: 0;
    top: 0;
   /* .avatar2{
      width: 2.5rem;
      height: 2.5rem;
      display: inline-block;
      position: absolute;
      left: -3rem;
      top: 1.25rem;
      border-radius:50% ;
    }*/
    .myHead{
      width: 100%;
      height:14.03rem;
      background: url("./img/img-me-bg.png") no-repeat left top;
      background-size: 100% 100%;
      overflow: hidden;
      .avatar{
        width: 6.875rem;
        height: 6.875rem;
        margin:10rem auto 0;
        position: relative;
       /* border: 5px solid rgba(255,0,0,0.5);
        border-radius: 50%;*/
        img{
          width: 100%;
          height: 100%;
        }
        input{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
        }
      }
    }
    .myInfo{
      h4{
        font-size: 1.565rem;
        color: #4E4E4E;
        font-weight:normal;
      }
      p{
        font-size: 1.125rem;
        color: #BBBBBB;
        margin: 0.8rem 0 1.9rem;
      }
      .intro{
        width: 80%;
        margin: 0 auto;
        p{
          font-size: 0.75rem;
          color: #666666 ;
          line-height: 1.345rem;
        }
      }
    }
    .aboutUs{
      width:19.69rem;
      height:3.44rem;
     /* margin:3rem auto 0;*/
      background:#FF671B;
      border-radius: 1.72rem ;
      text-align: center;
      line-height: 3.44rem;
      color: #fff;
      font-size: 1.125rem;
      position: absolute;
      bottom: 8.5rem;
      left: 50%;
      margin-left: -9.845rem;
    }
  }
  
</style>
