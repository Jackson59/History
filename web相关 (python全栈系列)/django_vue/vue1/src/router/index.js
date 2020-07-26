import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import ChangePwd from '@/components/ChangePwd'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/ChangePwd',
      name: 'ChangePwd',
      component: ChangePwd
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/homepage',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true, // 判断是否需要登录
       }
    },
  ],
  mode:"history"
})
