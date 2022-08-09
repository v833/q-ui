/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-08 00:52:56
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 13:11:38
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import VueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@c': '@/components',
      '@r': '@/router',
      '@v': '@/views',
      '@s': '@/store',
      '@u': '@/utils',
    },
    extensions: ['.ts', '.js', '.vue', '.json', '.tsx'],
  }
})
