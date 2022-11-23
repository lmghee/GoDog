<template>
  <div class="col-12">
    <div class="card recent-sales overflow-auto">
      <div class="card-body">
        <h5 class="card-title">Bookmark <span>| Tour </span></h5>
        <table class="table table-borderless datatable">
          <thead>
            <tr>
              <th style="display: none"></th>
              <th>title</th>
              <th>address</th>
              <th>tel</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="boardlist">
            <bookmark-list-item
              v-for="(bookmark, index) in bookmarks"
              :key="index"
              :bookmark="bookmark"
            ></bookmark-list-item>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { bookmarklist } from "@/api/bookmark";
import { mapState } from "vuex";
import BookmarkListItem from "@/components/Map/BookmarkListItem.vue";

const memberStore = "memberStore";

export default {
  name: "BookmarkList",
  components: {
    BookmarkListItem,
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  data() {
    return {
      bookmarks: [],
    };
  },
  created() {
    let param = this.$store.state.memberStore.userInfo.userId;
    bookmarklist(
      param,
      ({ data }) => {
        this.bookmarks = data.bookmarks;
      },
      (error) => {
        console.log(error);
      }
    );
  },
  methods: {},
};
</script>

<style>
@import "@/assets/css/bookmark.css";
</style>
