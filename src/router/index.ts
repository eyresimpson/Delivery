import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServeView from '../views/ServeView.vue'
import AboutView from '../views/AboutView.vue'
import ConfigurationsView from '../views/ConfigurationView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/serve',
    name: 'serve',
    component: ServeView 
  }, 
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/conf',
    name: 'conf',
    component:ConfigurationsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
