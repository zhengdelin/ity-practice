import { createRouter, createWebHistory } from "vue-router";
import ityHeaderBeforeLogin from "@/vues/shared/ityHeaderBeforeLogin.vue";
import itySellerHeader from "@/vues/shared/itySellerHeader.vue";
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
      ityHeaderBeforeLogin,
      ityFooter,
    },
  },
  {
    path: "/cyt/signup",
    name: "signUpPage",
    components: {
      default: () => import("@/views/cyt/signUpPage.vue"),
      ityHeaderBeforeLogin,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/each-seller-page",
    name: "eachsellerPage",
    components: {
      default: () => import("@/views/cyt/sellerPage.vue"),
      ityHeaderBeforeLogin,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-info",
    name: "sellerInfo",
    components: {
      default: () => import("@/views/cyt/sellerInfo.vue"),
      itySellerHeader,
      ityFooter,
    },
  },
  {
    path: "/cyt/revise-seller-info",
    name: "reviseSellerInfo",
    components: {
      default: () => import("@/views/cyt/reviseSellerInfo.vue"),
      itySellerHeader,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-contract-intro",
    name: "sellerContractIntro",
    components: {
      default: () => import("@/views/cyt/sellerContractIntro.vue"),
      //itySellerHeader,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/system-function-beforelogin",
    name: "systemFunctionBeforeLogin",
    components: {
      default: () => import("@/views/cyt/systemFunctionBeforeLogin.vue"),
      ityHeaderBeforeLogin,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/consumer-system-function",
    name: "consumerSystemFunction",
    components: {
      default: () => import("@/views/cyt/consumerSystemFunction.vue"),
      ityHeaderBeforeLogin,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-system-function",
    name: "sellerSystemFunction",
    components: {
      default: () => import("@/views/cyt/sellerSystemFunction.vue"),
      itySellerHeader,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/organization-system-function",
    name: "organizationSystemFunction",
    components: {
      default: () => import("@/views/cyt/organizationSystemFunction.vue"),
      ityHeaderBeforeLogin,
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
