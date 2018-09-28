import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
Vue.use(Router)

import Home from '../components/Index/Home'
import Chat from '../components/Index/Chat'
import Like from '../components/Index/Like'
import Contact from '../components/Index/Contact'

export default new Router({
  routes: [
    {
      path:"/Home",
      component:Home
    },
    {
      path:"/register",
      component:  Register
    },
    {
      path:"/Chat",
      component:Chat
    },
    {
      path:"/Like",
      component:Like
    },
    {
      path:"/Contact",
      component:Contact
    },
    
  ]
})
