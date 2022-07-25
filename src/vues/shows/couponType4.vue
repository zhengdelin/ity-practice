<template>
  <div class="flex items-end w-[800px] h-[350px] bg-[#B2415C]">
    <Vue3Lottie :animationData="saleJSON" class="w-[200px] h-[200px]" />
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
