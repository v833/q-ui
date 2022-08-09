<template>
  <el-popover v-model:visible="resultVisible" placement="bottom-start" :width="400" trigger="click">
    <template #reference>
      <div class="result">
        <div ref="buttonRef">{{ result }}</div>
        <div>
          <el-icon-arrowdown :class="{ 'rotate': resultVisible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市"></el-radio-button>
            <el-radio-button label="按省份"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :offset="1" :span="15">
          <el-select size="small" v-model="selectValue" filterable placeholder="请搜索" :filter-method="filterMethod">
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <template v-if="radioValue === '按城市'">
        <div class="city">
          <!-- 字母区域 -->
          <div class="city-item" v-for="(value, key) in cities" @click="onChatClick(key)">{{ key }}</div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in cities" :key="key">
            <el-row style="margin-bottom: 10px" :id="key">
              <el-col :span="2">
                {{ key }}:
              </el-col>
              <el-col class="city-name" :span="22">
                <div @click.stop="onItemClick(item)" class="city-name-item" v-for="(item, index) in value" :key=index>
                  <div>{{ item.name }}</div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
      <template v-else>
        <div class="province">
          <div class="province-item" v-for="(item, index) in Object.keys(province)" :key="index"
            @click="onChatClick(item)">
            {{ item }}
          </div>
          <el-scrollbar max-height="300px">
            <template v-for="(item, index) in Object.values(provinces)" :key="index">
              <template v-for="(item1, index1) in item" :key="index1">
                <el-row style="margin-bottom: 10px" :id="item1.id">
                  <el-col :span="3">
                    {{ item1.name }}:
                  </el-col>
                  <el-col class="province-name" :span="21">
                    <div @click.stop="onItemClick(item2)" class="province-name-item"
                      v-for="(item2, index2) in item1.data" :key=index2>
                      <div>{{ item2 }}</div>
                    </div>
                  </el-col>
                </el-row>
              </template>
            </template>
          </el-scrollbar>
        </div>
      </template>
    </div>

  </el-popover>
</template>

<script setup lang="ts">
import city from './city';
import province from './province.json';
import { ref, onMounted, watch } from 'vue';
import { City, Province } from './type';

const emites = defineEmits(['change'])

const result = ref('请选择')
const radioValue = ref('按城市')
const selectValue = ref('')
const cities = ref(city.cities)
const provinces = ref(province)

const options = ref<City[]>([])
onMounted(() => {
  const values = Object.values(cities.value).flat(2)
  options.value = values
})
const filterMethod = (value: string) => {
  const values = Object.values(cities.value).flat(2)
  if (!value) {
    options.value = values
  } else {
    options.value = values.filter(item => item.name.includes(value) || item.spell.includes(value))
  }

}

const resultVisible = ref(false)

const onItemClick = (city: City | string) => {
  if (typeof city === 'string') {
    result.value = city
  } else {
    result.value = city.name
  }
  resultVisible.value = false

  emites('change', city)
}

const onChatClick = (item: string) => {
  const el = document.getElementById(item)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

watch(selectValue, (value: string) => {
  result.value = value
  emites('change', value)
})

</script>

<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}

.rotate {
  transform: rotate(180deg);
}

svg {
  width: 1em;
  height: 1em;
  position: relative;
  margin-left: 4px;
  top: 2px;
  transition: all 0.25 linear;
}

.container {
  padding: 0 6px;
}

.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;

  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    margin-bottom: 6px;
    border: 1px solid #eee;
    cursor: pointer;
  }
}

.city-name,
.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    margin-bottom: 6px;
    // border: 1px solid #eee;
    cursor: pointer;
  }
}
</style>
