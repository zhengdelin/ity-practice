<template>
  <Vue3Lottie
    :animationData="marketingJSON"
    class="w-48 md:w-64 xl:w-72 2xl:w-[300px] h-48 md:h-64 xl:h-72 2xl:h-[300px]"
  />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import marketingJSON from "@/vues/json/marketing.json";

export default {
  name: "sellerAnimation",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      marketingJSON,
    };
  },
  methods: {},
};
</script>
