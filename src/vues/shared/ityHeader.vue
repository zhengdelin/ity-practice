<template>
  <div
    class="flex items-center justify-between w-full px-5 sm:px-10 h-24 lg:h-32 xl:h-[150px] bg-white"
  >
    <div class="cursor-pointer" @click="reload()">
      <ity-header-logo
        class="w-20 sm:w-30 lg:w-32 xl:w-40 h-10 sm:h-15 lg:h-16 xl:h-20"
      ></ity-header-logo>
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
import loginIcon from "@/vues/icons/loginIcon.vue";
import searchIcon from "@/vues/icons/searchIcon.vue";
import questionIcon from "@/vues/icons/questionIcon.vue";

export default {
  name: "sharedHeader",
  components: {
    ityHeaderLogo: ityHeaderLogo,
    headerElement: headerElement,
    // eslint-disable-next-line vue/no-unused-components
    loginIcon: loginIcon,
    // eslint-disable-next-line vue/no-unused-components
    searchIcon: searchIcon,
    // eslint-disable-next-line vue/no-unused-components
    questionIcon: questionIcon,
  },
  data() {
    return {
      headerElementList: [
        { name: "登入", icon: loginIcon, routeName: "" },
        { name: "找優惠", icon: searchIcon },
        {
          name: "系統使用",
          icon: questionIcon,
          routeName: "systemFunctionBeforeLogin",
        },
      ],
    };
  },
  methods: {
    /*onButtonClick(item) {
      if (item.name == "系統使用") {
        this.redirectToSystemFunctionBeforeLogin();
      }
    },*/
    /*if (headerElement.name == "系統使用") {
      redirectToSystemFunctionBeforeLogin();
    },

    redirectToSystemFunctionBeforeLogin() {
      window.location = this.baseUrl() + "/cyt/system-function-beforelogin";
    },
    baseUrl() {
      return window.location.origin;
    },*/
    reload() {
      location.reload();
    },
  },
};
</script>
