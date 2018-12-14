<template>
  <el-table
    :data="list"
    border
    style="width: 800px">
    <el-table-column
      prop="id"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格">
    </el-table-column>
    <el-table-column
      prop="op"
      label="操作">
      <template slot-scope="scope">
        <el-button @click="add(list[scope.$index])" type="primary" size="small">加入购物车</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters({
        'list': 'prolist'
      })
    },
    methods: {
      ...mapActions([
        'add',
      ])
    }
  }
</script>

<style scoped>

</style>
