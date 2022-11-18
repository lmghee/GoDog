<template>
  <nav class="header_container">
    <router-link to="/">
      <img src="@/assets/img/logo.png" class="logoImg" />
    </router-link>
    <div class="header_btns">
      <!-- link가 메인으로 가지 않을때는 native? -->
      <router-link to="/member/loginform" @click.native="SET_IS_VIS">
        <button class="header_btn">로그인</button>
      </router-link>
      <router-link to="/member/joinform" @click.native="SET_IS_VIS">
        <button class="header_btn">회원가입</button>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";
const visibleStore = "visibleStore";

export default {
  name: "LoginForm",
  methods: {
    ...mapMutations(visibleStore, ["SET_IS_VIS"]),
  },
};
</script>

<style scoped>
@import "@/assets/css/header.css";
</style>
