<template>
  <Vue3Lottie :animationData="marketingJSON" class="w-[300px] h-[300px]" />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import marketingJSON from "@/vues/json/marketing.json";

export default {
  name: "sellerAnimation",
  components: {
    Vue3Lottie,
  },
  setup() {
    return { marketingJSON };
  },
};
</script>
