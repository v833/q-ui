<!--
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 08:37:32
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 16:29:39
-->
<template>
  <q-menu :data="data" :defualt-active="$route.path" :collapse="isCollapse" class="el-menu-vertical-demo" router>
  </q-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  isCollapse: boolean;
}>()

const data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/icon-choose'
  },
  {
    icon: 'Menu',
    name: '菜单',
    index: '/menu'
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/area-choose'
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trend'
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/city-choose'
  },
  {
    icon: 'DArrowRight',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'ScaleToOriginal',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'Setting',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  },

]

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
