<template>
  <div class="header" :style="headStyle">
    <span @click="$router.go(-1)" class="back"><img v-show="hasBack==1" style=" width:0.66rem;height: 1.175rem;display: inline-block;" src="./img/head-back.png" alt=""></span>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
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
    },
    hasBack:{
      type:String,
      default: '1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width:100%;
  height:2.75rem;
  background: #fff;
  margin: 0 auto;
  font-size: 1.065rem;
  color: #000;
  text-align: center;
  position: relative;
  line-height: 2.75rem;
  font-weight: 600;
 /* border-bottom: solid 1px #b4b4b4;*/
}
.header span{
  position: absolute;
  height: 100%;
  left: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
