import Vuex from 'vuex'
import 'vue-use-vuex'

const state = {
  items: [{
    name: 'Article1'
  }]
}

const mutations = {
  ADD_ITEM: (state, name) => {
    state.items.push({
      name: name
    })
  }
}

let store = new Vuex.Store({

  state: state,

  mutation: mutations,

  getters: {},

  actions: {}

})

global.store = store

export default store