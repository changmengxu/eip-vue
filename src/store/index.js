import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  testData: '啊啊啊啊啊'
}
const getters = {
  // getData: state => state.testData
  getData(state) {
    console.log(state)
    return state.testData
  }
}
const mutations = {
  changeData(state, data) {
      state.testData = data
      // return state.testData
  }
}
const actions = {}
export default {
  state,
  getters,
  mutations,
  actions
}