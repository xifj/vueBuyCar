import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BuyCar from '@/components/buyCar'
import ProDetail from '@/components/proDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BuyCar',
      component: BuyCar
    },
    {
      path: '/BuyCar',
      name: 'BuyCar',
      component: BuyCar
    },
    {
      path: '/ProDetail',
      name: 'ProDetail',
      component: ProDetail
    }
  ]
})
