/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-08 00:52:56
 * @LastEditors: v833
 * @LastEditTime: 2022-08-08 01:17:39
 */
import { createApp } from 'vue'
import router from '@r';
import App from './App.vue'


const app = createApp(App)
app.use(router)
app.mount('#app')
