// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/index.js'
// 公共样式
import '../static/css/commonality.css'
// vuex
import store from '@/store/store'
// font-awesome图标
import 'font-awesome/css/font-awesome.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

Vue.config.productionTip = false

/* eslint-disable no-new */

const i18n = new VueI18n({
  locale: 'ch',
  messages: {
    'ch': require('./language/ch'),
    'cf': require('./language/cf'),
    'en': require('./language/en')
  }
})
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})
   