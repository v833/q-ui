/*
 * @Description: 工具函数
 * @Author: v833
 * @Date: 2022-08-08 01:29:39
 * @LastEditors: v833
 * @LastEditTime: 2022-08-08 01:32:43
 */
// 把驼峰转换成横杠连接
export function toLine(value: string) {
  return value.replace(/(A-Z)/g, '-$1').toLocaleLowerCase()
}