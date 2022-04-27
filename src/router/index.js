import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Search from '@/views/Search'
Vue.use(VueRouter)

// 重写vueRouter原型对象得push
// 先把VueRouter.prototype身上的push|replace方法进行保存一份
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, resolve, reject) {
  // 第一个形参：路由跳转的配置对象（query|params）
  // 第二个参数：undefined|箭头函数（成功的回调）
  // 第三个参数:undefined|箭头函数（失败的回调）
  if (resolve && reject) {
    // push方法传递第二个参数|第三个参数（箭头函数）
    // originPush：利用call修改上下文，变为(路由组件.$router)这个对象，
    // 第二参数：配置对象、第三、第四个参数：成功和失败回调函数
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
// 重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
const routes = [
  {
    path: '/', redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: { isShow: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { isShow: false }
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: { isShow: true },
    name: 'search'
  }
]

const router = new VueRouter({
  routes
})

export default router
