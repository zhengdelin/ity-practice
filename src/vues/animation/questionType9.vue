<template>
  <Vue3Lottie
    :animationData="questionAnalysisJSON"
    class="w-[280px] md:w-[380px] h-[280px] md:h-[380px]"
  />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import questionAnalysisJSON from "@/vues/json/data-analysis.json";

export default {
  name: "questionNine",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      questionAnalysisJSON,
    };
  },
};
</script>
