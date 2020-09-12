import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: undefined,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCT(state, product) {
      state.product = product
    },
  },
  actions: {
    setProducts({ commit }) {
      Axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline').then((response) => {
        commit('SET_PRODUCTS', response.data)
      })
    },
    setProduct({ commit }, id) { //commit llama a mutaciones
      Axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline/${id}`).then((response) => {
        commit('SET_PRODUCT', response.data)
      })
    }
  },
  modules: {
  }
})
