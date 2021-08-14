import { createStore } from "vuex";

export default createStore({
  state: {
    isAuthenticated: false,
    token: "",
    isLoading: false,
    user: null,
  },
  mutations: {},
  actions: {},
  modules: {},
});
