<template>
  <div
    class="flex items-center justify-between w-full px-10 h-24 xl:h-[150px] bg-white"
  >
    <div class="cursor-pointer">
      <ity-header-logo></ity-header-logo>
    </div>
    <div class="flex flex-row">
      <headerElement
        v-for="(item, index) in headerElementList"
        :key="index"
        :headerElement="item"
      ></headerElement>
    </div>
    <!--<div class="flex flex-row">
      <header-element :name="'登入'"></header-element>
      <header-element :name="'找優惠'"></header-element>
      <header-element :name="'系統使用'"></header-element>
    </div>-->
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
        { name: "123", icon: loginIcon },
        { name: "456", icon: searchIcon },
        { name: "789", icon: questionIcon },
      ],
    };
  },
};
</script>
