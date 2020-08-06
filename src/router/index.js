import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/Login'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{title:"登录系统"}
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        requtreAuth:true,
        title:"系统首页"
      },
      children:[
      
      ]
    },
  ]
})
