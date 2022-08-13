/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 16:43:42
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 16:44:55
 */

import { App } from 'vue';
import qProgress from './src/index.vue'


export default (app: App) => {
  app.component('q-progress', qProgress)
}