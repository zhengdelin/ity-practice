<template>
  <Vue3Lottie
    :animationData="questionSessioJSON"
    class="w-[280px] md:w-[380px] h-[280px] md:h-[380px]"
  />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import questionSessioJSON from "@/vues/json/brainstorming-session.json";

export default {
  name: "questionEight",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      questionSessioJSON,
    };
  },
  methods: {},
};
</script>
