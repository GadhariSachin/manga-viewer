<template>
  <v-app>
    <v-main>
      <v-container grid-list-xs>
        <BooksList />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    BooksList: () => import("@/components/BooksListComponent.vue"),
  },

  data: () => ({
    //
  }),
};
</script>
