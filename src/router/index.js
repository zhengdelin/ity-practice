import { createRouter, createWebHistory } from "vue-router";
import ityHeaderBeforeLogin from "@/vues/shared/ityHeaderBeforeLogin.vue";
import ityConsumerHeader from "@/vues/shared/ityConsumerHeader.vue";
import itySellerHeader from "@/vues/shared/itySellerHeader.vue";
import ityOrganizationHeader from "@/vues/shared/ityOrganizationHeader.vue";
import ityFooter from "@/vues/shared/ityFooter.vue";
import chatItem from "@/vues/shared/chatItem.vue";
import backTop from "@/vues/shared/backTopItem.vue";
const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: () => import("@/views/Home.vue"),
    },
  },
  //beforeLogin
  {
    path: "/cyt/home-before-login",
    name: "beforeLoginHome",
    components: {
      default: () => import("@/views/cyt/beforeLogin/beforeLoginHome.vue"),
      ityHeaderBeforeLogin,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/login",
    name: "loginPage",
    components: {
      default: () => import("@/views/cyt/beforeLogin/loginPage.vue"),
      ityHeaderBeforeLogin,
      ityFooter,
    },
  },
  {
    path: "/cyt/signup",
    name: "signUpPage",
    components: {
      default: () => import("@/views/cyt/beforeLogin/signUpPage.vue"),
      ityHeaderBeforeLogin,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/find-offer-before-login",
    name: "findOfferBeforeLogin",
    components: {
      default: () => import("@/views/cyt/beforeLogin/findOfferBeofreLogin.vue"),
      ityHeaderBeforeLogin,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/each-seller-page",
    name: "eachsellerPage",
    components: {
      default: () => import("@/views/cyt/beforeLogin/sellerPage.vue"),
      ityHeaderBeforeLogin,
      backTop,
      ityFooter,
    },
  },
  {
    path: "/cyt/system-function-beforelogin",
    name: "systemFunctionBeforeLogin",
    components: {
      default: () =>
        import("@/views/cyt/beforeLogin/systemFunctionBeforeLogin.vue"),
      ityHeaderBeforeLogin,
      backTop,
      ityFooter,
    },
  },
  //consumerIdentity
  {
    path: "/cyt/consumer-home",
    name: "consumerHome",
    components: {
      default: () => import("@/views/cyt/consumer/consumerHome.vue"),
      ityConsumerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/consumer-system-function",
    name: "consumerSystemFunction",
    components: {
      default: () => import("@/views/cyt/consumer/consumerSystemFunction.vue"),
      ityConsumerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/consumer-find-offer",
    name: "consumerFindOffer",
    components: {
      default: () => import("@/views/cyt/consumer/consumerfindOffer.vue"),
      ityConsumerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/mycoupon",
    name: "myCoupon",
    components: {
      default: () => import("@/views/cyt/consumer/myCoupon.vue"),
      ityConsumerHeader,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/liked-seller",
    name: "likedSeller",
    components: {
      default: () => import("@/views/cyt/consumer/likedSeller.vue"),
      ityConsumerHeader,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/reservation",
    name: "reservationPage",
    components: {
      default: () => import("@/views/cyt/consumer/reservationPage.vue"),
      ityConsumerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/consumer-info",
    name: "consumerInfo",
    components: {
      default: () => import("@/views/cyt/consumer/consumerInfo.vue"),
      ityConsumerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  //sellerIdentity
  {
    path: "/cyt/seller-home",
    name: "sellerHome",
    components: {
      default: () => import("@/views/cyt/seller/sellerHome.vue"),
      itySellerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-system-function",
    name: "sellerSystemFunction",
    components: {
      default: () => import("@/views/cyt/seller/sellerSystemFunction.vue"),
      itySellerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  // Contract Function
  {
    path: "/cyt/seller-contract-intro",
    name: "sellerContractIntro",
    components: {
      default: () => import("@/views/cyt/seller/sellerContractIntro.vue"),
      itySellerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-received-contract",
    name: "sellerReceivedContract",
    components: {
      default: () => import("@/views/cyt/seller/sellerReceivedContract.vue"),
      itySellerHeader,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-signed-contract",
    name: "sellerSignedContract",
    components: {
      default: () => import("@/views/cyt/seller/sellerSignedContract.vue"),
      itySellerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-signed-online-contract",
    name: "sellerSignedOnlineContract",
    components: {
      default: () =>
        import("@/views/cyt/seller/sellerSignedOnlineContract.vue"),
      itySellerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-contract-status",
    name: "sellerContractStatus",
    components: {
      default: () => import("@/views/cyt/seller/sellerContractStatus.vue"),
      itySellerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-advertise",
    name: "sellerAdvertise",
    components: {
      default: () => import("@/views/cyt/seller/sellerAdvertise.vue"),
      itySellerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-add-post",
    name: "sellerAddPost",
    components: {
      default: () => import("@/views/cyt/seller/sellerAddPost.vue"),
      itySellerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/seller-info",
    name: "sellerInfo",
    components: {
      default: () => import("@/views/cyt/seller/sellerInfo.vue"),
      itySellerHeader,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/revise-seller-info",
    name: "reviseSellerInfo",
    components: {
      default: () => import("@/views/cyt/seller/reviseSellerInfo.vue"),
      itySellerHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  //organizationIdentity
  {
    path: "/cyt/organization-home",
    name: "organizationHome",
    components: {
      default: () => import("@/views/cyt/organization/organizationHome.vue"),
      ityOrganizationHeader,
      backTop,
      chatItem,
      ityFooter,
    },
  },
  {
    path: "/cyt/organization-system-function",
    name: "organizationSystemFunction",
    components: {
      default: () =>
        import("@/views/cyt/organization/organizationSystemFunction.vue"),
      ityOrganizationHeader,
      backTop,
      chatItem,
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
