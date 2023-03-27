import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    user: {
      username: 'rootDNA',
      email: 'aubindna@gmail.com',
      password: '123455',
    },
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
    UpdateUser(state, payload) {
      state.user = payload.value
    },
  },
  actions: {},
  modules: {},
})
