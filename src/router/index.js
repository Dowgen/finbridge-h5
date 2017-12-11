import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld/HelloWorld'
import PageTest from '@/views/PageTest/PageTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'PageTest',
      component: PageTest
    }
  ]
})
