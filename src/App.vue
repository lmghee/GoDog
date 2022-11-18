<template>
  <div id="app">
    <router-view />
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

export default {
  computed: {
    ...mapState(visibleStore, ["footerAndHeaderVis"]),
  },
};
</script>
