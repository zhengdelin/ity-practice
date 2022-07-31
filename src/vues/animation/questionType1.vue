<template>
  <Vue3Lottie :animationData="questionOrangeJSON" class="w-[380px] h-[380px]" />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import questionOrangeJSON from "@/vues/json/question-boy-orange.json";

export default {
  name: "sellerAnimation",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      questionOrangeJSON,
    };
  },
  methods: {},
};
</script>
