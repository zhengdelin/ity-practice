<template>
  <nav class="flex items-center w-full h-[150px] px-10 bg-white">
    <!--sm:px-4 上方註解-->
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <div><ity-logo></ity-logo></div>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <div class="flex flex-row">
          <header-element :name="'登入'"></header-element>
          <header-element :name="'找優惠'"></header-element>
          <header-element :name="'系統使用'"></header-element>
        </div>
      </div>
    </div>
  </nav>

  <!--<div
    class="flex items-center justify-end w-full px-10 h-[150px] bg-[#C4C4C4]"
  >
    <div class=""><ity-logo></ity-logo></div>
    <div class="flex flex-row">
      <header-element :name="'登入'"></header-element>
      <header-element :name="'找優惠'"></header-element>
      <header-element :name="'系統使用'"></header-element>
    </div>
  </div>-->
</template>

<script>
import ityLogo from "@/vues/icons/ityLogo.vue";
import headerElement from "@/vues/buttons/headerElement.vue";

export default {
  name: "sharedHeader",
  components: {
    ityLogo: ityLogo,
    headerElement: headerElement,
  },
};
</script>
