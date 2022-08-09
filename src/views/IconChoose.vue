<!--
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 08:59:54
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 11:42:00
-->
<template>
  <div>
    <q-icon-choose v-model:visible="visible" title="图标选择"></q-icon-choose>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import qIconChoose from '@c/icon-choose/src/index.vue';

const visible = ref(false)

</script>

<style lang="scss" scoped>
</style>
