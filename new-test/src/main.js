import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'//新版本尽量用绝对路径
//如果要做单独别名,需新建vue.config.js文件并在其中做配置

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

//老版本写法,已不支持
//new Vue({
//el: '#app',
//router,
//store,
//components: { App },
//template: '<App/>'
//})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
