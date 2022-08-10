<!--
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-10 23:11:26
 * @LastEditors: v833
 * @LastEditTime: 2022-08-10 23:36:04
-->
<template>
  <el-dialog v-model="visible" @close="onClosed" v-bind="$attrs" width="900px">
    <template #default>
      <q-form :options="options" label-width="80px" ref="form" @on-change="onChange" @before-upload="beforeUpload"
        @on-preview="onPreview" @on-remove="onRemove" @before-remove="beforeRemove" @on-success="onSuccess"
        @on-exceed="onExceed" />
    </template>
    <template #footer>
      <slot name="footer" :form="form"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { FormOptions } from '@/components/form/src/types';
import { PropType, ref } from 'vue';


const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    default: () => ([]),
    required: true
  },
  onChange: {
    type: Function
  },
  beforeUpload: {
    type: Function
  },
  onPreview: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  beforeRemove: {
    type: Function
  },
  onSuccess: {
    type: Function
  },
  onExceed: {
    type: Function
  },
})

const form = ref(null)


const emits = defineEmits(['update:visible'])

const onClosed = () => {
  emits('update:visible', false)
}


</script>

<style lang="scss" scoped>
</style>
