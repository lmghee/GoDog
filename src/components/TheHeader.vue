<template>
  <nav class="header_container">
    <router-link to="/">
      <img src="@/assets/img/logo.png" class="logoImg" />
    </router-link>
    <div class="header_btns">


      <div v-if="userInfo">
          <button class="header_btn" @click="clickLogout">로그아웃</button>
          <router-link to="/member/mypageform">
            <button class="header_btn">마이페이지</button>
          </router-link>
        </div>
        <div v-else>
          <router-link to="/member/loginform">
          <button class="header_btn">로그인</button>
          </router-link>
          <router-link to="/member/joinform">
          <button class="header_btn">회원가입</button>
          </router-link>
        </div>
    </div>
  </nav>
</template>

<script>

import { mapState, mapGetters, mapActions } from "vuex";

const memberStore = "memberStore";


export default {
  name: "TheHeader",
  data() {
    return {
      
    };
  },
  computed:{
    ...mapState(memberStore, ["isLogin", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userLogout"]),
    clickLogout(){
      console.log(this.userInfo.userId);
      this.userLogout(this.userInfo.userId);
      sessionStorage.removeItem("access-token");
      sessionStorage.removeItem("refresh-token");
      if (this.$route.path != "/") this.$router.push({ name: "main" });
    }
  },
};
</script>

<style scoped>
@import "@/assets/css/header.css";
</style>
