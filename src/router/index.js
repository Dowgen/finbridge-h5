import Vue from 'vue'
import Router from 'vue-router'
/*const _import = file => () => import('@/views/' + file)*/
const _import = file => resolve => require(['@/views/' + file], resolve);


Vue.use(Router)

//登录模块
const LoginRoutes = [
  {
    path: '/Login',
    component: _import('Login/Login')
  },{
    path: '/Regist',
    component: _import('Login/Regist')
  },{
    path: '/RegistForWX',
    redirect: '/Regist'
  },{
    path: '/ResetPsd',
    component: _import('Login/ResetPsd')
  }
]

//主页
const HomeRoutes = [
  {
    path: '/',
    redirect: '/Home'
  },
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
    component: _import('Square/Square'),
    meta: {
        keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/sqProjectDetail',
    component: _import('Square/sqProjectDetail')
  }
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
    path: '/ProjectDetail',
    component: _import('Release/ProjectDetail')
  }
]
//个人信息模块
const MyInfoRoutes = [
  {
    path: '/MyInfo',
    component: _import('MyInfo/MyInfo')
  },
  {
    path: '/MyInfo2',
    component: _import('MyInfo/MyInfo2')
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
  {
    path: '/productList',
    component: _import('MyInfo/productList')
  },
  {
    path: '/editInfo',
    component: _import('MyInfo/editInfo')
  },
  {
    path: '/AddMyIntro',
    component: _import('MyInfo/AddMyIntro')
  },
  {
    path: '/fans',
    component: _import('MyInfo/fans')
  },
  {
    path: '/attention',
    component: _import('MyInfo/attention')
  },
]

export default new Router({
  /*mode: 'history',*/
  routes: 
    LoginRoutes.concat(
      HomeRoutes,
      squareRoutes,
      ReleaseRoutes,
      MyInfoRoutes)
})
