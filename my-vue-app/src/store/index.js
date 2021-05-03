import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      data: {},
    };
  },
  getters: {
    getData: (state) => state.data,
    getBasic : (state) => state.data,
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    }
  }
});

export default store;