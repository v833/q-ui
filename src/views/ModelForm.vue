<template>
  <div>
    <el-button type="primary" @click="onClick">open</el-button>
    <q-model-form v-model:visible="visible" :options="options">
      <template #footer="{ form }">
        <el-button type="primary" @click="visible = false">取消</el-button>
        <el-button @click="onConfirm(form)">确定</el-button>
      </template>
    </q-model-form>
  </div>
</template>

<script setup lang="ts">
import { FormOptions } from '@/components/form/src/types';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';


const visible = ref(false)

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
    ],
    rules: [
      {
        required: true,
        message: '请至少选择一项',
        trigger: 'change'
      }
    ],
  },
  {
    type: 'radio-group',
    prop: 'gender',
    label: '性别',
    children: [
      {
        type: 'radio',
        label: '男',
        value: '1'
      },
      {
        type: 'radio',
        label: '女',
        value: '2'
      },
      {
        type: 'radio',
        label: '保密',
        value: '3'
      }
    ],
    rules: [
      {
        required: true,
        message: '请选择性别',
        trigger: 'change'
      }
    ]
  },
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    uploadAttrs: {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      limit: 3
    }
  },
  {
    type: 'editor',
    label: '描述',
    prop: 'desc',
    placeholder: '请输入描述',
  }
]

const onClick = () => {
  visible.value = true
}

const onConfirm = (form: any) => {
  const validate = form.validate()
  validate((valid: boolean) => {
    if (valid) {
      const formData = form.getFormData()
      console.log('formData: ', formData);
      ElMessage.success('提交成功')
      visible.value = false

    } else {
      ElMessage.error('请检查表单是否填写正确')
    }
  })
}

</script>

<style lang="scss" scoped>
</style>
