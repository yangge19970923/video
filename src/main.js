import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 全局变量，全局都可以通过this调用
Vue.prototype.axios = axios

//替换图片中的wh
Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
