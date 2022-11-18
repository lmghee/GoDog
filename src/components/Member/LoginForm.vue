<template>
  <div class="login_form_container">
    <div class="login_form_left_container">
      <router-link to="/">
        <img src="@/assets/img/logo.png" class="logoImg2" />
      </router-link>
      <p class="login_fomr_p">가자개가 추천하는 여행지로반려동물과</p>
      <p class="login_fomr_p">더 아름답고소중한 추억을 만들어보세요</p>
    </div>
    <div class="login_form_right_container">
      <router-link @click.native="home" to="/">
        <button class="login_form_delete_btn">x</button>
      </router-link>
      <div class="login_form_right_inner_container">
        <h1 class="login_form_right_title">로그인</h1>
        <form class="login_form">
          <p class="login_form_right_p">ID</p>
          <input class="login_form_input" />
          <div class="login_form_empty"></div>
          <p class="login_form_right_p">Password</p>
          <input class="login_form_input" />
        </form>
        <button class="login_form_loginBtn">Login</button>
        <div class="login_form_info">
          <p class="login_form_info_p">
            저희 사이트에 처음이신가요?&nbsp;&nbsp;&nbsp;
          </p>
          <p class="login_form_info_p2">가입하기</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const visibleStore = "visibleStore";

export default {
  name: "LoginForm",
  computed: {
    ...mapState(visibleStore, ["footerAndHeaderVis"]),
  },
  methods: {
    home: function () {
      console.log("12312312");
    },
  },
};
</script>

<style>
@import "@/assets/css/member.css";
</style>
