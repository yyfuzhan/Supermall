import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
//赋值$bus
Vue.prototype.$bus=new Vue()

//使用图片懒加载
Vue.use(vueLazyload)

new Vue({
  router,
  store,
  render: h=>  h(App)
}).$mount('#app')
