<template>
  <div class="space-y-20">
    <div class="flex justify-end w-[720px] h-[660px]">
      <div class="flex items-center w-[660px] h-[660px] bg-[#9763AB]">
        <Vue3Lottie :animationData="couponJSON" class="w-[380px] h-[380px]" />
      </div>
    </div>
    <div>
      <classic-small-item :title="'商家優惠券(集點卡)'"></classic-small-item>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import couponJSON from "@/vues/json/paso-2-club.json";

export default {
  components: {
    Vue3Lottie,
    classicSmallItem: classicSmallItem,
  },
  data() {
    return {
      couponJSON,
    };
  },
};
</script>
