<template>
  <div class="space-y-20">
    <div class="flex justify-end w-[720px] h-[660px]">
      <div class="flex items-center w-[660px] h-[660px] bg-[#76448A]">
        <Vue3Lottie
          :animationData="sellerInfoJSON"
          class="w-[380px] h-[380px]"
        />
      </div>
    </div>
    <div>
      <classic-small-item :title="'商家資訊'"></classic-small-item>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import sellerInfoJSON from "@/vues/json/people-reading-news-on-phone.json";

export default {
  components: {
    Vue3Lottie,
    classicSmallItem: classicSmallItem,
  },
  data() {
    return {
      sellerInfoJSON,
    };
  },
};
</script>
