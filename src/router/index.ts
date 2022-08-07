

import { useRouter, createRouter,RouteRecordRaw, createWebHistory } from 'vue-router';

const routes:RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  }
]



export default createRouter({
  routes,
  history: createWebHistory()
})