<template>
  <v-container grid-list-xs class="d-flex">
    <v-card class="mx-auto" width="500">
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

            <div
              class="actions--card v-skeleton-loader v-skeleton-loader--boilerplate v-skeleton-loader--is-loading theme--light elevation-2 mb-6"
            >
              <v-skeleton-loader type="button"></v-skeleton-loader>
              <v-skeleton-loader type="button"></v-skeleton-loader>
              <v-skeleton-loader type="button"></v-skeleton-loader>
            </div>
          </v-col>

          <v-col cols="12">
            <v-img
              :src="bookslistLoader"
              :lazy-src="bookslistLoader"
              aspect-ratio="1"
              class="grey lighten-2 profile--img"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
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
  computed: {
    bookslist() {
      return this.$store.state.bookslist.items[0];
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