import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// Toast提示
Vue.use(toast)

// 移动端点击300ms延迟
FastClick.attach(document.body)

// 图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('@/assets/img/common/placeholder.png'),
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
