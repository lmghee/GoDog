import { join } from "@/api/member";

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
  actions: {
    async confirm(user) {
      await join(user, ({ data }) => {
        if (data == "success") {
          console.log(data);
        }
      });
    },
  },
};

export default visibleStore;
