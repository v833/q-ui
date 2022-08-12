<!--
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-12 23:52:24
 * @LastEditors: v833
 * @LastEditTime: 2022-08-13 01:00:19
-->
<template>
  <div>
    <q-calendar displayEventEnd :events="events" @date-click="onDateClick" @event-click="onEventClick"
      :event-content="eventContent"></q-calendar>
  </div>
</template>

<script setup lang="ts">
import { EventItem } from '@/components/calendar/src/types';
import { ref } from 'vue';


const events = ref<EventItem[]>(
  [
    {
      title: 'shopping',
      start: '2022-08-12 08:00:00',
      end: '2022-08-14',
      editable: true
    },
    {
      title: 'coding',
      start: '2022-08-10',
      end: '2022-08-11',
    },
  ]
)


const onDateClick = (params) => {
  console.log('params: ', params);
  events.value.push({
    title: 'new event',
    start: params.dateStr,
    end: params.dateStr,
    editable: true
  })
}

const onEventClick = (params) => {
  console.log('params: ', params);
}

function eventContent(arg) {
  const el = document.createElement('div');
  if (arg.timeText) {
    const timeTextArr = arg.timeText.split('-');
    const start = timeTextArr[0].replace('上午', '').replace('下午', '').replace('时', '').replace(/s+/g, '');
    const end = timeTextArr[1].replace('上午', '').replace('下午', '').replace('时', '').replace(/s+/g, '');
    el.innerHTML = `<span>开始时间:${start},
          结束时间:${end}</span>`;
    return {
      domNodes: [el]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
