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
// 币种
import dash from '@/components/coinUrl/dash'
import dgb_groestl from '@/components/coinUrl/dgb-groestl'
import dgb_qubit from '@/components/coinUrl/dgb-qubit'
import dgb_scrypt from '@/components/coinUrl/dgb-scrypt'
import dgb_sha256d from '@/components/coinUrl/dgb-sha256d'
import dgb_skein from '@/components/coinUrl/dgb-skein'
import max from '@/components/coinUrl/max'
import start from '@/components/coinUrl/start'
import xmr from '@/components/coinUrl/xmr'
import zcash from '@/components/coinUrl/zcash'
const vueRouter = new Router({
  routes: [{
      path: '/',
      name: "homePage",
      component: homePage
    },
    {
      path: '/text',
      component: text
    },
    {
      path: '/account',
      name: "登录",
      component: account,
      children: [{
          path: 'login',
          name: "login",
          component: login
        },
        {
          path: "register",
          name: "注册模块",
          component: register
        }
      ]
    },

    {
      path: '/myaccount',
      name: 'myaccount',
      component: myaccount,
      redirect: 'myaccount/accountSet',
      children: [{
          path: 'accountSet',
          name: 'accountSet',
          component: accountSet
        }, {
          path: '/dash/Dashboard',
          name: 'dash',
          component: dash
        },
        {
          path: '/dgb-groestl/dashboard',
          name: 'dash',
          component: dgb_groestl
        },
        {
          path: '/dgb-qubit/dashboard',
          name: 'dash',
          component: dgb_qubit
        },
        {
          path: '/dgb-scrypt/dashboard',
          name: 'dash',
          component: dgb_scrypt
        },
        {
          path: '/dgb-sha256d/dashboard',
          name: 'dash',
          component: dgb_sha256d
        },
        {
          path: '/dgb-skein/dashboard',
          name: 'dash',
          component: dgb_skein
        },
        {
          path: '/max/dashboard',
          name: 'dash',
          component: max
        },
        {
          path: '/start/dashboard',
          name: 'dash',
          component: start
        },
        {
          path: '/xmr/dashboard',
          name: 'dash',
          component: xmr
        },
        {
          path: '/zcash/dashboard',
          name: 'dash',
          component: zcash
        }
      ]
    }
  ]
});

vueRouter.beforeEach((to, from, next) => {
  if (to.name === 'accountSet') {

  }
  next()
})

export default vueRouter;
