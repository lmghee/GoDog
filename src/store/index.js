import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import visibleStore from "@/store/modules/visibleStore.js";
import memberStore from "@/store/modules/memberStore";
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  modules: {
    visibleStore,
    memberStore,
  },
  plugins:[
    createPersistedState({
      storage: sessionStorage,
    }),
  ]
});
