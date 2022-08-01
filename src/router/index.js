import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/cyt/index",
    name: "cyt-index",
    component: () => import("@/views/cyt/index.vue"),
  },
  {
    path: "/cyt/question",
    name: "question",
    component: () => import("@/views/cyt/questionBeforeLogin.vue"),
  },
  {
    path: "/iris",
    name: "iris",
    component: () => import("@/views/iris"),
  },
  {
    path: "/ting",
    name: "ting",
    component: () => import("@/views/ting"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
