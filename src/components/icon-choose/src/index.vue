<!--
 * @Description: 图标选择
 * @Author: v833
 * @Date: 2022-08-09 08:59:05
 * @LastEditors: v833
 * @LastEditTime: 2022-08-13 12:29:41
-->
<template>
  <div>
    <el-button @click="onClick" type="primary" :title="title">
      图标选择
      <slot></slot>
    </el-button>

    <el-dialog :title="title" v-model="visible" width="800px" @close="closed">
      <el-scrollbar height="500px">
        <div class="container">
          <div v-for="(item, index) in Object.keys(Icons)" :key="index" class="item"
            @click.stop.prevent="onIconChoose(item)">
            <el-tooltip :content="`复制<el-icon-${toLine(item)} />到粘贴板`">
              <component :is="`el-icon-${toLine(item)}`"></component>
            </el-tooltip>
            <div>{{ item }}</div>
          </div>
        </div>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" scoped>
import * as Icons from '@element-plus/icons'
import { toLine, useCopy } from '@u/index';
import { ElMessage } from 'element-plus';

const props = defineProps<{
  title: string;
  visible: boolean;
}>()

const emits = defineEmits(['update:visible'])

const onClick = () => {
  updateVisible()
}

const closed = () => {
  updateVisible()
}

const updateVisible = () => {
  emits('update:visible', !props.visible)
}

const onIconChoose = (params: string) => {
  useCopy(toLine(`<el-icon-${toLine(params)} />`))
  ElMessage.success('复制成功')
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .item {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
  }
}

svg {
  width: 2em;
  height: 2em;
}
</style>
