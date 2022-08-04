<template>
  <div class="space-y-10 xl:space-y-20 md:w-1/2">
    <div
      class="relative flex justify-end items-center w-full 2xl:w-[720px] h-[480px] 2xl:h-[660px]"
    >
      <review-area
        class="absolute bottom-0 right-0 w-full 2xl:w-[660p] h-[480px] 2xl:h-[660px] text-white"
      ></review-area>
      <Vue3Lottie
        :animationData="reviewJSON"
        class="w-[280px] md:w-60 2xl:w-[380px] h-[280px] md:h-60 2xl:h-[380px]"
      />
    </div>
    <div class="grid justify-items-center lg:justify-items-center">
      <classic-small-item :title="'評論'"></classic-small-item>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import reviewArea from "@/vues/functionArea/areaType8.vue";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import reviewJSON from "@/vues/json/review-animation.json";

export default {
  components: {
    Vue3Lottie,
    reviewArea,
    classicSmallItem,
  },
  data() {
    return {
      reviewJSON,
    };
  },
};
</script>
