<!--
 * @Description: 省市区选择
 * @Author: v833
 * @Date: 2022-08-09 10:14:34
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 11:08:47
-->
<template>
  <div class="container">
    <el-select placeholder="请选择省份" v-model="province" clearable>
      <el-option v-for="province in ChinaMap" :label="province.name" :value="province.code" :key="province.code">
      </el-option>
    </el-select>
    <el-select style="margin: 0 10px" placeholder="请选择城市" v-model="city" clearable>
      <el-option v-for="city in cityMap" :label="city.name" :value="city.code" :key="city.code"></el-option>
    </el-select>
    <el-select placeholder="请选择区域" v-model="area" clearable>
      <el-option v-for="area in areaMap" :label="area.name" :value="area.code" :key="area.code">
      </el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import ChinaMap from './area.json';
import { ref, watch, watchEffect } from 'vue';

interface Area {
  name: string;
  code: string;
  children?: Area[];
}

const emits = defineEmits(['getAreaInfo'])


const province = ref('')

const cityMap = ref<Area[]>([])
const city = ref('')

const areaMap = ref<Area[]>([])
const area = ref('')

watch(province, () => {
  city.value = ''
  area.value = ''
  cityMap.value = ChinaMap.find(item => item.code === province.value)?.children || []
})

watch(city, () => {
  area.value = ''
  areaMap.value = cityMap.value.find(item => item.code === city.value)?.children || []
})

watch(area, (value) => {
  if (!value) return
  emits('getAreaInfo', {
    province: province.value,
    city: city.value,
    area: area.value
  })
}


)

</script>

<style lang="scss" scoped>
</style>
