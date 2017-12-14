<template>
  <div class="hello">
  <dg></dg>
    <img src="./img/logo.png">
    <h1>{{ msg }}</h1>
    <router-link to="/test">router跳转</router-link>
    <div id="test">jquery测试</div>
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'
import Dg from '@/components/testComponent'
import $ from "jquery"

export default {
  name: 'HelloWorld',
  components: {
    Dg
  },
  data () {
    return {
      msg: 'finbridge-h5'
    }
  },
  mounted(){
    $('#test').css('color','red');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
