<template>
  <div class="container">
    <the-header></the-header>
    <router-view></router-view>
    <!-- <the-footer></the-footer> -->
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
// import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    // TheFooter,
  },
  name: "MapView",
};
</script>

<style>
@import "@/assets/css/map.css";
</style>
