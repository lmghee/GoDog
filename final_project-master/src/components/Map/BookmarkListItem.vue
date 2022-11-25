<template>
  <tr>
    <td id="hiddenno">{{ bookmark.bookmark_no }}</td>
    <td class="ma-2">{{ bookmark.title }}</td>
    <td class="ma-2">{{ bookmark.address }}</td>
    <td class="ma-2">{{ bookmark.tel }}</td>
    <td>
      <v-btn class="ma-1" color="#d90000" plain @click="deleteT(bookmark.bookmark_no)"> Delete </v-btn>
    </td>
    <!-- <td><v-btn depressed color="error" v-on="click">삭제</v-btn></td> -->
  </tr>
</template>

<script>
import { deleteBookmark } from "@/api/bookmark";

export default {
  name: "BookmarkListItem",
  props: {
    bookmark: Object,
  },
  methods: {
    deleteT(bookmarkno) {
      console.log(bookmarkno);
      let param = bookmarkno;
      deleteBookmark(
        param,
        ({ data }) => {
          if (data == "success") {
            location.reload();
          } else {
            alert("잠시후 다시 시도 해주세요");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style scoped>
#hiddenno {
  display: none;
}
.ma-2 {
  padding-top: 15px;
}
</style>
