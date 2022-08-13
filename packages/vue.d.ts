/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-13 12:48:25
 * @LastEditors: v833
 * @LastEditTime: 2022-08-13 12:48:55
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}