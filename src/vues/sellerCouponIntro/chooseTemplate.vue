<!--Use:sellerMakeCoupon-->
<template>
  <div class="space-y-10 xl:space-y-20 md:w-1/2">
    <div class="flex flex-row items-center justify-between">
      <classic-small-item :title="'STEP 1'"></classic-small-item>
      <div class="w-20 xl:w-[120px] h-20 xl:h-[120px]">
        <Vue3Lottie :animationData="numberOneJSON" class="" />
      </div>
    </div>
    <div class="space-y-5 sm:space-y-10 xl:space-y-12 2xl:space-y-[60px]">
      <div
        class="relative flex justify-end items-center w-full 2xl:w-[720px] h-[480px] 2xl:h-[660px]"
      >
        <choose-template-area
          class="absolute bottom-0 right-0 w-full 2xl:w-[660p] h-[480px] 2xl:h-[660px] text-white"
        ></choose-template-area>
        <Vue3Lottie
          :animationData="designerJSON"
          class="w-[280px] md:w-60 2xl:w-[380px] h-[280px] md:h-60 2xl:h-[380px]"
        />
      </div>
      <div
        class="text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-wider"
      >
        選擇優惠券模板
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import chooseTemplateArea from "@/vues/functionArea/areaType1.vue";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import designerJSON from "@/vues/json/designer.json";
import numberOneJSON from "@/vues/json/number-1-animate.json";

export default {
  components: {
    Vue3Lottie,
    chooseTemplateArea,
    classicSmallItem,
  },
  setup() {
    return { designerJSON, numberOneJSON };
  },
};
</script>
