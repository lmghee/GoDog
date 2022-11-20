<template>
  <div class="container">
    <TheHeader></TheHeader>
    <div class="main_container">
      <div class="main_container_back_ground">
        <h1 class="main_container_title">Pets Are Family</h1>
        <h4 class="main_container_sub_title">
          Find the best Professional pet services near you
        </h4>
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
