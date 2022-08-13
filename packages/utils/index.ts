/*
 * @Description: 工具函数
 * @Author: v833
 * @Date: 2022-08-08 01:29:39
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 09:47:33
 */
// 把驼峰转换成横杠连接
export function toLine(value: string) {
  return value.replace(/(A-Z)/g, '-$1').toLocaleLowerCase()
}

// 拷贝到粘贴板
export function useCopy(text: string) {
  window.navigator.clipboard.writeText(text)
}