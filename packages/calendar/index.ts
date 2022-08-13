/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-12 23:52:55
 * @LastEditors: v833
 * @LastEditTime: 2022-08-12 23:55:43
 */

import { App } from 'vue';
import qCalendar from './src/index.vue';


export default (app: App) => {
  app.component('q-calendar', qCalendar);
}