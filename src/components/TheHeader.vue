<template>
  <nav class="header_container">
    <router-link to="/">
      <img src="@/assets/img/logo.png" class="logoImg" />
    </router-link>
    <div class="header_btns">
      <router-link to="/member/loginform">
        <button class="header_btn">로그인</button>
      </router-link>
      <router-link to="/">
        <button class="header_btn">회원가입</button>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
@import "@/assets/css/header.css";
</style>
