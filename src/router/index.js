import Vue from 'vue'
import Router from 'vue-router'
const _import = file => () => import('@/views/' + file)

Vue.use(Router)

//登录模块
const LoginRoutes = [
  {
    path: '/',
    component: _import('Login/Login')
  },
  {
    path: '/Regist',
    component: _import('Login/Regist')
  },
  {
    path: '/ResetPsd',
    component: _import('Login/ResetPsd')
  }
]

//主页
const HomeRoutes = [
  {
    path: '/Home',
    component: _import('Home/Home')
  },
  {
    path: '/NewsDetail',
    component: _import('Home/NewsDetail')
  },

]

//广场模块
const squareRoutes = [
  {
    path: '/Square',
    component: _import('Square/Square')
  },
  {
    path: '/ProjectDetail',
    component: _import('Square/ProjectDetail')
  },
]
//挂牌模块
const ReleaseRoutes = [
  {
    path: '/MyAssets',
    component: _import('ReleaseAssets/MyAssets')
  },
  {
    path: '/ReleaseAssets',
    component: _import('ReleaseAssets/ReleaseAssets')
  },
  {
    path: '/ReleaseAssets2',
    component: _import('ReleaseAssets/ReleaseAssets2')
  },
  {
    path: '/ReleaseAssets3',
    component: _import('ReleaseAssets/ReleaseAssets3')
  },
  {
    path: '/ReleaseDetail',
    component: _import('ReleaseAssets/ReleaseDetail')
  }
]
//个人信息模块
const MyInfoRoutes = [
  {
    path: '/MyInfo',
    component: _import('MyInfo/MyInfo')
  },
  {
    path: '/AboutUs',
    component: _import('MyInfo/AboutUs')
  },
  {
    path: '/AboutMe',
    component: _import('MyInfo/AboutMe')
  },
  {
    path: '/AddNick',
    component: _import('MyInfo/AddNick')
  },

]

export default new Router({
  routes: 
    LoginRoutes.concat(
      HomeRoutes,
      squareRoutes,
      ReleaseRoutes,
      MyInfoRoutes)
})
