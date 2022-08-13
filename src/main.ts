/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-08 00:52:56
 * @LastEditors: v833
 * @LastEditTime: 2022-08-13 12:54:54
 */

import { createApp } from 'vue'
import router from '@r/index'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons'
import { toLine } from '@u/index'
// import QUI from '@c/index'
import QUI from '../lib/index.es.js'
import '../lib/style.css'
import '@/mock'

const app = createApp(App)

Object.entries(Icons).forEach(([key, value]) => {
  app.component(`el-icon-${toLine(key)}`, value)
})

app.use(router).use(ElementPlus).use(QUI)
app.mount('#app')
