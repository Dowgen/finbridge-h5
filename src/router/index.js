import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/Login'
import Regist from '@/views/Login/Regist'
import ResetPsd from '@/views/Login/ResetPsd'
import ProjectDetail from '@/views/ProjectDetail/ProjectDetail'
import ReleaseAssets from '@/views/ReleaseAssets/ReleaseAssets'
import ReleaseAssets2 from '@/views/ReleaseAssets/ReleaseAssets2'
import ReleaseAssets3 from '@/views/ReleaseAssets/ReleaseAssets3'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/ResetPsd',
      name: 'ResetPsd',
      component: ResetPsd
    },
    {
      path: '/ProjectDetail',
      name: 'ProjectDetail',
      component: ProjectDetail
    },
    {
      path: '/ReleaseAssets',
      name: 'ReleaseAssets',
      component: ReleaseAssets
    },
    {
      path: '/ReleaseAssets2',
      name: 'ReleaseAssets2',
      component: ReleaseAssets2
    },
    {
      path: '/ReleaseAssets3',
      name: 'ReleaseAssets3',
      component: ReleaseAssets3
    }

  ]
})
