import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexItem: [],
    subItem: [],
  },
  mutations: {
    addIndex(state, data) {
      state.indexItem = data
    },
    addSubItem(state, data) {
      state.subItem = data
    },
  },
  actions: {

  },
})
