/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 09:01:05
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 11:42:32
 */
import { App } from 'vue';
import IconChoose from './src/index.vue';

export default (app: App) => {
  app.component('q-icon-choose', IconChoose);
}