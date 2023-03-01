<template>
  <v-container>
    <div class="container-fluid px-0 mb-5">
      <the-header></the-header>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        img-width="1024"
        img-height="600"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img class="w-100" width="1024" height="600" src="@/assets/img/carousel-1.jpg" alt="Image" />
          </template>
          <div class="carousel-caption">
            <div class="container">
              <div class="row justify-content-start">
                <div class="col-lg-8 text-start">
                  <p class="fs-2 text-white">Welcome to our tour</p>
                  <h1 class="display-4 text-white mb-5 animated slideInRight">with Dog</h1>
                  <router-link to="/map/travelmap" class="btn btn-warning rounded-pill py-3 px-5 animated slideInRight">
                    Explore More</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide>
          <template #img>
            <img class="w-100" width="1024" height="600" src="@/assets/img/carousel-2.jpg" alt="Image" />
          </template>
          <div class="carousel-caption">
            <div class="container">
              <div class="row justify-content-end">
                <div class="col-lg-8 text-end">
                  <p class="fs-2 text-white">waiting for your reviews</p>
                  <h1 class="display-4 text-white mb-5 animated slideInRight">about your trip</h1>
                  <router-link
                    to="/board/boardlist"
                    class="btn btn-warning rounded-pill py-3 px-5 animated slideInRight"
                    >Explore More</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </v-container>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  name: "MainView",
  components: {
    TheHeader,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
@import "@/assets/css/bootstrap.min.css";
</style>
