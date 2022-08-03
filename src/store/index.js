import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// Vuex persist config
const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  reducer: (state) => ({
    carrito: state.carrito,
    customer: state.customer
  }),
  storage: window.localStorage,
})

export default new Vuex.Store({
  state: {
    vinos: [],
    carrito: [],
    customer: []
  },
  getters,
  mutations,
  actions,
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
