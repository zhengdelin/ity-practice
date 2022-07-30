<template>
  <div class="space-y-20">
    <div class="flex justify-end w-[860px] h-[660px] bg-[#C4C4C4]">
      <div class="w-[660px] h-[660px] bg-white"></div>
    </div>
    <div>
      <classic-small-item :title="'商家優惠券(集點卡)'"></classic-small-item>
    </div>
    <!--<Vue3Lottie
    :animationData="clothesSaleJSON"
    class="w-40 lg:w-[200px] h-40 lg:h-[200px]"
    />-->
  </div>
</template>

<script>
//import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";

//import clothesSaleJSON from "@/vues/json/clothes-sale-animation.json";

export default {
  components: {
    //Vue3Lottie,
    classicSmallItem: classicSmallItem,
  },
  data() {
    return {};
  },
};
</script>
