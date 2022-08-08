<!--Use:sellerContractIntro-->
<template>
  <Vue3Lottie
    :animationData="contractCardJSON"
    class="w-40 h-40"
  /><!--預設長寬-->
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import contractCardJSON from "@/vues/json/online-learning.json";

export default {
  name: "questionOne",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      contractCardJSON,
    };
  },
};
</script>
