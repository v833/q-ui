/*
 * @Description: 无限层级菜单
 * @Author: v833
 * @Date: 2022-08-09 13:12:07
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 16:11:17
 */
import { defineComponent } from 'vue';
import { MenuItem } from './types';
import { PropType } from 'vue';
import { toLine } from '@u/index';

export default defineComponent({
    name: 'Menu',
    props: {
      data: {
        type: Array as PropType<MenuItem[]>,
        default: () => ([]),
        required: true
      },
      defualtActive: {
        type: String,
        default: ''
      },
      router: {
        type: Boolean,
        default: false
      }
    },
    setup(props, ctx) {
      const renderMenu = (data: MenuItem[]) => {
        return data.map((item: MenuItem) => {
          item.i = `el-icon-${toLine(item.icon!)}`;
          const slots = {
            title: () => {
              return <>
                <item.i></item.i>
                <span>{item.name}</span>
              </>
            }
          }
          if (item.children && item.children.length) {
            return (
              <el-sub-menu v-slots={slots} index={item.index}>
                {renderMenu(item.children)}
              </el-sub-menu>
            );
          }
          return (
            <el-menu-item index={item.index} >
              <item.i></item.i>
              <span>{item.name}</span>
            </el-menu-item>
          );
        })
      }
      return () => {
        return (
          <el-menu default-active={props.defualtActive} router={props.router}>
            {renderMenu(props.data)}
          </el-menu>
          )
      }
    }
})