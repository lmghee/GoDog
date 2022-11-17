<template>
  <div id="app">
    <TheHeader v-if="footerAndHeaderVis" />
    <router-view :val="footerAndHeaderVis" @val="headerAndFooterVis" />
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
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      footerAndHeaderVis: true,
    };
  },
  methods: {
    headerAndFooterVis() {
      console.log("test");
      this.$data.footerAndHeaderVis = false;
    },
  },
};
</script>
