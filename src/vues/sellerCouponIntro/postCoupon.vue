<!--Use:sellerMakeCoupon-->
<template>
  <div class="space-y-10 xl:space-y-20 md:w-1/2">
    <div class="flex flex-row items-center justify-between">
      <classic-small-item :title="'STEP 3'"></classic-small-item>
      <div class="w-20 xl:w-[120px] h-20 xl:h-[120px]">
        <Vue3Lottie :animationData="numberThreeJSON" class="" />
      </div>
    </div>
    <div class="space-y-5 sm:space-y-10 xl:space-y-12 2xl:space-y-[60px]">
      <div
        class="relative flex justify-end items-center w-full 2xl:w-[720px] h-[480px] 2xl:h-[660px]"
      >
        <post-coupon-area
          class="absolute bottom-0 right-0 w-full 2xl:w-[660p] h-[480px] 2xl:h-[660px] text-white"
        ></post-coupon-area>
        <Vue3Lottie
          :animationData="announcementJSON"
          class="w-[280px] md:w-60 2xl:w-[380px] h-[280px] md:h-60 2xl:h-[380px]"
        />
      </div>
      <div
        class="text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-wider"
      >
        發布屬於您的優惠券
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import postCouponArea from "@/vues/functionArea/areaType3.vue";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import announcementJSON from "@/vues/json/announcement.json";
import numberThreeJSON from "@/vues/json/number-3-animate.json";

export default {
  components: {
    Vue3Lottie,
    postCouponArea,
    classicSmallItem,
  },
  setup() {
    return { announcementJSON, numberThreeJSON };
  },
};
</script>
