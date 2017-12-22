import Vue from 'vue'
import Router from 'vue-router'
const _import = file => () => import('@/views/' + file)

Vue.use(Router)

//登录模块
const LoginRoutes = [
  {
    path: '/',
    component: _import('Login/Login')
  },{
    path: '/Regist',
    component: _import('Login/Regist')
  },{
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
    path: '/ZcLoginProjectDetail',
    component: _import('Square/ZcLoginProjectDetail')
  },
  {
    path: '/ZjLoginProjectDetail',
    component: _import('Square/ZjLoginProjectDetail')
  },
]
//挂牌模块
const ReleaseRoutes = [
  {
    path: '/MyProject',
    component: _import('Release/MyProject')
  },{
    path: '/ReleaseAssets',
    component: _import('Release/ReleaseAssets')
  },{
    path: '/ReleaseFund',
    component: _import('Release/ReleaseFund')
  },{
    path: '/Release2',
    component: _import('Release/Release2')
  },{
    path: '/Release3',
    component: _import('Release/Release3')
  },{
    path: '/AsDetail',
    component: _import('Release/AsDetail')
  },{
    path: '/FuDetail',
    component: _import('Release/FuDetail')
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
