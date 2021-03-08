<template>
  <div>
    <v-img
      :src="chapterDetail"
      :lazy-src="chapterDetail"
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
  </div>
</template>


<script>
export default {
  name: "BooksChapterComponent",
  data: () => ({
    attrs: {
      class: "mb-6",
      boilerplate: false,
      elevation: 2,
    },
  }),
  computed: {
    chapterDetail() {
      return this.$store.state.chapterDetail;
    },
    chapterDetailLoader() {
      return this.$store.state.chapterDetailLoader;
    },
  },
  mounted() {
    // const { chapterId } = this.$route.params;
    // this.$store.dispatch("GetChapterDetails", chapterId);
  },
};
</script>