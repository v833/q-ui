<template>
  <div>
    <el-progress :percentage="p" v-bind="$attrs"></el-progress>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const props = defineProps({
  percentage: {
    type: Number,
    default: 0
  },
  isAnimated: {
    type: Boolean,
    default: false
  },
  time: {
    type: Number,
    default: 3000
  }
})

const p = ref(0)

onMounted(() => {
  if (props.isAnimated) {
    const t = Math.ceil(props.time / props.percentage);
    const timer = setInterval(() => {
      p.value += 1
      if (p.value >= props.percentage) {
        p.value = props.percentage
        clearInterval(timer)
      }
    }, t);
  } else {
    p.value = props.percentage
  }
})

</script>

<style lang="scss" scoped>
::v-deep svg {
  width: 120px;
  height: 120px;
}
</style>
