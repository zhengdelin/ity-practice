<!--Use:sellerInfoPage/couponPage-->
<template>
  <div
    class="w-4/5 md:w-2/3 2xl:w-[800px] h-60 lg:h-80 2xl:h-[350px] bg-[#B2415C] cursor-pointer"
  >
    <div class="flex flex-row h-full items-center">
      <div
        class="flex items-center justify-center rotate-90 w-1/6 text-white text-3xl lg:text-4xl 2xl:text-5xl tracking-[0.3em] font-mono"
      >
        COUPON
      </div>
      <div class="flex flex-col items-start w-1/6 py-5 space-y-5">
        <div
          class="w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 bg-white rounded-full invisible lg:visible"
        ></div>
        <div
          class="w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 bg-white rounded-full"
        ></div>
        <div
          class="w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 bg-white rounded-full"
        ></div>
        <div
          class="w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 bg-white rounded-full"
        ></div>
        <div
          class="w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 bg-white rounded-full"
        ></div>
        <div
          class="w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 bg-white rounded-full"
        ></div>
        <div
          class="w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 bg-white rounded-full"
        ></div>
        <div
          class="w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 bg-white rounded-full"
        ></div>
        <div
          class="w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 bg-white rounded-full"
        ></div>
        <div
          class="w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 bg-white rounded-full"
        ></div>
        <div
          class="w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 bg-white rounded-full invisible lg:visible"
        ></div>
      </div>

      <div class="flex flex-col w-4/6">
        <p
          class="flex justify-center items-center h-1/2 text-5xl xl:text-7xl font-bold tracking-wider text-white"
        >
          SALE
        </p>
        <div class="flex items-end h-1/2">
          <Vue3Lottie
            :animationData="saleJSON"
            class="w-40 lg:w-[200px] h-40 lg:h-[200px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import saleJSON from "@/vues/json/sale-animation.json";

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      saleJSON,
    };
  },
};
</script>
