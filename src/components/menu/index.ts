/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 11:44:27
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 13:17:56
 */
import { App } from 'vue';
import Menu from './src/index.vue';
import infiniteMenu from './src/menu'


export default (app: App) => {
  app.component('q-menu', Menu);
  app.component('q-infinite-menu', infiniteMenu);

}