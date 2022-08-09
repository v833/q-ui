/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-08 00:59:06
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 11:46:39
 */


import { useRouter, createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import Container from '@c/container/index.vue';

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
      {
        name: 'IconChoose',
        path: '/icon-choose',
        component: () => import(/* webpackChunkName: "icon-choose" */ '@/views/IconChoose.vue'),
      },
      {
        name: 'AreaChoose',
        path: '/area-choose',
        component: () => import(/* webpackChunkName: "area-choose" */ '@/views/AreaChoose.vue'),
      },
      {
        name: 'Trend',
        path: '/trend',
        component: () => import(/* webpackChunkName: "trend" */ '@/views/Trend.vue'),
      },
    ]
  },


]



export default createRouter({
  routes,
  history: createWebHistory()
})