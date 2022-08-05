<!--Use:sellerSystemFunction-->
<template>
  <Vue3Lottie
    :animationData="questionTicketJSON"
    class="w-[280px] md:w-[380px] h-[280px] md:h-[380px]"
  />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import questionTicketJSON from "@/vues/json/ticket2.json";

export default {
  name: "questionFive",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      questionTicketJSON,
    };
  },
};
</script>
