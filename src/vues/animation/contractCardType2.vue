<template>
  <Vue3Lottie :animationData="contractCardJSON" class="w-[250px] h-[250px]" />
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
