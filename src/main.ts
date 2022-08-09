/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-08 00:52:56
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 08:39:48
 */
import { createApp } from 'vue'
import router from '@r'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons'
import { toLine } from '@u/index.ts'

const app = createApp(App)

Object.entries(Icons).forEach(([key, value]) => {
  app.component(`el-icon-${toLine(key)}`, value)
})

app.use(router).use(ElementPlus)
app.mount('#app')
