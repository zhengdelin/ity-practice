<!--Use:systemFunctionBeforeLogin, consumerSystemFunction-->
<template>
  <Vue3Lottie
    :animationData="questionRedJSON"
    class="w-[280px] md:w-[380px] h-[280px] md:h-[380px]"
  />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import questionRedJSON from "@/vues/json/question-boy-red.json";

export default {
  name: "questionThree",
  components: {
    Vue3Lottie,
  },
  setup() {
    return { questionRedJSON };
  },
};
</script>
