import Vue from 'vue'
//import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import Header from '@/components/Header'//删除3.17
//import Home from '@/components/Home'
//import City from '@/city/City'
//import Detail from '@/detail/Detail'
//同步加载方式

Vue.use(Router)

//当app.js很大的时候可以考虑拆分为异步组件

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
      component: () => import('@/components/Home')//异步加载方式
    },
    {
      path: '/City',//寻址方案
      name: 'City',
      component: () => import('@/city/City')//异步加载方式
    },
    {
      path: '/detail/:id',//动态路由
      name: 'Detail',
      component: () => import('@/detail/Detail')//异步加载方式
    },
  ],
  	scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
//	防止滑动联动
})
//完成迁移
