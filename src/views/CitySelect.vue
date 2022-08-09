<!--
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 17:10:14
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 20:17:24
-->
<template>
  <div>
    <q-city-select @change="onChange"></q-city-select>
  </div>
</template>

<script setup lang="ts">


const onChange = (params: any) => {
  console.log('params: ', params);

}

</script>

<style lang="scss" scoped>
</style>
