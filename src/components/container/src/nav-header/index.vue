<template>
  <div class="header">
    <span @click="onToggleClick">
      <el-icon-expand style="margin-right: 10px" v-if="isCollapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  isCollapse: boolean;
}>();
const emits = defineEmits(['update:isCollapse']);
const onToggleClick = () => {
  emits('update:isCollapse', !props.isCollapse);
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;

}
</style>
