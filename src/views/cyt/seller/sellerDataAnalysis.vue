<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 mb-20 2xl:mb-40"
  >
    <classic-title
      :content="'後臺數據分析'"
      class="w-full bg-[#76448A]"
    ></classic-title>
    <!--不知道要放什麼-->
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";

export default {
  name: "dataAnalysisPage",
  components: {
    classicTitle,
  },
  setup() {},
};
</script>
