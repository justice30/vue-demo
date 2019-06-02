import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Route from '@/components/Route'
import Pdf from '@/components/Pdf'

Vue.use(Router)
Vue.use(ElementUI)

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
      path: '/',
      name: 'hello-world',
      component: HelloWorld
    }, {
      path: '/users',
      name: 'User',
      component: User
    }
  ]
})
