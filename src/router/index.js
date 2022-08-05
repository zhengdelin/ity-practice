import { createRouter, createWebHistory } from "vue-router";
import ityHeader from "@/vues/shared/ityHeader.vue";
import ityFooter from "@/vues/shared/ityFooter.vue";
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
    path: "/cyt/login",
    name: "loginPage",
    components: {
      default: () => import("@/views/cyt/loginPage.vue"),
      ityHeader,
      ityFooter,
    },
  },
  {
    path: "/cyt/signup",
    name: "signUpPage",
    components: {
      default: () => import("@/views/cyt/signUpPage.vue"),
      ityHeader,
      ityFooter,
    },
  },
  {
    path: "/cyt/each-seller-page",
    name: "eachsellerPage",
    components: {
      default: () => import("@/views/cyt/sellerPage.vue"),
      ityHeader,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-info",
    name: "sellerInfo",
    components: {
      default: () => import("@/views/cyt/sellerInfo.vue"),
      ityHeader,
      ityFooter,
    },
  },
  {
    path: "/cyt/revise-seller-info",
    name: "reviseSellerInfo",
    components: {
      default: () => import("@/views/cyt/reviseSellerInfo.vue"),
      ityHeader,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/system-function-beforelogin",
    name: "systemFunctionBeforeLogin",
    components: {
      default: () => import("@/views/cyt/systemFunctionBeforeLogin.vue"),
      ityHeader,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/consumer-system-function",
    name: "consumerSystemFunction",
    components: {
      default: () => import("@/views/cyt/consumerSystemFunction.vue"),
      ityHeader,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-system-function",
    name: "sellerSystemFunction",
    components: {
      default: () => import("@/views/cyt/sellerSystemFunction.vue"),
      ityHeader,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/organization-system-function",
    name: "organizationSystemFunction",
    components: {
      default: () => import("@/views/cyt/organizationSystemFunction.vue"),
      ityHeader,
      backTop,
      ityFooter,
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
