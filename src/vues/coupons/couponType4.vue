<template>
  <div class="w-[800px] h-[350px] bg-[#B2415C]">
    <div class="flex flex-row h-full">
      <div
        class="flex items-center justify-center rotate-90 w-1/6 text-white text-5xl tracking-widest font-mono"
      >
        COUPON
      </div>
      <div class="flex flex-col items-start w-1/6 py-5 space-y-5">
        <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
      </div>

      <div class="flex flex-col w-4/6">
        <p
          class="flex justify-center items-center h-1/2 text-7xl font-bold tracking-wider text-white"
        >
          SALE
        </p>
        <div class="flex items-end h-1/2">
          <Vue3Lottie :animationData="saleJSON" class="w-[200px] h-[200px]" />
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
