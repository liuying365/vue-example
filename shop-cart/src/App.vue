<template>
  <div id="app">
    <h1>产品</h1>
    <product-list/>
    <h1>购物车</h1>
    <br>
    <shopping-cart/>
    <cart-info/>
  </div>
</template>

<script>
  import ProductList from './components/ProductList.vue'
  import ShoppingCart from './components/ShoppingCart.vue'
  import CartInfo from './components/CartInfo.vue'
export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart,
    CartInfo
  }
}
</script>

<style>
#app {
  width: 800px;
  margin: 0 auto;
}
</style>
