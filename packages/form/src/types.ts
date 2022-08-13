/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 22:22:23
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 22:39:58
 */
import { CSSProperties } from 'vue';
import { RuleItem } from './rules'
export interface FormOptions {
  // 表表单项现实的元素
  type: 'cascader' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'color-picker' |
  'date-picker' | 'input' | 'input-number' | 'radio' | 'radio-group' | 'radio-button' | 'rate' |
  'select' | 'option' | 'slider' | 'switch' | 'time-picker' | 'time-select' |
  'transfer' | 'upload' | 'editor'
  value?: any
  label?: string
  prop?: string
  rules?: RuleItem[]
  placeholder?: string
  // 表单特有的属性
  attrs?: {
    clearable?: boolean
    showPassword?: boolean
    disabled?: boolean
    // CSS 样式属性
    style?: CSSProperties
  }
  // 表单项的子元素
  children?: FormOptions[]
  uploadAttrs?: {
    action: string
    header?: string
    method?: 'post' | 'put' | 'patch'
    multiple?: boolean
    data?: any
    name?: string
    withCreadentials?: boolean
    howFileList?: boolean
    drag?: boolean
    accept?: string
    thumbnailMode?: boolean
    listType?: 'text' | 'picture' | 'picture-card'
    autoUpload?: boolean
    limit?: number
  }

}