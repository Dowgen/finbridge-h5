<template>
  <div class="btn" :style="btnStyle">{{msg}}</div>
</template>

<script>
export default {
  name: 'btn',
  data () {
    return {
      btnStyle:{
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
  .btn{
    width:19.53rem;
    height:3.125rem;
    background:rgba(64,131,255,1);
    border-radius: 0.31rem ;
    margin: 0.6rem auto;
    font-size: 1.125rem;
    color: #fff;
    text-align: center;
    line-height: 3.125rem;
  }
</style>
