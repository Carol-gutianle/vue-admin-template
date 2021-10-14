<template>
  <el-table :data="list" border fit highlight-current-row style="width: 100%">
    <el-table-column
      v-loading="loading"
      align="center"
      label="ID"
      width="65"
      element-loading-text="请给我点时间！"
    >
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column v-for="item in lableList" :key="item" :prop="item" width="180px" align="center" :label="item" />
  </el-table>
</template>

<script>
import { fetchList } from '@/api/database'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  props: {
    type: {
      type: String,
      default: 'users'
    }
  },
  data() {
    return {
      lableList: [],
      list: [],
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id'
      },
      loading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      this.lableList = ['username', 'password']
      this.$emit('create') // for test
      fetchList(this.listQuery).then(response => {
        console.log('来了')
        this.lableList = response.data.label
        this.list = response.data.res
        this.loading = false
      })
    }
  }
}
</script>

