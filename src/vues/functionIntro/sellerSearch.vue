<template>
  <div class="space-y-20">
    <div class="flex justify-end w-[720px] h-[660px]">
      <div class="flex items-center w-[660px] h-[660px] bg-[#E07860]">
        <Vue3Lottie :animationData="searchJSON" class="w-[380px] h-[380px]" />
      </div>
    </div>
    <div>
      <classic-small-item :title="'搜尋店家'"></classic-small-item>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import searchJSON from "@/vues/json/job-hunt-concept.json";

export default {
  components: {
    Vue3Lottie,
    classicSmallItem: classicSmallItem,
  },
  data() {
    return {
      searchJSON,
    };
  },
};
</script>
