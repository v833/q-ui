<template>
  <div class="trend">
    <div class="text">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <el-icon-arrowup :style="{ color: reverseColor ? upIconColor : downIconColor }" v-if="type === 'up'">
      </el-icon-arrowup>
      <el-icon-arrowdown :style="{ color: reverseColor ? downIconColor : upIconColor }" v-else></el-icon-arrowdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, onMounted } from 'vue';
const props = defineProps({
  type: {
    type: String,
    default: 'up'
  },
  text: {
    type: String,
    default: '文字'
  },
  upIconColor: {
    type: String,
    default: '#f5222d'
  },
  downIconColor: {
    type: String,
    default: '#52c41a'
  },
  reverseColor: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ''
  }
})

const slots = useSlots()

onMounted(() => {

})


</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 12px;
    margin-right: 4px;
    color: v-bind(color);
  }

  .icon {
    svg {
      width: .8em;
      height: .8em;
    }
  }
}
</style >
