import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: undefined,
    cart: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCT(state, product) {
      state.product = product
    },
    ADD_CART(state, product) {
      state.cart.push(product)
    },
    REMOVE_CART(state, product) {
      let index = state.cart.indexOf(product)
      if (index > -1) {
        state.cart.splice(index, 1)
      }
      //state.cart.splice(state.cart.indexOf(product, 1))
    }
  },
  actions: {
    setProducts({ commit }) {
      Axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline').then((response) => {
        commit('SET_PRODUCTS', response.data)
      })
    },
    setProduct({ commit }, id) { //commit llama a mutaciones
      Axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline/&${id}`).then((response) => {
        commit('SET_PRODUCT', response.data)
      })
    },
    addCart({ commit }, product) {
      commit('ADD_CART', product)
    },
    removeCart({ commit }, product) {
      commit('REMOVE_CART', product)
    }
  },
  modules: {
  }
})
