import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import memberStore from "@/store/modules/memberStore.js";
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  modules: {
    memberStore,
  },
  plugins:[
    createPersistedState({
      storage: sessionStorage,
    }),
  ]
});
