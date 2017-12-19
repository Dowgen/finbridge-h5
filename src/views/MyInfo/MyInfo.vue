<template>
  <div>
    <div class="content">
      MyInfo
    </div>
    <main-nav which="myInfo"></main-nav>
  </div>
</template>

<script>

import Lib from '@/assets/js/Lib'

import { Loading, XButton, Confirm, Swiper, SwiperItem, } from 'vux'

import MainNav from '@/components/mainNav'

export default {
  name: 'Home', 
  components: {
    MainNav, Loading, XButton, Confirm, Swiper, SwiperItem,
  },
  data () {
    return {
      
    }
  },
  computed:{
    
  },
  mounted(){
    
  },
  methods: {
      
  }
}
</script>

<style lang="less" scoped>
  
</style>
