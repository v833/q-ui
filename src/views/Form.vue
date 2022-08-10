<template>
  <div>
    <q-form ref="form" label-width="100px" :options="options" @on-change="handleChange"
      @before-upload="handleBeforeUpload" @on-preview="handlePreview" @on-remove="handleRemove"
      @before-remove="beforeRemove" @on-success="handleSuccess" @on-exceed="handleExceed">
      <template #uploadArea>
        <el-button size="small" type="primary">click me</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc;font-size: 12px;">jpg/png files with a size less than 500KB.</div>
      </template>
      <template #action="scoped">
        <el-button type="primary" @click="onSubmit(scoped)">提交</el-button>
        <el-button @click="resetForm(scoped)">重置</el-button>
      </template>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { FormOptions } from '@/components/form/src/types';
import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';

const form = ref(null)

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
  }
]
const onSubmit = (scoped: any) => {
  scoped.form.validate((valid: boolean) => {
    if (valid) {
      console.log(scoped.model);
      ElMessage.success('提交成功');
    } else {
      ElMessage.error('请检查表单是否填写完整')
    }
  })
}
const resetForm = (scoped: any) => {
  console.log('scoped: ', scoped);
  console.log('重置');
  scoped.form.resetFields()
}
const handleRemove = (file: any, fileList: any) => {
  console.log('handleRemove')
  console.log(file, fileList)
}
const handlePreview = (file: any) => {
  console.log('handlePreview')
  console.log(file)
}
const beforeRemove = (val: any) => {
  console.log('beforeRemove')
  return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`)
}
const handleExceed = (val: any) => {
  console.log('handleExceed', val)
  ElMessage.warning(
    `The limit is 3, you selected ${val.files.length
    } files this time, add up to ${val.files.length + val.fileList.length} totally`
  )
}
const handleSuccess = (val: any) => {
  console.log('success')
  console.log(val)
}
const handleChange = (val: any) => {
  console.log('change')
  console.log(val)
}
const handleBeforeUpload = (val: any) => {
  console.log('handleBeforeUpload')
  console.log(val)
}

</script>

<style lang="scss" scoped>
</style>
