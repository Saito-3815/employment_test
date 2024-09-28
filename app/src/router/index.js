import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '../components/organisms/MainContent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainContent
  },
  {
    path: '/about',
    name: 'About',
    component: MainContent
  },
  { path: '/hacker-news', name: 'HackerNews', component: MainContent }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
