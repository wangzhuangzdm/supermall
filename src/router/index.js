import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home.vue')
  },
  {
    path: '/category',
    component: () => import('views/category/Category.vue')
  },
  {
    path: '/cart',
    component: () => import('views/cart/Cart.vue')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router