<template>
  <div class="header" :style="headStyle">
    <span @click="$router.go(-1)" class="back"><img style=" width:0.66rem;height: 1.175rem;display: inline-block;" src="./img/head-back.png" alt=""></span>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'myHead',
  data () {
    return {
      headStyle:{
        'background-color':this.backgroundColor
      }
    }
  },
  props:{
    msg:{
      type:String,
      required:true
    },
    backgroundColor:{
      type:String,
      required:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width:100%;
  height:4rem;
  background: #fff;
  margin: 0 auto;
  font-size: 1.065rem;
  color: #000;
  text-align: center;
  position: relative;
  line-height: 4rem;
}
.header span{
  position: absolute;
  left: 1.5rem;
}
</style>
