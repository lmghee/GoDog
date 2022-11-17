<template>
  <div class="member_container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MemberView",
  props: ["val"],
  created() {
    this.$emit("val");
  },
};
</script>

<style>
@import "@/assets/css/member.css";
</style>
