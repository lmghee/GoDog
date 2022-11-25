<template>
  <div>
    <!-- Topbar Start -->
    <div class="container-fluid bg-light px-0">
      <div class="row g-0 d-none d-lg-flex">
        <div class="col-lg-6 ps-5 text-start">
          <div class="h-100 d-inline-flex align-items-center text-light">
            <span>Follow Us:</span>
            <a class="btn btn-link text-light" href=""><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-link text-light" href=""><i class="fab fa-twitter"></i></a>
            <a class="btn btn-link text-light" href=""><i class="fab fa-linkedin-in"></i></a>
            <a class="btn btn-link text-light" href=""><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="col-lg-6 text-end">
          <div class="h-100 bg-secondary d-inline-flex align-items-center text-dark py-2 px-4">
            <span class="me-2 fw-semi-bold"><i class="fa fa-phone-alt me-2"></i>Call Us:</span>
            <span>+012 345 6789</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-purple navbar-light sticky-top px-4 px-lg-5">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img src="@/assets/logo.png" id="logoImg"
      /></router-link>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          <router-link to="/map/travelmap" class="nav-item nav-link">관광지도</router-link>
          <router-link to="/map/bookmarklist" class="nav-item nav-link" v-if="userInfo">관심지역</router-link>
          <router-link to="/board/boardlist" class="nav-item nav-link">게시판</router-link>
          <a href="#" class="nav-item nav-link active">About</a>
          <div v-if="userInfo"><button class="nav-item nav-link" @click="clickLogout">로그아웃</button></div>
          <div v-if="userInfo">
            <router-link to="/member/mypageform" class="nav-item nav-link" @click="clickLogout">마이페이지</router-link>
          </div>
          <div v-if="!userInfo">
            <router-link to="/member/loginform" class="nav-item nav-link">로그인</router-link>
          </div>
          <div v-if="!userInfo">
            <router-link to="/member/joinform" class="nav-item nav-link">회원가입</router-link>
          </div>
        </div>
        <div class="border-start ps-4 d-none d-lg-block">
          <button type="button" class="btn btn-sm p-0"><i class="fa fa-search"></i></button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "TheHeader",
  data() {
    return {};
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userLogout"]),
    clickLogout() {
      console.log(this.userInfo.userId);
      this.userLogout(this.userInfo.userId);
      sessionStorage.removeItem("access-token");
      sessionStorage.removeItem("refresh-token");
      if (this.$route.path != "/") this.$router.push({ name: "main" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Open+Sans:wght@400;500;600&display=swap");
@import "@/assets/lib/animate/animate.min.css";
@import "@/assets/lib/owlcarousel/assets/owl.carousel.min.css";
@import "@/assets/lib/lightbox/css/lightbox.min.css";
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");
@import "@/assets/css/bootstrap.min.css";
</style>
