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
        <h1 class="login_form_right_title">회원가입</h1>
        <form class="join_form">
          <p class="join_form_right_p">ID</p>
          <input class="login_form_input" v-model="user.userId" @keyup.enter="confirm" />
          <div class="join_form_empty"></div>

          <p class="join_form_right_p">Password</p>
          <input class="login_form_input" v-model="user.userPwd" @keyup.enter="confirm" />
          <div class="join_form_empty"></div>

          <p class="join_form_right_p">Name</p>
          <input class="login_form_input" v-model="user.userName" @keyup.enter="confirm" />
          <div class="join_form_empty"></div>

          <p class="join_form_right_p">Email</p>
          <input class="login_form_input" v-model="user.userEmail" @keyup.enter="confirm" />
        </form>
        <button class="join_form_joinBtn" @click="confirm">Join</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "joinForm",

  data() {
    return {
      user: {
        userId: null,
        userPwd: null,
        userName: null,
        userEmail: null,
      },
    };
  },

  methods: {
    ...mapActions(memberStore, ["userJoin"]),

    async confirm() {
      await this.userJoin(this.user);
      this.$router.push({ name: "main" });
    },
  },
};
</script>

<style>
@import "@/assets/css/member.css";
</style>
