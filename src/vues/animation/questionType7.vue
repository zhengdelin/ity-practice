<template>
  <Vue3Lottie
    :animationData="questionRainJSON"
    class="w-[280px] md:w-[380px] h-[280px] md:h-[380px]"
  />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import questionRainJSON from "@/vues/json/rain-tweetstorm-cartoon-lottie.json";

export default {
  name: "questionSeven",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      questionRainJSON,
    };
  },
};
</script>
