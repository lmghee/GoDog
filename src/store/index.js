import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import visibleStore from "@/store/modules/visibleStore.js";

const store = new Vuex.Store({
  modules: {
    visibleStore: visibleStore,
  },
});

export default store;
