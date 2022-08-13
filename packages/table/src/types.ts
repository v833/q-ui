/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-11 21:47:02
 * @LastEditors: v833
 * @LastEditTime: 2022-08-11 22:02:44
 */
export interface TableOptions {
  label: string
  prop: string
  width?: string | number
  align?: 'left' | 'center' | 'right'
  slot?: string
  action?: boolean
  editable?: boolean
}