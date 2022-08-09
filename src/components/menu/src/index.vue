<template>
  <el-menu :defualtActive="defualtActive" :router="router" v-bind="$attrs">
    <template v-for="(item, index) in data" :key="index">
      <el-menu-item v-if="!item.children || !item.children.length" :index="item.index">
        <component :is="`el-icon-${toLine(item.icon)}`"></component>
        <span :style="{ marginLeft: '10px' }">{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu v-else :index="item.index">
        <template #title>
          <component :is="`el-icon-${toLine(item.icon)}`"></component>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="(item1, index1) in item.children" :key="index1" :index="item1.index">
          <component :is="`el-icon-${toLine(item1.icon)}`"></component>
          <span>{{ item1.name }}</span>
        </el-menu-item>
        <!-- <index v-for="(item1, index1) in item.children" :key="index1" :data="item.children" v-bind="$attrs"></index> -->
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { MenuItem } from './types';
import { PropType } from 'vue';
import { toLine } from '@u/index';
const props = defineProps({
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
})


</script>

<style lang="scss" scoped>
</style>
