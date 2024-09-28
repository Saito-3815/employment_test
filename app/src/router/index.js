import { createRouter, createWebHistory } from 'vue-router';
// import About from '../components/About.vue';
import MainContent from '../components/organisms/MainContent.vue';

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
  // 他のルートを追加
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;