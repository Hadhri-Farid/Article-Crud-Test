import Vuex from 'vuex'
import 'vue-use-vuex'

const state = {

  items: [{
    name: 'Article1',
    text: 'Salut',
    img: 'img de chat'
  }]
}

const mutations = {
  ADD_ITEMS: (state, name, text, img) => {
    state.items.push({
      name: name,
      text: text,
      img: img
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