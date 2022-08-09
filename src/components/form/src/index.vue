<!--
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 22:09:49
 * @LastEditors: v833
 * @LastEditTime: 2022-08-09 23:29:50
-->
<template>
  <el-form :validate-on-rule-change="false" :model="model" :rules="rules" v-bind="$attrs">
    <template v-for="(item, index) in options" :key="index">
      <el-form-item v-if="!item!.children || !item.children!.length" :prop="item.prop" :label="item.label">
        <component :is="`el-${item.type}`" v-bind="item.attrs" v-model="model[item.prop!]"
          :placeholder="item.placeholder"></component>
      </el-form-item>
      <el-form-item v-if="item.children && item.children.length" :prop="item.prop" :label="item.label">
        <component :is="`el-${item.type}`" v-bind="item.attrs" v-model="model[item.prop!]"
          :placeholder="item.placeholder">
          <component v-for="(child, i) in item.children" :is="`el-${child.type}`" :key="i" :label="child.label"
            :value="child.value"></component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script setup lang="ts">

import { FormOptions } from './types';
import { PropType, ref, onMounted } from 'vue';
import cloneDeep from 'lodash/cloneDeep';

const props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  }
})

const model = ref<any>({})

const rules = ref<any>({})

onMounted(() => {
  const _model: any = {}
  const _rules: any = {}

  props.options.forEach((item: FormOptions) => {
    _model[item.prop!] = item.value
    _rules[item.prop!] = item.rules
  })

  model.value = cloneDeep(_model)
  rules.value = cloneDeep(_rules)
})

</script>

<style lang="scss" scoped>
</style>
