<template>
  <div class="app-container">
    <el-form ref="form" :rules="rules" :model="form" label-width="120px">
      <el-form-item label="Username" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="Name" prop="name">
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
      if (value == null) {
        callback()
      }
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
          max: 10, message: 'Username需要1~10个字符!', required: true
        }],
        name: [{
          max: 8, message: 'Name需要1~8个字符！', required: true
        }],
        age: [{
          validator: validateAge, required: false
        }],
        telenum: [{
          min: 11, max: 11, message: '请输入11位号码！'
        }]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          submit(this.form).then(response => {
            console.log(response)
            if (response.existence === 1) { this.$message('用户已存在') } else {
              this.$message('提交成功')
              this.$router.push('/index')
            }
          })
        } else {
          console.log('error submit')
        }
      })
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

