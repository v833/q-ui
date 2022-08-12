/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-11 21:40:38
 * @LastEditors: v833
 * @LastEditTime: 2022-08-11 21:42:04
 */
import qTable from './src/index.vue';
import { App } from 'vue';


export default (app: App) => {
  app.component('q-table', qTable);
}