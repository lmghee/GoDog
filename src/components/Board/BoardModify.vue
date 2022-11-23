<template>
  <div class="col-12">
    <div class="card recent-sales overflow-auto">
      <div class="card-body"><board-input-item type="modify" /></div>
    </div>
  </div>
</template>

<script>
import BoardInputItem from "@/components/board/item/BoardInputItem";

export default {
  name: "BoardModify",
  components: {
    BoardInputItem,
  },
};
</script>

<style></style>
