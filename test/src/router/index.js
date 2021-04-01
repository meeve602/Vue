import Vue from 'vue'
//import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import Header from '@/components/Header'//删除3.17
import Home from '@/components/Home'
import City from '@/city/City'
import Detail from '@/detail/Detail'

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
    },
    {
      path: '/City',//寻址方案
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',//动态绑定
      name: 'Detail',
      component: Detail
    },
  ]
})

