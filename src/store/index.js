import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    user: 'Marco Kegne',
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
      state.sidebarVisible = payload.value
    },
  },
  actions: {},
  modules: {},
})
