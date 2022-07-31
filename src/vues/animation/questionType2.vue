<template>
  <Vue3Lottie :animationData="questionBlueJSON" class="w-[380px] h-[380px]" />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import questionBlueJSON from "@/vues/json/question-boy-blue.json";

export default {
  name: "sellerAnimation",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      questionBlueJSON,
    };
  },
  methods: {},
};
</script>
