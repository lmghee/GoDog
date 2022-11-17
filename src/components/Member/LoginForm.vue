<template>
  <div class="login_form_container">
    <div class="login_form_left_container">
      <router-link to="/">
        <img src="@/assets/img/logo.png" class="logoImg2" />
      </router-link>
      <p class="login_fomr_p">댕댕여지도가 추천하는 여행지로반려동물과</p>
      <p class="login_fomr_p">더 아름답고소중한 추억을 만들어보세요</p>
    </div>
    <div class="login_form_right_container">
      <div class="login_form_right_inner_container">
        <h1 class="login_form_right_title">로그인</h1>
        <form class="login_form">
          <p class="login_form_right_p">ID</p>
          <input />
          <p class="login_form_right_p">Password</p>
          <input />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style>
@import "@/assets/css/member.css";
</style>
