<!--Use:sellerSystemFunction-->
<template>
  <Vue3Lottie
    :animationData="questionDeliveryJSON"
    class="w-[280px] md:w-[380px] h-[280px] md:h-[380px]"
  />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import questionDeliveryJSON from "@/vues/json/delivery-motorbike.json";

export default {
  name: "questionFour",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      questionDeliveryJSON,
    };
  },
};
</script>
