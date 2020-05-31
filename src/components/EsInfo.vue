<template>
  <div>
    <el-form>
      <el-form-item>
        {{name}}
        <el-button type="primary" round icon="el-icon-search" v-on:click="esindices()">查看es索引信息</el-button>
      </el-form-item>
      <el-table :data="tableData" ref="multipleTable" aria-label="" stripe border style="width: 100%">
        <el-table-column prop="health" label="健康状态" width="150"></el-table-column>
        <el-table-column prop="status" label="状态" width="150"></el-table-column>
        <el-table-column prop="index" label="索引" width="150"></el-table-column>
        <el-table-column prop="uuid" label="UUID" width="150"></el-table-column>
        <el-table-column prop="pri" label="主分片" width="150"></el-table-column>
        <el-table-column prop="rep" label="副本" width="150"></el-table-column>
        <el-table-column prop="docsCount" label="doc总数" width="150"></el-table-column>
        <el-table-column prop="docsDeleted" label="删除的文档" width="150"></el-table-column>
        <el-table-column prop="storeSize" label="存储大小" width="150"></el-table-column>
        <el-table-column prop="priStoreSize" label="主存储大小" width="150"></el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'EsInfo',
  data () {
    console.log('es info data')
    return {
      name: 'esindices',
      cluster_name: '',
      tableData: []
    }
  },
  created () {
    console.log('es info create')
  },
  mounted () {
    console.log('es info mounted')
    this.esindices()
  },
  methods: {
    esindices: function () {
      var t = []
      this.axios.get('/api/_cat/indices?format=json')
        .then(response => {
          // this.tableData = response.data
          for (let i = 0; i < response.data.length; i++) {
            var a = new Array(response.data[i].length)
            a['health'] = response.data[i]['health']
            a['status'] = response.data[i]['status']
            a['index'] = response.data[i]['index']
            a['uuid'] = response.data[i]['uuid']
            a['pri'] = response.data[i]['pri']
            a['rep'] = response.data[i]['rep']
            a['docsCount'] = response.data[i]['docs.count']
            a['docsDeleted'] = response.data[i]['docs.deleted']
            a['storeSize'] = response.data[i]['store.size']
            a['priStoreSize'] = response.data[i]['pri.store.size']
            t[i] = a
          }
          this.tableData = t
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
