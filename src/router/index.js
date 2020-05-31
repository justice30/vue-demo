import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Route from '@/components/Route'
import Pdf from '@/components/Pdf'
import EsInfo from '@/components/EsInfo'
import EsIndices from '../components/EsIndices'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello-world',
      name: 'hello-world',
      component: HelloWorld
    }, {
      path: '/users',
      name: 'User',
      component: User
    },
    {
      path: '/route',
      name: 'route',
      component: Route
    }, {
      path: '/pdf',
      name: 'Pdf',
      component: Pdf
    }, {
      path: '/esinfo',
      name: 'EsInfo',
      component: EsInfo
    }, {
      path: '/esindices',
      name: 'EsIndices',
      component: EsIndices
    }
  ]
})
