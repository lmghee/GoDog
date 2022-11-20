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
      <router-link to="/">
        <button class="login_form_delete_btn">x</button>
      </router-link>
      <div class="login_form_right_inner_container">
        <h1 class="login_form_right_title">회원정보수정</h1>
        <form class="join_form">
          <p class="login_form_right_p">ID</p>
          <input
            readonly
            class="login_form_input"
            v-model="user.userId"
            @keyup.enter="confirm"
          />
          <div class="join_form_empty"></div>

          <p class="login_form_right_p">Password</p>
          <input
            class="login_form_input"
            v-model="user.userPwd"
            @keyup.enter="confirm"
          />
          <div class="join_form_empty"></div>

          <p class="login_form_right_p">Name</p>
          <input
            class="login_form_input"
            v-model="user.userName"
            @keyup.enter="confirm"
          />
          <div class="join_form_empty"></div>

          <p class="login_form_right_p">Email</p>
          <input
            class="login_form_input"
            @keyup.enter="confirm"
            v-model="user.userEmail"
          />
          <div class="join_form_empty"></div>
        </form>
        <button class="login_form_loginBtn" @click="confirm">Revise</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "myPageForm",

  data() {
    return {
      user: {
        userId: this.$store.state.memberStore.userInfo.userId,
        userPwd: this.$store.state.memberStore.userInfo.userPwd,
        userName: this.$store.state.memberStore.userInfo.userName,
        userEmail: this.$store.state.memberStore.userInfo.userEmail,
      },
    };
  },

  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },

  methods: {
    ...mapActions(memberStore, ["userInfoChange"]),

    async confirm() {
      console.log(this.$store.state.memberStore.userInfo.userId);
      console.log(this.user);
      console.log("이부분!!!");
      await this.userInfoChange(this.user);
      this.$router.push({ name: "main" });
    },
  },
};
</script>

<style>
@import "@/assets/css/member.css";
</style>
