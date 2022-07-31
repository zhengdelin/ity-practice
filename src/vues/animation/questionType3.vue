<template>
  <Vue3Lottie :animationData="questionRedJSON" class="w-[380px] h-[380px]" />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import questionRedJSON from "@/vues/json/question-boy-red.json";

export default {
  name: "sellerAnimation",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      questionRedJSON,
    };
  },
  methods: {},
};
</script>
