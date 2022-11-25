<template>
  <div class="col-12">
    <div class="card recent-sales overflow-auto">
      <div class="card-body"><board-input-item type="register" /></div>
    </div>
  </div>
</template>

<script>
import BoardInputItem from "@/components/Board/item/BoardInputItem";

export default {
  name: "BoardWrite",
  components: {
    BoardInputItem,
  },
};
</script>

<style></style>
