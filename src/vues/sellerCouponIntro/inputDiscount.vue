<!--Use:sellerMakeCoupon-->
<template>
  <div class="space-y-10 xl:space-y-20 md:w-1/2">
    <div class="flex flex-row items-center justify-between">
      <classic-small-item :title="'STEP 2'"></classic-small-item>
      <div class="w-20 xl:w-[120px] h-20 xl:h-[120px] bg-black"></div>
    </div>
    <div class="space-y-5 sm:space-y-10 xl:space-y-12 2xl:space-y-[60px]">
      <div
        class="relative flex justify-end items-center w-full 2xl:w-[720px] h-[480px] 2xl:h-[660px]"
      >
        <input-discount-area
          class="absolute bottom-0 right-0 w-full 2xl:w-[660p] h-[480px] 2xl:h-[660px] text-white"
        ></input-discount-area>
        <Vue3Lottie
          :animationData="inputJSON"
          class="w-[280px] md:w-60 2xl:w-[380px] h-[280px] md:h-60 2xl:h-[380px]"
        />
      </div>
      <div
        class="text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-wider"
      >
        輸入折扣
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import inputDiscountArea from "@/vues/functionArea/areaType2.vue";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import inputJSON from "@/vues/json/graphic-design.json";

export default {
  components: {
    Vue3Lottie,
    inputDiscountArea,
    classicSmallItem,
  },
  setup() {
    return { inputJSON };
  },
};
</script>
