import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 全局变量，全局都可以通过this调用
Vue.prototype.axios = axios

//注册全局组件
import Scroller from '@/components/Scroller'
Vue.component('Scroller', Scroller)

import Loading from '@/components/Loading'
Vue.component('Loading', Loading)

//替换图片中的wh
Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
