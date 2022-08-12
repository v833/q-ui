<template>
  <el-table v-loading="loading" v-bind="props" @row-click="onRowClick">
    <template v-for="(item, index) of tableOptions" :key="index">
      <el-table-column v-bind="item">
        <template #default="scoped">

          <template v-if="scoped.row.rowEdit">
            <el-input size="small" v-model="scoped.row[item.prop]"></el-input>
          </template>
          <template v-else>
            <template v-if="(scoped.$index + scoped.column.id) === currentEdit">
              <div style="display: flex">
                <el-input size="small" v-model="scoped.row[item.prop]" type="text" />
                <!-- 事件委托 -->
                <div @click.stop="onClickEditCell">
                  <slot name="editCell" v-if="$slots.editCell"></slot>
                  <div class="icons" :scoped="scoped" v-else>
                    <el-icon-check class="check" @click="onCheck(scoped)"></el-icon-check>
                    <el-icon-close class="close" @click="onClose(scoped)"></el-icon-close>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <slot v-if="item.slot" :name="item.slot" :scoped="scoped"></slot>
              <span v-else>{{ scoped.row[item.prop] }}</span>
              <el-icon-edit class="edit" v-if="item.editable" @click.stop="onEditClick(scoped)"></el-icon-edit>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>
    <el-table-column v-bind="actionOptions">
      <template #default="scoped">
        <slot name="editRow" v-if="scoped.row.rowEdit" :scoped="scoped"></slot>
        <slot name="action" v-else :scoped="scoped"></slot>
      </template>
    </el-table-column>
  </el-table>
  <div v-if="pagination" class="pagination" :style="{ justifyContent: paginationAliginJustify }">
    <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, computed, onMounted, watch } from 'vue';
import { TableOptions } from './types';
import cloneDeep from 'lodash/cloneDeep';

const props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  elementLoadingText: {
    type: String,
    default: '加载中'
  },
  elementLoadingSpinner: {
    type: String,
    default: 'el-icon-loading'
  },
  elementLoadingBackground: {
    type: String,
    default: 'rgba(0, 0, 0, 0.8)'
  },
  elementLoadingSvgColor: {
    type: String,
    default: '#409EFF'
  },
  isEditRow: {
    type: Boolean,
    default: false
  },
  editRowIndex: {
    type: String,
    default: ''
  },
  pagination: {
    type: Boolean,
    default: false
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    default: () => [10, 20, 50]
  },
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  paginationAliginJustify: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left'
  }
})

const emites = defineEmits(['check', 'close', 'update:editRowIndex', 'update:pageSize', 'sizeChange', 'currentChange'])

const tableOptions = computed(() => {
  return props.options.filter(item => !item.action)
})

const actionOptions = computed(() => {
  return props.options.find(item => item.action)
})

const loading = computed(() => {
  return !props.data || props.data.length === 0
})

const currentEdit = ref('')
const onEditClick = (scoped: any) => {
  console.log('scoped: ', scoped);
  // 唯一标识
  currentEdit.value = scoped.$index + scoped.column.id
}


const onCheck = (scoped: any) => {
  emites('check', scoped)
}

const onClose = (scoped: any) => {
  emites('close', scoped)
}

const onClickEditCell = () => {
  currentEdit.value = ''
}

const tableData = ref<any>(cloneDeep(props.data))
const cloneEditRowIndex = ref(props.editRowIndex)

watch(() => props.data, (val) => {
  tableData.value = cloneDeep(val)
  tableData.value.forEach((item: any) => {
    item.rowEdit = false
  })
}, { deep: true, immediate: true })

watch(() => props.editRowIndex, (val) => {
  cloneEditRowIndex.value = val
})

const onRowClick = (row, column) => {
  if (column.label === actionOptions.value.label) {
    // 编辑行操作
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      row.rowEdit = !row.rowEdit
      tableData.value.forEach(item => {
        if (item !== row) {
          item.rowEdit = false
        }
      })
      if (!row.rowEdit) {
        emites('update:editRowIndex', '')
      }
    }
  }
}

const handleSizeChange = (params) => {
  emites('sizeChange', params)
}

const handleCurrentChange = (params) => {
  emites('currentChange', params)
}


</script>

<style lang="scss" scoped>
.edit {
  width: 1rem;
  height: 1rem;
  position: relative;
  top: 2px;
  left: 15px;
  cursor: pointer;
}

.icons {
  display: flex;

  .check {
    color: green;
    width: 1em;
    height: 1em;
    margin-left: 8px;
    position: relative;
    top: 8px;
    cursor: pointer;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  .close {
    color: red;
    margin-left: 8px;
    position: relative;
    top: 8px;
    cursor: pointer;

    svg {
      width: 2em;
      height: 2em;
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 18px;
}
</style>
