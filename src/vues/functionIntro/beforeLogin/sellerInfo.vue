<!--Use:systemFunctionBeforeLogin, consumerSystemFunction-->
<template>
  <div class="space-y-10 xl:space-y-20 md:w-1/2">
    <div
      class="relative flex justify-end items-center w-full 2xl:w-[720px] h-[480px] 2xl:h-[660px]"
    >
      <seller-Info-area
        class="absolute bottom-0 right-0 w-full 2xl:w-[660p] h-[480px] 2xl:h-[660px] text-white"
      ></seller-Info-area>
      <Vue3Lottie
        :animationData="sellerInfoJSON"
        class="w-[280px] md:w-60 2xl:w-[380px] h-[280px] md:h-60 2xl:h-[380px]"
      />
    </div>
    <div class="grid justify-items-center lg:justify-items-center">
      <classic-small-item :title="'商家資訊'"></classic-small-item>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import sellerInfoArea from "@/vues/functionArea/areaType3.vue";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import sellerInfoJSON from "@/vues/json/people-reading-news-on-phone.json";

export default {
  components: {
    Vue3Lottie,
    sellerInfoArea,
    classicSmallItem,
  },
  setup() {
    return { sellerInfoJSON };
  },
};
</script>
