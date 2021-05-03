import { createRouter, createWebHashHistory } from 'vue-router';
import League from '../src/components/League.vue';
import SplashSkin from '../src/components/SplashSkin.vue'

const routes = [
  {
    path: '/',
    component: League,
  },
  {
    path: '/SkinPerso',
    component: SplashSkin,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
