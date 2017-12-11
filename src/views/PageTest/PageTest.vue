<template>
  <div class="hello">
    <h1>PageTest</h1>
    <router-link to="/">跳回</router-link>
    
  </div>
</template>

<script>
import Lib from '@/assets/js/Lib'

export default {
  name: 'PageTest',
  data () {
    return {
      msg: ''
    }
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
