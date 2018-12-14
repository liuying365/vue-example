<template>
  <div>
    <p class="integer integer-red">
      <animated-integer :value="num"></animated-integer>
    </p>
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 1000
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.integer {
  font-size: 20px;
  font-weight: 700;

  &-red {
    color: red;
  }
}
</style>
