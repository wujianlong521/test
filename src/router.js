import Vue from 'vue'
import Router from 'vue-router'


// import Home from './views/Home.vue'
// import Login from './views/Login.vue'
// import Base from './router/base'
// import Test from './router/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // children:[
      //   ...Base,
      //   ...Test
      // ]
     }
  ],

})
