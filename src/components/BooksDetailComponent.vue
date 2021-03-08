<template>
  <div>
    <template v-if="bookDetailLoader">
      <div
        class="actions--card v-skeleton-loader v-skeleton-loader--boilerplate v-skeleton-loader--is-loading theme--light elevation-2 mb-6"
      >
        <v-skeleton-loader type="button"></v-skeleton-loader>
        <v-skeleton-loader type="button"></v-skeleton-loader>
        <v-skeleton-loader type="button"></v-skeleton-loader>
      </div>
      <BooksChapter />
    </template>
    <template v-else>
      <div class="d-flex justify-space-around mt-4">
        <v-btn
          v-for="(chapter, index) in bookDetail.chapter_ids"
          :key="index"
          light
        >
          {{ chapter }}
        </v-btn>
      </div>
    </template>
  </div>
</template>


<script>
export default {
  name: "BooksDetailComponent",
  data: () => ({
    attrs: {
      class: "mb-6",
      boilerplate: false,
      elevation: 2,
    },
  }),
  components: {
    BooksChapter: () => import("./BooksChapterComponent"),
  },
  computed: {
    bookDetail() {
      return this.$store.state.bookDetail;
    },
    bookDetailLoader() {
      return this.$store.state.bookDetailLoader;
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.$store.dispatch("GetBookDetails", id);
  },
};
</script>


<style scoped>
.actions--card {
  display: flex;
  justify-content: space-between;
  padding: 18px;
}
</style>