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
        <el-table-column align="center" label="Actions" width="120">
          <template slot-scope="{row}">
            <el-button
              v-if="row.edit"
              type="success"
              size="small"
              icon="el-icon-circle-check-outline"
              @click="confirmEdit(row)"
            >
              Ok
            </el-button>
            <el-button
              v-else
              type="primary"
              size="small"
              icon="el-icon-edit"
              @click="row.edit=!row.edit"
            >
              Edit
            </el-button>
          </template>
        </el-table-column>
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
    },
    confirmEdit(row) {
      row.edit = false
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    }
  }
}
</script>
