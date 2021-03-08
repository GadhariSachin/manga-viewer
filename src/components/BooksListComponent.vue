<template>
  <v-container grid-list-xs class="d-flex">
    <v-card v-if="bookslistLoader" class="mx-auto" width="600">
      <v-card-title primary-title> Manga </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <div
              class="actions--card v-skeleton-loader v-skeleton-loader--boilerplate v-skeleton-loader--is-loading theme--light elevation-2 mb-6"
            >
              <v-skeleton-loader type="button"></v-skeleton-loader>
              <v-skeleton-loader type="button"></v-skeleton-loader>
              <v-skeleton-loader type="button"></v-skeleton-loader>
            </div>

            <BooksDetail />
          </v-col>

          <v-col cols="12">
            <BooksChapter />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card v-else class="mx-auto" width="600">
      <v-card-title primary-title> Manga </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <div class="d-flex justify-space-around">
              <v-btn
                v-for="book in bookslist"
                :key="book.id"
                light
                :to="{ name: 'BooksDetail', params: { id: book.id } }"
              >
                {{ book.title }}
              </v-btn>
            </div>
            <BooksDetail :key="$route.params" />
          </v-col>

          <v-col cols="12">
            <BooksChapter />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script>
export default {
  name: "BooksListComponent",
  data: () => ({
    attrs: {
      class: "mb-6",
      boilerplate: false,
      elevation: 2,
    },
  }),
  components: {
    BooksChapter: () => import("./BooksChapterComponent"),
    BooksDetail: () => import("./BooksDetailComponent"),
  },
  computed: {
    bookslist() {
      return this.$store.state.bookslist;
    },
    bookslistLoader() {
      return this.$store.state.bookslistLoader;
    },
  },
  mounted() {
    this.$store.dispatch("GetBooksList");
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