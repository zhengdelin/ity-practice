<template>
  <div class="space-y-20">
    <div
      class="relative flex justify-end items-center w-[520px] 2xl:w-[720px] h-[480px] 2xl:h-[660px]"
    >
      <seller-Info-area
        class="absolute bottom-0 right-0 w-[480px] 2xl:w-[660p] h-[480px] 2xl:h-[660px] text-white"
      ></seller-Info-area>
      <Vue3Lottie
        :animationData="sellerInfoJSON"
        class="w-[280px] 2xl:w-[380px] h-[280px] 2xl:h-[380px]"
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
import sellerInfoArea from "@/vues/functionIntro/sellerInfoArea.vue";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import sellerInfoJSON from "@/vues/json/people-reading-news-on-phone.json";

export default {
  components: {
    Vue3Lottie,
    sellerInfoArea: sellerInfoArea,
    classicSmallItem: classicSmallItem,
  },
  data() {
    return {
      sellerInfoJSON,
    };
  },
};
</script>
