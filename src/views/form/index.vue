<template>
  <div class="app-container">
    <el-form ref="form" :rules="rules" :model="form" label-width="120px">
      <el-form-item label="Username" prop="username" required>
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="Name" prop="name" required>
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input v-model.number="form.age" type="number" />
      </el-form-item>
      <el-form-item label="Telenum" prop="telenum">
        <el-input v-model="form.telenum" type="text" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { submit } from '@/api/form'
export default {
  data() {
    const validateAge = (rule, value, callback) => {
      if (value < 0 || value > 256) {
        callback(new Error('请输入正确的年龄！'))
      } else {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字！'))
        }
        callback()
      }
    }
    return {
      form: {
        name: '',
        username: '',
        age: null,
        telenum: ''
      },
      rules: {
        username: [{
          max: 10, message: 'Username至多10个字符!'
        }],
        name: [{
          max: 8, message: 'Name至多8个字符！'
        }],
        age: [{
          validator: validateAge
        }],
        telenum: [{
          min: 11, max: 11, message: '请输入11位号码！'
        }]
      }
    }
  },
  methods: {
    onSubmit() {
      submit(this.form).then(response => {
        console.log(response)
      })
      this.$message('提交成功')
      this.$router.push('/index')
    },
    onCancel() {
      this.$message({
        message: '已取消提交',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

