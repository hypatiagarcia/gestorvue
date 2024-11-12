import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTask from '@/views/AddTask.vue'
import CombinedView from '@/views/CombinedView.vue'  
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/addtask',
    name: 'addtask',
    component: AddTask
  },
  {
    path: '/combined', 
    name: 'combined',
    component: CombinedView 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
