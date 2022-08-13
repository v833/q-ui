<!--
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-12 23:53:06
 * @LastEditors: v833
 * @LastEditTime: 2022-08-13 00:58:12
-->
<template>
  <div id="calendar">

  </div>
</template>

<script setup lang="ts">
import '@fullcalendar/core/vdom'
import { Calendar, EventClickArg, EventContentArg } from '@fullcalendar/core';
import daygrid from '@fullcalendar/daygrid';
import interaction, { DateClickArg } from '@fullcalendar/interaction';
import { EventItem } from './types';
import { onMounted, PropType, ref, watch } from 'vue';

const props = defineProps({
  local: {
    type: String,
    default: 'zh-cn'
  },
  // 视图模式
  initalView: {
    type: String,
    default: 'dayGridMonth'
  },
  // 按钮文字
  buttonText: {
    type: Object,
    default: () => ({
      today: '今天',
      month: '月',
      week: '周',
      day: '日',
      prevYear: '上一年',
      nextYear: '下一年',
      prev: '上一月',
      next: '下一月',
    })
  },
  // 头部工具栏
  headerToolbar: {
    type: Object,
    default: () => ({
      start: 'title',
      center: '',
      end: 'prev today next'
    })
  },
  // 底部工具栏
  footerToolbar: {
    type: Object,
    default: () => ({})
  },
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => ([])
  },
  displayEventEnd: {
    type: Boolean,
    default: false
  },
  eventContent: {
    type: Function as PropType<(arg: EventContentArg) => string>
  },
})

const emits = defineEmits(['date-click', 'event-click'])

const calendar = ref<Calendar>();
const renderCalendar = () => {
  const el = document.getElementById('calendar');
  if (el) {
    calendar.value = new Calendar(el, {
      locale: props.local,
      plugins: [daygrid, interaction],
      initialView: props.initalView,
      headerToolbar: props.headerToolbar,
      footerToolbar: props.footerToolbar,
      buttonText: props.buttonText,
      eventSources: [
        {
          events(e, callback) {
            if (props.events.length) {
              callback(props.events)
            } else {
              callback([])
            }
          }
        }
      ],
      dateClick(info: DateClickArg) {
        emits('date-click', info)
      },
      eventClick(info: EventClickArg) {
        emits('event-click', info)
      },
      displayEventEnd: props.displayEventEnd,
      eventContent: props.eventContent,
    })
    calendar.value.render()
  }
}

watch(() => props.events, () => {
  renderCalendar()
}, { deep: true })

onMounted(() => {
  renderCalendar()
})


</script>

<style lang="scss" scoped>
</style>
