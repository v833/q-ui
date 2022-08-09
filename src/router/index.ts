

import { useRouter, createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import Container from '@c/container';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        name: 'Home',
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ]
  },


]



export default createRouter({
  routes,
  history: createWebHistory()
})