
import { createApp } from 'vue'
import router from '@r/index'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons'
import { toLine } from '@u/index'
import '@c/index.ts'

const app = createApp(App)

Object.entries(Icons).forEach(([key, value]) => {
  app.component(`el-icon-${toLine(key)}`, value)
})

app.use(router).use(ElementPlus)
app.mount('#app')
