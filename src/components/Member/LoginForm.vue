<template>
  <div class="login_form_container">
    <div class="login_form_left_container">
      <router-link to="/">
        <img src="@/assets/img/logo.png" class="logoImg2" />
      </router-link>
      <p class="login_fomr_p">가자개가 추천하는 여행지로 반려동물과</p>
      <p class="login_fomr_p">더 아름답고 소중한 추억을 만들어보세요</p>
    </div>
    <div class="login_form_right_container">
      <router-link to="/">
        <button class="login_form_delete_btn">x</button>
      </router-link>
      <div class="login_form_right_inner_container">
        <h1 class="login_form_right_title">로그인</h1>
        <form class="login_form">
          <p class="login_form_right_p">ID</p>
          <input
            class="login_form_input"
            type="text"
            id="id"
            v-model="user.userId"
            name="userId"
            @keyup.enter="confirm"
          />
          <div class="login_form_empty"></div>
          <p class="login_form_right_p">Password</p>
          <input
            class="login_form_input"
            type="text"
            id="password"
            v-model="user.userPwd"
            name="userPassword"
            @keyup.enter="confirm"
          />
        </form>
        <button class="login_form_loginBtn" @click="confirm" @keyup.enter="confirm">Login</button>
        <div class="login_form_info">
          <p class="login_form_info_p">저희 사이트에 처음이신가요?&nbsp;&nbsp;&nbsp;</p>
          <router-link to="/member/joinform">
            <p class="login_form_info_p2">가입하기</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "LoginForm",

  data() {
    return {
      user: {
        userId: null,
        userPwd: null,
      },
    };
  },

  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    async confirm() {
      console.log("in login form");
      console.log(this.user);
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      console.log("1. confirm() token >> " + token);
      if (this.isLogin) {
        await this.getUserInfo(token);
        // console.log("4. confirm() userInfo :: ", this.userInfo);
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
@import "@/assets/css/member.css";
</style>
