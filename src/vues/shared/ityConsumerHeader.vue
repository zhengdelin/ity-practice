<template>
  <div
    class="flex items-center justify-between w-full px-5 sm:px-10 h-24 lg:h-32 xl:h-[150px] bg-white"
  >
    <div class="cursor-pointer">
      <router-link :to="{ name: '' }" class="w-full">
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
</template>

<script>
import ityHeaderLogo from "@/vues/icons/ityHeaderLogo.vue";
import headerElement from "@/vues/buttons/headerElement.vue";
import questionIcon from "@/vues/icons/questionIcon.vue";
import searchIcon from "@/vues/icons/searchIcon.vue";
import ticketIcon from "@/vues/icons/ticketIcon.vue";
import heartIcon from "@/vues/icons/heartIcon.vue";
import orderIcon from "@/vues/icons/orderIcon.vue";
import profileIcon from "@/vues/icons/profileIcon.vue";
import logoutIcon from "@/vues/icons/logoutIcon.vue";

export default {
  name: "sharedHeader",
  components: {
    ityHeaderLogo,
    headerElement,
    // questionIcon,
    // searchIcon,
    // ticketIcon,
    // heartIcon,
    // orderIcon,
    // profileIcon,
    // logoutIcon,
  },
  setup() {
    const headerElementList = [
      {
        name: "系統使用",
        icon: questionIcon,
        routeName: "organizationSystemFunction",
      },
      {
        name: "找優惠",
        icon: searchIcon,
        routeName: "",
      },
      {
        name: "我的優惠券 ",
        icon: ticketIcon,
        routeName: "",
      },
      {
        name: "收藏",
        icon: heartIcon,
        routeName: "",
      },
      {
        name: "預約訂餐",
        icon: orderIcon,
        routeName: "",
      },
      {
        name: "個人資料",
        icon: profileIcon,
        routeName: "",
      },
      {
        name: "登出",
        icon: logoutIcon,
        routeName: "",
      },
    ];
    return { headerElementList };
  },
};
</script>
