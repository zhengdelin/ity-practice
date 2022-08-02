<template>
  <div class="space-y-10 xl:space-y-20 md:w-1/2">
    <div
      class="relative flex justify-end items-center w-full 2xl:w-[720px] h-[480px] 2xl:h-[660px]"
    >
      <coupon-area
        class="absolute bottom-0 right-0 w-full 2xl:w-[660p] h-[480px] 2xl:h-[660px] text-white"
      ></coupon-area>
      <Vue3Lottie
        :animationData="couponJSON"
        class="w-[280px] md:w-48 2xl:w-[380px] h-[280px] md:h-48 2xl:h-[380px]"
      />
    </div>
    <div class="grid justify-items-center lg:justify-items-center">
      <classic-small-item :title="'商家優惠券(集點卡)'"></classic-small-item>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import couponArea from "@/vues/functionArea/areaType4.vue";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import couponJSON from "@/vues/json/paso-2-club.json";

export default {
  components: {
    Vue3Lottie,
    couponArea: couponArea,
    classicSmallItem: classicSmallItem,
  },
  data() {
    return {
      couponJSON,
    };
  },
};
</script>
