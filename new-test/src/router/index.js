import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
//./上级目录,../上上级目录
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path: '/Header',
      name: 'Home',
      component: () => import('../components/Home')
    },
    {
      path: '/City', name: 'City',
      component: () => import('../city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('../detail/Detail')
    },
],
	scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
}
})