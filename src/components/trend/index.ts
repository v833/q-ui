/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 11:44:27
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 11:45:25
 */
import { App } from 'vue';
import Trend from './src/index.vue';


export default (app: App) => {
  app.component('q-trend', Trend);
}