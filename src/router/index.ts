/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-08 00:59:06
 * @LastEditors: v833
 * @LastEditTime: 2022-08-12 23:55:12
 */

import { useRouter, createRouter, RouteRecordRaw, createWebHistory, createWebHashHistory } from 'vue-router';
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
      {
        name: 'Menu',
        path: '/menu',
        component: () => import(/* webpackChunkName: "menu" */ '@/views/Menu.vue'),
      },
      {
        name: 'Progress',
        path: '/progress',
        component: () => import(/* webpackChunkName: "progress" */ '@/views/Progress.vue'),
      },
      {
        name: 'CitySelect',
        path: '/city-select',
        component: () => import(/* webpackChunkName: "city-select" */ '@/views/CitySelect.vue'),
      },
      {
        name: 'Form',
        path: '/form',
        component: () => import(/* webpackChunkName: "form" */ '@/views/Form.vue'),
      },
      {
        name: 'ModelForm',
        path: '/model-form',
        component: () => import(/* webpackChunkName: "model-form" */ '@/views/ModelForm.vue'),
      },
      {
        name: 'Table',
        path: '/table',
        component: () => import(/* webpackChunkName: "table" */ '@/views/Table.vue'),
      },
      {
        name: 'Calendar',
        path: '/calendar',
        component: () => import(/* webpackChunkName: "calendar" */ '@/views/Calendar.vue'),
      },
    ]
  },


]



export default createRouter({
  routes,
  history: createWebHashHistory()
})