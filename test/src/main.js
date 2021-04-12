//老版本,带注释
import Vue from 'vue'
import App from './App'
import router from './router'//寻找router文件下叫router的组件
//import fastClick from 'fastclick'//已过时
import VueAwesomeSwiper from 'vue-awesome-swiper'//新增3.17
import store from './store'//将公用数据储存引入到顶层js
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'//添加icon
import 'swiper/dist/css/swiper.css'//新增3.17
import 'babel-polyfill'//防白屏

Vue.config.productionTip = false
//fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)//新增3.17
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,//store组件内容将被发送到所有组件，相当于全局定义
  components: { App },
  template: '<App/>'
})
//  "dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js",增加--host 0.0.0.0后，该该网页能被IP地址所访问


//完成迁移