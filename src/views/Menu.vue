<!--
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 12:34:29
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 13:50:49
-->
<template>
  <div style="width: 200px;height:100vh">
    <q-infinite-menu :data="data" defaultActive="1"></q-infinite-menu>
  </div>
</template>

<script setup lang="ts">
const data = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document',
    children: [
      {
        name: '导航1-1',
        index: '1-1',
        icon: 'document',
        children: [
          {
            name: '导航1-1-1',
            index: '1-1-1',
            icon: 'document'
          },
        ]
      },
    ]
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document'
  },
  {
    name: '导航4',
    index: '4',
    icon: 'document'
  },
]
</script>

<style lang="scss" scoped>
</style>
