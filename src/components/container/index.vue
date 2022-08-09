
<template>
  <el-container>
    <el-aside width="auto">
      <NavSide :isCollapse="isCollapse"></NavSide>
    </el-aside>
    <el-container>
      <el-header>
        <NavHeader v-model:isCollapse="isCollapse"></NavHeader>
      </el-header>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <keep-alive>
            <component :is="Component" :key="route.path"></component>
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import NavSide from './src/nav-side/index.vue';
import NavHeader from './src/nav-header/index.vue';

const isCollapse = ref(false);


</script>

<style lang="scss">
.el-header {
  padding: 0;
  border-bottom: 1px solid #e8e8e8;
}
</style>
