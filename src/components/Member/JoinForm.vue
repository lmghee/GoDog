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
        <button class="login_form_delete_btn" @click="SET_IS_VIS">x</button>
      </router-link>
      <div class="login_form_right_inner_container">
        <h1 class="login_form_right_title">회원가입</h1>
        <form class="join_form">
          <p class="login_form_right_p">ID</p>
          <input class="login_form_input" />
          <div class="join_form_empty"></div>
          <p class="login_form_right_p">Password</p>
          <input class="login_form_input" />
          <div class="join_form_empty"></div>
          <p class="login_form_right_p">Name</p>
          <input class="login_form_input" />
          <div class="join_form_empty"></div>
          <p class="login_form_right_p">Email</p>
          <input class="login_form_input" />
          <div class="join_form_empty"></div>
        </form>
        <button class="login_form_loginBtn">Join</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

const visibleStore = "visibleStore";

export default {
  name: "joinForm",

  methods: {
    ...mapMutations(visibleStore, ["SET_IS_VIS"]),
  },
};
</script>

<style>
@import "@/assets/css/member.css";
</style>
