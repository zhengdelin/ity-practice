<template>
  <div
    class="flex items-center justify-between w-full px-5 sm:px-10 h-24 lg:h-32 xl:h-[150px] bg-white"
  >
    <div class="cursor-pointer">
      <router-link :to="{ name: 'organizationHome' }" class="w-full">
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
      :alert="'⚠ (組織端)是否確認要登出'"
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
import collaborateIcon from "@/vues/icons/collaborateIcon.vue";
import profileIcon from "@/vues/icons/profileIcon.vue";
import logoutIcon from "@/vues/icons/logoutIcon.vue";
import alertItem from "@/vues/shows/alertItem.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  name: "organizationHeader",
  components: {
    ityHeaderLogo,
    headerElement,
    alertItem,
    // questionIcon,
    // contractIcon,
    // collaborateIcon,
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
        routeName: "organizationSystemFunction",
        type: "router",
      },
      {
        name: "簽署合約",
        icon: contractIcon,
        routeName: "organizationContractIntro",
        type: "router",
      },
      {
        name: "聯合活動",
        icon: collaborateIcon,
        routeName: "organizationJointLaunchEvents",
        type: "router",
      },
      {
        name: "個人資料",
        icon: profileIcon,
        routeName: "organizationInfo",
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
