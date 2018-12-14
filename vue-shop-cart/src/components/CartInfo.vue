<template>
  <div class="info">
    <span>
      总数：{{ num }}
    </span>
    <span>
      总价：{{ price }}
    </span>
    <button @click="clear">清空购物车</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        price: 'totalPrice',
        num: 'totalNum'
      })
    },
    methods: {
      ...mapActions([
        'clear'
      ])
    }
  }
</script>

<style scoped>
  .info {
    margin-top: 20px;
    background-color: #ccc;
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .info span {
    float: left;
    width: 33.33%;
  }
  button {
    width: 33.33%;
    border: 0 none;
    padding: 0;
    margin: 0;
    outline-style: none;
    color: #fff;
    background-color: red;
    line-height: 40px;
    display: block;
    cursor: pointer;
  }
</style>
