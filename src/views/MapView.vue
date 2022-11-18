<template>
  <div class="container">
    <TheHeader></TheHeader>
    <router-view> </router-view>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  name: "MapView",
};
</script>

<style>
@import "@/assets/css/map.css";
</style>
