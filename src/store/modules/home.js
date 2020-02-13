const state = {
    testData: ''
}
const getters = {
    getData: state => state.testData
}
const mutations = {
    changeData (state, data) {
        state.testData = data
    }
}
const actions = {}
export default {
    state,
    getters,
    mutations,
    actions
}