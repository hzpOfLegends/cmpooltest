import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/homePage'
Vue.use(Router)
// 登录
import text from '@/components/text'
import account from '@/components/register/account'
import login from '@/components/register/login' 
import register from '@/components/register/register'
export default new Router({
  routes: [
    {
      path:'/',
      name:"homePage",
      component:homePage
    },
    {
      path:'/text',
      component:text
    }
    ,
    {
      path:'/account',
      name:"登录",
      component:account,
      children:[
        {
          path:'login',
          name:"登录模块",
          component:login
        },
        {
          path:"register",
          name:"注册模块",
          component:register
        }
      ]
    }
  ]
})
