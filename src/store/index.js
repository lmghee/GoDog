import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import visibleStore from "@/store/modules/visibleStore.js";

export default new Vuex.Store({
  modules: {
    visibleStore,
  },
});
