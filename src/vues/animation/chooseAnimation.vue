<template>
  <Vue3Lottie
    :animationData="chooseJSON"
    class="w-[140px] sm:w-52 md:w-60 lg:w-72 xl:w-[300px] h-[140px] sm:h-52 md:h-60 lg:h-72 xl:h-[300px]"
  />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import chooseJSON from "@/vues/json/choose.json";

export default {
  name: "chooseAnimation",
  components: {
    Vue3Lottie,
  },
  setup() {
    return { chooseJSON };
  },
};
</script>
