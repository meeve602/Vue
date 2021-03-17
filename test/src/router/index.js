import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import Header from '@/components/Header'//删除3.17
import Home from '@/components/Home'//新增3.17

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path: '/Header',//寻址方案
      name: 'Home',
      component: Home
    }
  ]
})
