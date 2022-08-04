import { createRouter, createWebHistory } from "vue-router";
import backTop from "@/vues/shared/backTopItem.vue";
const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: () => import("@/views/Home.vue"),
    },
  },
  {
    path: "/cyt/each-seller-page",
    name: "eachsellerPage",
    components: {
      default: () => import("@/views/cyt/sellerPage.vue"),
      backTop,
    },
  },
  {
    path: "/cyt/seller-info",
    name: "sellerInfo",
    component: () => import("@/views/cyt/sellerInfo.vue"),
  },
  {
    path: "/cyt/revise-seller-info",
    name: "reviseSellerInfo",
    components: {
      default: () => import("@/views/cyt/reviseSellerInfo.vue"),
      backTop,
    },
  },
  {
    path: "/cyt/system-function-beforelogin",
    name: "systemFunctionBeforeLogin",
    components: {
      default: () => import("@/views/cyt/systemFunctionBeforeLogin.vue"),
      backTop,
    },
  },
  {
    path: "/cyt/consumer-system-function",
    name: "consumerSystemFunction",
    components: {
      default: () => import("@/views/cyt/consumerSystemFunction.vue"),
      backTop,
    },
  },
  {
    path: "/cyt/seller-system-function",
    name: "sellerSystemFunction",
    components: {
      default: () => import("@/views/cyt/sellerSystemFunction.vue"),
      backTop,
    },
  },
  {
    path: "/cyt/organization-system-function",
    name: "organizationSystemFunction",
    components: {
      default: () => import("@/views/cyt/organizationSystemFunction.vue"),
      backTop,
    },
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
