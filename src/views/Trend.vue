<template>
  <div class="flex">
    <q-trend text="营业额"></q-trend>
    <q-trend type="down" text="销售额"></q-trend>
  </div>
  <div class="flex">
    <q-trend text="营业额" upIconColor="blue">插槽</q-trend>
    <q-trend type="down" text="销售额" downIconColor="black"></q-trend>
  </div>
  <div class="flex">
    <q-trend text="营业额" reverseColor></q-trend>
    <q-trend type="down" text="销售额" reverseColor></q-trend>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.flex {
  display: flex;

  div {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
