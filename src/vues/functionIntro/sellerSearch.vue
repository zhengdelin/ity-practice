<template>
  <div class="space-y-20">
    <div
      class="relative flex justify-end items-center w-[520px] 2xl:w-[720px] h-[480px] 2xl:h-[660px]"
    >
      <search-area
        class="absolute bottom-0 right-0 w-[480px] 2xl:w-[660p] h-[480px] 2xl:h-[660px] text-white"
      ></search-area>
      <Vue3Lottie
        :animationData="searchJSON"
        class="w-[280px] 2xl:w-[380px] h-[280px] 2xl:h-[380px]"
      />
    </div>
    <div class="grid justify-items-center lg:justify-items-center">
      <classic-small-item :title="'搜尋店家'"></classic-small-item>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import searchArea from "@/vues/functionIntro/sellerSearchArea.vue";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import searchJSON from "@/vues/json/job-hunt-concept.json";

export default {
  components: {
    Vue3Lottie,
    searchArea: searchArea,
    classicSmallItem: classicSmallItem,
  },
  data() {
    return {
      searchJSON,
    };
  },
};
</script>
