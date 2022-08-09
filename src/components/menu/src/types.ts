/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 12:35:43
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 12:37:38
 */
export interface MenuItem {
  icon?: string,
  i?: string,
  name: string,
  index: string,
  children?: MenuItem[],
}