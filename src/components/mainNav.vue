<template>
  <div class="nav">
    <router-link to="/Home">
      <img v-show="which!=='home'" src="./img/home.png">
      <img v-show="which=='home'" src="./img/home_color.png">
    </router-link>
    <router-link to="/Square">
      <img v-show="which!=='square'" src="./img/square.png">
      <img v-show="which=='square'" src="./img/square_color.png">
    </router-link>
    <router-link to="/MyProject">
      <img v-show="which!=='MyProject'" src="./img/release.png">
      <img v-show="which=='MyProject'" src="./img/release_color.png">
    </router-link>
    <router-link to="/MyInfo">
      <img v-show="which!=='myInfo'" src="./img/myInfo.png">
      <img v-show="which=='myInfo'" src="./img/myInfo_color.png">
    </router-link>
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
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: solid .3rem #f2f2f2;
  z-index: 999;
}
.nav img{
  width:1.47rem;
  height: 2.345rem;
}
</style>
