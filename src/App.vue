<template>
  <div id="app">
    <TheHeader v-if="footerAndHeaderVis" />
    <router-view />
    <TheFooter v-if="footerAndHeaderVis" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
}
</style>

<script>
import { mapState } from "vuex";

const visibleStore = "visibleStore";

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  computed: {
    ...mapState(visibleStore, ["footerAndHeaderVis"]),
  },
};
</script>
