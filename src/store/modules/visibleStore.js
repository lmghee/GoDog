const visibleStore = {
  namespaced: true,
  state: {
    footerAndHeaderVis: true,
  },
  mutations: {
    SET_IS_VIS: (state) => {
      state.footerAndHeaderVis = !state.footerAndHeaderVis;
    },
  },
};

export default visibleStore;
