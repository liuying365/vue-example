import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  counter: state => state.count
}

const actions = {
  increment ({commit}) {
    commit('increments')
  }
}

const mutations = {
  increments (state) {
    state.count++
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
