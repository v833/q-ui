/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 16:43:42
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 22:10:01
 */

import { App } from 'vue';
import qForm from './src/index.vue'


export default (app: App) => {
  app.component('q-form', qForm)
}