import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/book/:id/",
    name: "BooksDetail",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "BooksDetail" */ "@/components/BooksDetailComponent.vue"
      ),
    children: [
      {
        path: "chapter/:chapterId",
        name: "ChapterDetail",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "BooksChapter" */ "@/components/BooksChapterComponent.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
