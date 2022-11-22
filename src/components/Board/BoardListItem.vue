<template>
  <tr>
    <td>{{ article.articleno }}</td>
    <th class="text-left">
      <router-link :to="{ name: 'boardarticleview', params: { articleno: article.articleno } }">{{
        article.subject
      }}</router-link>
    </th>
    <td>{{ article.userId }}</td>
    <td>{{ article.regtime | dateFormat }}</td>
    <td>{{ article.hit }}</td>
  </tr>
</template>

<script>
import moment from "moment";

export default {
  name: "BoardListItem",
  props: {
    article: Object,
  },
  filters: {
    dateFormat(regtime) {
      return moment(new Date(regtime)).format("YY.MM.DD");
    },
  },
};
</script>

<style></style>
