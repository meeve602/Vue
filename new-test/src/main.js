import Vue, { createApp } from 'vue';
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'//新版本尽量用绝对路径
Vue.use(VueAwesomeSwiper)

//老版本写法,已不支持
//new Vue({
//el: '#app',
//router,
//store,
//components: { App },
//template: '<App/>'
//})

createApp(App).use(router).use(store).mount('#app')
