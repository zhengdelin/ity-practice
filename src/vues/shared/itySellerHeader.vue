<template>
  <div
    class="flex items-center justify-between w-full px-5 sm:px-10 h-24 lg:h-32 xl:h-[150px] bg-white"
  >
    <div class="cursor-pointer">
      <router-link :to="{ name: 'sellerHome' }" class="w-full">
        <ity-header-logo
          class="w-20 sm:w-30 lg:w-32 xl:w-40 h-10 sm:h-15 lg:h-16 xl:h-20"
        ></ity-header-logo>
      </router-link>
    </div>
    <div class="flex flex-row">
      <headerElement
        v-for="(item, index) in headerElementList"
        :key="index"
        :headerElement="item"
      >
      </headerElement>
    </div>
  </div>
  <div>
    <alert-item
      :alert="'⚠ (賣家端)是否確認要登出'"
      :showable="alertShowable"
      @onCancelClick="onCancelClick"
      @onConfirmClick="onConfirmClick"
    ></alert-item>
  </div>
</template>

<script>
import ityHeaderLogo from "@/vues/icons/ityHeaderLogo.vue";
import headerElement from "@/vues/buttons/headerElement.vue";
import questionIcon from "@/vues/icons/questionIcon.vue";
import contractIcon from "@/vues/icons/contractIcon.vue";
import advertiseIcon from "@/vues/icons/advertiseIcon.vue";
import ticketIcon from "@/vues/icons/ticketIcon.vue";
import profileIcon from "@/vues/icons/profileIcon.vue";
import logoutIcon from "@/vues/icons/logoutIcon.vue";
import alertItem from "@/vues/shows/alertItem.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  name: "sellerHeader",
  components: {
    ityHeaderLogo,
    headerElement,
    alertItem,
    // questionIcon,
    // contractIcon,
    // advertiseIcon,
    // ticketIcon,
    // profileIcon,
    // logoutIcon,
  },
  setup() {
    const alertShowable = ref(false);
    const router = useRouter();
    const onCancelClick = () => {
      alertShowable.value = false;
    };
    const onConfirmClick = () => {
      alertShowable.value = true;
      router.push({ name: "beforeLoginHome" });
    };
    const headerElementList = [
      {
        name: "系統使用",
        icon: questionIcon,
        routeName: "sellerSystemFunction",
        type: "router",
      },
      {
        name: "簽署合約",
        icon: contractIcon,
        routeName: "sellerContractIntro",
        type: "router",
      },
      {
        name: "發布廣告",
        icon: advertiseIcon,
        routeName: "sellerAdvertise",
        type: "router",
      },
      {
        name: "優惠券",
        icon: ticketIcon,
        routeName: "sellerMakeCoupon",
        type: "router",
      },
      {
        name: "個人資料",
        icon: profileIcon,
        routeName: "sellerInfo",
        type: "router",
      },
      {
        name: "登出",
        icon: logoutIcon,
        type: "button",
        onclick: onConfirmClick,
      },
    ];
    return {
      headerElementList,
      onCancelClick,
      onConfirmClick,
      alertShowable,
    };
  },
};
</script>
