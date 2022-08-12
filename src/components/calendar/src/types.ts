/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-13 00:18:10
 * @LastEditors: v833
 * @LastEditTime: 2022-08-13 00:19:14
 */
export interface EventItem {
  // 事件标题
  title: string
  start: string
  end: string
  // 是否可拖拽
  editable?: boolean
}