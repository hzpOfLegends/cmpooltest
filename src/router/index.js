import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/homePage'
Vue.use(Router)

// 登录
import text from '@/components/text'
import account from '@/components/register/account'
import login from '@/components/register/login' 
import register from '@/components/register/register'
//我的账户
import myaccount from '@/components/myaccount/myaccount'
import accountSet from '@/components/myaccount/setup'
import instrument from '@/components/myaccount/instrument'
const vueRouter =  new Router({
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
          name:"login",
          component:login
        },
        {
          path:"register",
          name:"注册模块",
          component:register
        }
      ]
    },
    {
      path:'/myaccount',
      name:'myaccount',
      component:myaccount,
      redirect:'myaccount/accountSet',
      children:[
        {
          path:'accountSet',
          name:'accountSet',
          component:accountSet
        },
        {
          path:'instrument',
          name:'instrument',
          component:instrument
        },
      ]
    }
  ]
});

vueRouter.beforeEach((to,from,next)=>{
  if(to.name==='accountSet'){
    
    
        
    console.log(to)
    // vueRouter.push({name:'login'})
    // return ;
  
}
  next()
})

export default vueRouter;