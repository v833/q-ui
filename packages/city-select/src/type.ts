/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 18:40:17
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 20:54:44
 */
export interface City {
  id: number
  spell: string
  name: string
}


export interface Province {
  name: string
  id?: string
  data: string[]
}