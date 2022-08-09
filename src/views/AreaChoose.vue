<!--
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 10:15:05
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 11:41:57
-->
<template>
  <div>
    <q-area-choose @get-area-info="getAreaInfo"></q-area-choose>
  </div>
</template>

<script setup lang="ts">
// import qAreaChoose from '@c/area-choose/src/index.vue';

const getAreaInfo = (params: object) => {
  console.log('params: ', params);

}
</script>

<style lang="scss" scoped>
</style>
