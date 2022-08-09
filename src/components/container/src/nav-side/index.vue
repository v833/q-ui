<!--
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 08:37:32
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 08:54:18
-->
<template>
  <el-menu default-active="1" :collapse="isCollapse" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  isCollapse: boolean;
}>()

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
