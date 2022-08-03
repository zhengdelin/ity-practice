import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/cyt/each-seller-page",
    name: "eachsellerPage",
    component: () => import("@/views/cyt/sellerPage.vue"),
  },
  {
    path: "/cyt/seller-info",
    name: "sellerInfo",
    component: () => import("@/views/cyt/sellerInfo.vue"),
  },
  {
    path: "/cyt/revise-seller-info",
    name: "reviseSellerInfo",
    component: () => import("@/views/cyt/reviseSellerInfo.vue"),
  },
  {
    path: "/cyt/system-function-beforelogin",
    name: "systemFunctionBeforeLogin",
    component: () => import("@/views/cyt/systemFunctionBeforeLogin.vue"),
  },
  {
    path: "/cyt/consumer-system-function",
    name: "consumerSystemFunction",
    component: () => import("@/views/cyt/consumerSystemFunction.vue"),
  },
  {
    path: "/cyt/seller-system-function",
    name: "sellerSystemFunction",
    component: () => import("@/views/cyt/sellerSystemFunction.vue"),
  },
  {
    path: "/cyt/organization-system-function",
    name: "organizationSystemFunction",
    component: () => import("@/views/cyt/organizationSystemFunction.vue"),
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
