const state = {
  // 产品列表
  product_list: [{
    id: 12,
    name: '梅菜扣肉',
    price: 30,
  },{
    id: 33,
    name: '红烧肉',
    price: 50,
  },{
    id: 11,
    name: '香辣虾',
    price: 80,
  },{
    id: 25,
    name: '涮羊肉',
    price: 80,
  }],
  // 添加到购物车
  addCart: []
}

const getters = {
  prolist: (state) => state.product_list,
  addCart: (state) => {
    return state.addCart.map(({id, num}) => {
      let cart = state.product_list.find((item) => item.id === id)
      return  {
        ...cart,
        num
      }
    })
  },
  totalPrice: (state, getters) => {
    let totalPrice = 0;
    getters.addCart.forEach(item => {
      totalPrice += item.price * item.num
    })
    return totalPrice
  },
  totalNum: (state, getters) => {
    let totalNum = 0;
    getters.addCart.forEach(item => {
      totalNum += item.num
    })
    return totalNum
  }
}

const mutations = {
  addToCart (state, {id}) {
    let record = state.addCart.find(item => item.id === id)
    if (!record) {
      state.addCart.push({
        id,
        num: 1
      })
    } else {
      record.num++
    }
    console.log(state.addCart, record)
  },
  clear (start) {
    state.addCart = []
  },
  clearItem (state, {id}) {
    state.addCart = state.addCart.filter((item) => {
      return item.id !== id
    })
  }
}

const actions = {
  add ({commit}, product) {
    commit('addToCart', {
      id: product.id
    })
  },
  clear ({commit}) {
    commit('clear')
  },
  clearItem ({commit}, cartPro) {
    commit('clearItem', {
      id: cartPro.id
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
