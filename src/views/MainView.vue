<template>
  <div class="container">
    <TheHeader></TheHeader>
    <div class="main_container">
      <div class="main_container_back_ground">
        <img src="@/assets/img/main.png" class="main_img" />
      </div>
    </div>
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
  name: "MainView",
};
</script>

<style>
@import "@/assets/css/main.css";
</style>
