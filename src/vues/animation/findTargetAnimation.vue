<template>
  <Vue3Lottie
    :animationData="findTargetJSON"
    class="w-[140px] sm:w-52 md:w-60 lg:w-72 xl:w-[300px] h-[140px] sm:h-52 md:h-60 lg:h-72 xl:h-[300px]"
  />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import findTargetJSON from "@/vues/json/find-target.json";

export default {
  name: "findTargetAnimation",
  components: {
    Vue3Lottie,
  },
  setup() {
    return { findTargetJSON };
  },
};
</script>
