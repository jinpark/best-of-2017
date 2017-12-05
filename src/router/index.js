import Vue from 'vue'
import Router from 'vue-router'
import Slider from '@/components/Slider'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Slider',
      component: Slider
    }
  ]
})
