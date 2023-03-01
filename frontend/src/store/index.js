import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import memberStore from "@/store/modules/memberStore.js";
import boardStore from "@/store/modules/boardStore";
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  modules: {
    memberStore,
    boardStore,
  },
  plugins: [
    createPersistedState({
      storage: sessionStorage,
    }),
  ],
});
