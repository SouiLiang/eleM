import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Positioning from '@/components/positioning'
import Login from '@/components/login'
import Registered from '@/components/registered'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/positioning'
    },
    {
   	  path: '/positioning',
   	  component:Positioning
    },
    {
      path: '/registered',
      component: Registered
    }
  ]
})
