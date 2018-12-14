<template>
  <div>
  <el-table
    :data="addCart"
    border
    empty-text="购物车是空的，请添加产品"
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
      prop="num"
      label="数量">
    </el-table-column>
    <el-table-column
      prop="op"
      label="操作">
      <template slot-scope="scope">
        <el-button @click="clearItem(addCart[scope.$index])" type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div>{{ addCart.cart }}</div>
  </div>
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
        'addCart': 'addCart'
      })
    },
    methods: {
      ...mapActions([
        'clearItem'
      ])
    }
  }
</script>

<style scoped>

</style>
