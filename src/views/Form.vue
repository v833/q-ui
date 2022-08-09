<template>
  <div>
    <q-form label-width="100px" :options="options"></q-form>
  </div>
</template>

<script setup lang="ts">
import { FormOptions } from '@/components/form/src/types';


const options: FormOptions[] = [
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '长度在 2 到 6 个字符',
        trigger: 'blur'
      }
    ],
    attrs: {
      clearable: true
    }
  },
  {
    type: 'input',
    label: '密码',
    prop: 'password',
    rules: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 15,
        message: '长度在 6 到 15 个字符',
        trigger: 'blur'
      }
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  {
    type: 'select',
    label: '职位',
    placeholder: '请选择职位',
    prop: 'role',
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: ['blur', 'change']
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1'
      },
      {
        type: 'option',
        label: '主管',
        value: '2'
      },
      {
        type: 'option',
        label: '员工',
        value: '3'
      },
    ],
    attrs: {
      clearable: true,
      style: {
        width: '100%'
      }
    }
  },
  {
    type: 'checkbox-group',
    prop: 'lick',
    label: '爱好',
    children: [
      {
        type: 'checkbox',
        label: '游泳',
        value: '1'
      },
      {
        type: 'checkbox',
        label: '羽毛球',
        value: '2'
      },
      {
        type: 'checkbox',
        label: '足球',
        value: '3'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '4'
      }
    ]
  }
]

</script>

<style lang="scss" scoped>
</style>
