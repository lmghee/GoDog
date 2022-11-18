const visibleStore = {
  namespaced: true,
  state: {
    footerAndHeaderVis: true,
  },
  mutatioms: {
    SET_IS_VIS: (state, footerAndHeaderVis) => {
      state.footerAndHeaderVis = footerAndHeaderVis;
    },
  },
};

export default visibleStore;
