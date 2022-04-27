import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import TypeNav from '@/components/TypeNav'

Vue.config.productionTip = false

// 全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(TypeNav.name, TypeNav)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
