<!--
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 08:37:32
 * @LastEditors: v833
 * @LastEditTime: 2022-08-10 23:13:42
-->
<template>
  <q-menu :data="data" :default-active="activeName" :collapse="isCollapse" class="el-menu-vertical-demo" router>
  </q-menu>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

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
    index: '/city-select'
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
    icon: 'Setting',
    name: '弹出框表单',
    index: '/model-form'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  },

]

const route = useRoute()
const activeName = computed(() => {
  return route.path
})

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
