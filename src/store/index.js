import { createStore } from "vuex";

import visibleStore from "@/store/modules/visibleStore.js";

export default createStore({
  modules: {
    visibleStore: visibleStore,
  },
});
