import Vue from 'vue'
import Router from 'vue-router'
/*const _import = file => () => import('@/views/' + file)*/
const _import = file => resolve => require(['@/views/' + file], resolve);
const login = r => require.ensure([], () => r(require('@/views/Login/Login')), 'login')
const regist = r => require.ensure([], () => r(require('@/views/Login/Regist')), 'regist')
const resetPsd = r => require.ensure([], () => r(require('@/views/Login/ResetPsd')), 'resetPsd')
const Home = r => require.ensure([], () => r(require('@/views/Home/Home')), 'Home')
const NewsDetail = r => require.ensure([], () => r(require('@/views/Home/NewsDetail')), 'NewsDetail')
const Square = r => require.ensure([], () => r(require('@/views/Square/Square')), 'Square')
const sqProjectDetail = r => require.ensure([], () => r(require('@/views/Square/sqProjectDetail')), 'sqProjectDetail')
const MyProject = r => require.ensure([], () => r(require('@/views/Release/MyProject')), 'MyProject')
const ReleaseAssets = r => require.ensure([], () => r(require('@/views/Release/ReleaseAssets')), 'ReleaseAssets')
const ReleaseFund = r => require.ensure([], () => r(require('@/views/Release/ReleaseFund')), 'ReleaseFund')
const Release2 = r => require.ensure([], () => r(require('@/views/Release/Release2')), 'Release2')
const Release3 = r => require.ensure([], () => r(require('@/views/Release/Release3')), 'Release3')
const ProjectDetail = r => require.ensure([], () => r(require('@/views/Release/ProjectDetail')), 'ProjectDetail')
const MyInfo = r => require.ensure([], () => r(require('@/views/MyInfo/MyInfo')), 'MyInfo')
const MyInfo2 = r => require.ensure([], () => r(require('@/views/MyInfo/MyInfo2')), 'MyInfo2')
const AboutUs = r => require.ensure([], () => r(require('@/views/MyInfo/AboutUs')), 'AboutUs')
const AboutMe = r => require.ensure([], () => r(require('@/views/MyInfo/AboutMe')), 'AboutMe')
const AddNick = r => require.ensure([], () => r(require('@/views/MyInfo/AddNick')), 'AddNick')
const productList = r => require.ensure([], () => r(require('@/views/MyInfo/productList')), 'productList')
const editInfo = r => require.ensure([], () => r(require('@/views/MyInfo/editInfo')), 'editInfo')
const AddMyIntro = r => require.ensure([], () => r(require('@/views/MyInfo/AddMyIntro')), 'AddMyIntro')
const fans = r => require.ensure([], () => r(require('@/views/MyInfo/fans')), 'fans')
const attention = r => require.ensure([], () => r(require('@/views/MyInfo/attention')), 'attention')

Vue.use(Router)

//登录模块
const LoginRoutes = [
  {
    path: '/Login',
    component: login
  },{
    path: '/Regist',
    component: regist
  },{
    path: '/RegistForWX',
    redirect: '/Regist'
  },{
    path: '/ResetPsd',
    component: resetPsd
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
    component: Home
  },
  {
    path: '/NewsDetail',
    component: NewsDetail
  },

]

//广场模块
const squareRoutes = [
  {
    path: '/Square',
    component: Square,
    meta: {
        keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/sqProjectDetail',
    component:sqProjectDetail
  }
]
//挂牌模块
const ReleaseRoutes = [
  {
    path: '/MyProject',
    component: MyProject
  },{
    path: '/ReleaseAssets',
    component: ReleaseAssets
  },{
    path: '/ReleaseFund',
    component: ReleaseFund
  },{
    path: '/Release2',
    component: Release2
  },{
    path: '/Release3',
    component: Release3
  },{
    path: '/ProjectDetail',
    component: ProjectDetail
  }
]
//个人信息模块
const MyInfoRoutes = [
  {
    path: '/MyInfo',
    component: MyInfo
  },
  {
    path: '/MyInfo2',
    component: MyInfo2
  },
  {
    path: '/AboutUs',
    component: AboutUs
  },
  {
    path: '/AboutMe',
    component: AboutMe
  },
  {
    path: '/AddNick',
    component: AddNick
  },
  {
    path: '/productList',
    component: productList
  },
  {
    path: '/editInfo',
    component: editInfo
  },
  {
    path: '/AddMyIntro',
    component: AddMyIntro
  },
  {
    path: '/fans',
    component: fans
  },
  {
    path: '/attention',
    component: attention
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
