import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCart from '@/components/ShoppingCart'
import ProtductList from '@/components/ProductList'
import CartInfo from '@/components/CartInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingCart',
      component: {
        ShoppingCart,
        ProtductList,
        CartInfo
      }
    }
  ]
})
