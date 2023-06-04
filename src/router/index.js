import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/HomeView.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },
]

const router = new VueRouter({
  routes
})

export default router
