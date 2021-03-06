import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookslist: [],
    booksListLoader: false,
    bookDetail: {},
    bookDetailLoader: false,
    chapterDetail: {},
    chapterDetailLoader: false,
  },
  mutations: {
    bookslistMutation(state, response) {
      state.bookslist = response;
    },
    booksListLoaderMutation(state, response) {
      state.booksListLoader = response;
    },
    bookDetailMutation(state, response) {
      state.bookDetail = response;
    },
    bookDetailLoaderMutation(state, response) {
      state.bookDetailLoader = response;
    },
    chapterDetailMutation(state, response) {
      state.chapterDetail = response;
    },
    chapterDetailLoaderMutation(state, response) {
      state.chapterDetailLoader = response;
    },
  },
  actions: {
    GetBooksList(context) {
      context.commit("booksListLoaderMutation", true);
      axios
        .get("http://18.179.108.80:8080/books/")
        .then(function(response) {
          context.commit("bookslistMutation", response.data);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          context.commit("booksListLoaderMutation", false);
        });
    },
    GetBookDetails(context, bookId) {
      context.commit("bookDetailLoaderMutation", true);
      axios
        .get(`http://18.179.108.80:8080/books/${bookId}/`)
        .then(function(response) {
          context.commit("bookDetailMutation", response.data);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          context.commit("bookDetailLoaderMutation", false);
        });
    },
    GetChapterDetails(context, chapterId) {
      context.commit("chapterDetailLoaderMutation", true);
      axios
        .get(`http://18.179.108.80:8080/chapters/${chapterId}/`)
        .then(function(response) {
          context.commit("chapterDetailMutation", response.data);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          context.commit("chapterDetailLoaderMutation", false);
        });
    },
  },
});
