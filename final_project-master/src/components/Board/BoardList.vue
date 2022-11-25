<template>
  <div class="col-12">
    <div class="card recent-sales overflow-auto">
      <div class="card-body">
        <h5 class="card-title">Review <span>| Today </span></h5>
        <v-btn class="ma-2" outlined small fab color="#1865c9" @click="moveWrite()">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <!-- <b-button pill variant="info" class="btn-write" @click="moveWrite()">글쓰기</b-button> -->

        <table class="table table-borderless datatable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">작성일</th>
              <th scope="col">조회수</th>
            </tr>
          </thead>
          <tbody id="boardlist">
            <board-list-item v-for="(article, index) in articles" :key="index" :article="article"></board-list-item>
            <!-- <td><span class="badge bg-success">Good</span></td>
                 <td><span class="badge bg-warning">SoSo</span></td>
                 <td><span class="badge bg-danger">Bad</span></td> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { listArticle } from "@/api/board";
import BoardListItem from "@/components/Board/BoardListItem.vue";

export default {
  name: "BoardList",
  components: {
    BoardListItem,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    let param = {
      pg: 1,
      spp: 20,
      key: null,
      word: null,
    };
    listArticle(
      param,
      ({ data }) => {
        this.articles = data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
  methods: {
    moveWrite() {
      this.$router.push({ name: "boardwrite" });
    },
  },
};
</script>

<style>
@import "@/assets/css/board.css";
</style>
