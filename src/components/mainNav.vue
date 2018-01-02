<template>
  <div class="nav">
    <router-link to="/">
      <img v-show="which!=='home'" src="./img/home.png">
      <img v-show="which=='home'" src="./img/home_color.png">
    </router-link>
    <router-link to="/Square">
      <img v-show="which!=='square'" src="./img/square.png">
      <img v-show="which=='square'" src="./img/square_color.png">
    </router-link>
    <div @click="to('Project')" >
      <img v-show="which!=='MyProject'" src="./img/release.png">
      <img v-show="which=='MyProject'" src="./img/release_color.png">
    </div>
    <div @click="to('Info')">
      <img v-show="which!=='myInfo'" src="./img/myInfo.png">
      <img v-show="which=='myInfo'" src="./img/myInfo_color.png">
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  props: {
    which: {
      type: String,
      default: 'home'
    }
  },
  mounted(){

  },
  //相关操作事件
  methods: {
    to(where){
      /*this.$vux.alert.show(localStorage.userId);*/
      let self = this;
      if(localStorage.userId != undefined){
        if(where=='Project'){
          this.$router.push('MyProject')
        }else{
          this.$router.push('MyInfo')
        }
      }else{
        /*this.$vux.confirm.show({
        content: '挂牌或查看个人信息需要登录,是否确认登录?',
          onConfirm () {
            self.$router.push('Login')
          }
        })*/

        if(localStorage.openId!=null){
          self.$router.push('Login')
        }else{
          this.$vux.toast.text("查看完整信息,请关注'51资金资产'公众号", 'middle')
        }
      }
    }
  }
}
</script>

<style scoped>
.nav{
  box-sizing: border-box;
  padding-top: .5rem;
  position: fixed;
  bottom: 0;
  height: 3.8rem;
  width: 100%;
  max-width: 640px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /*border-top: solid .3rem #f2f2f2;*/
  z-index: 9;
}
.nav img{
  width:1.47rem;
  height: 2.345rem;
}
</style>
