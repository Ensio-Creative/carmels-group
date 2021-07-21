import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/investments',
    name: 'Investments',
    component: () => import(/* webpackChunkName: "about" */ '../views/Investments.vue')
  },
  {
    path: '/sustainability',
    name: 'Sustainability',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sustainability.vue')
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
