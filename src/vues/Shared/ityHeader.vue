<template>
  <div
    class="flex items-center justify-between w-full px-10 h-24 xl:h-[150px] bg-white"
  >
    <div class="cursor-pointer">
      <!--<ity-header-logo></ity-header-logo>-->
    </div>
    <div class="flex flex-row">
      <header-element :name="'登入'"></header-element>
      <header-element :name="'找優惠'"></header-element>
      <header-element :name="'系統使用'"></header-element>
    </div>
  </div>
</template>

<script>
//import ityHeaderLogo from "@/vues/icons/ityHeaderLogo.vue";
import headerElement from "@/vues/buttons/headerElement.vue";

export default {
  name: "sharedHeader",
  components: {
    //ityHeaderLogo: ityHeaderLogo,
    headerElement: headerElement,
  },
};
</script>
