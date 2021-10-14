<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="opData"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <template>
        <el-table-column align="center" label="Record" prop="OpResult" />
      </template>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      opData: [],
      listLoading: true,
      Record: 'Record'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        console.log(response)
        this.opData = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
