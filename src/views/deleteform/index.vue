<template>
  <div class="app-container">
    <el-form ref="form" :rules="rules" :model="form" label-width="120px">
      <el-form-item label="Username" prop="username" required>
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Delete</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { deluser } from '@/api/form'
export default {
  data() {
    return {
      form: {
        username: ''
      },
      rules: {
        username: [{
          max: 10, message: 'Username至多10个字符!', required: true
        }]
      }
    }
  },
  methods: {
    onSubmit() {
      deluser(this.form).then(response => {
        console.log(response)
      })
      this.$message('删除成功')
      this.$router.push('/index')
    },
    onCancel() {
      this.$message({
        message: '已取消删除',
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

