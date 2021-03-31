// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'//寻找router文件下叫router的组件
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'//新增3.17
import store from './store'//将公用数据储存引入到顶层js
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'//添加icon
import 'swiper/dist/css/swiper.css'//新增3.17

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)//新增3.17
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,//store组件内容将被发送到所有组件，相当于全局定义
  components: { App },
  template: '<App/>'
})
